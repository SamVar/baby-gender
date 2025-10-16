/**
 * Core Blood Freshness Calculation Engine
 * Implements deterministic cyclical model for baby gender planning/prediction
 */

export type Sex = 'boy' | 'girl';

export interface DateInput {
  year: number;
  month: number; // 1-12
}

export interface BloodScore {
  male: number;
  female: number;
}

export interface Probability {
  boy: number;
  girl: number;
}

export interface MonthResult {
  date: DateInput;
  scores: BloodScore;
  probabilities: Probability;
  label: 'Leans Boy' | 'Leans Girl' | 'Too Close to Call';
  badge?: 'Best' | 'Great' | 'Good' | 'Fair' | 'Close Call';
}

const MALE_PERIOD = 48; // months
const MALE_MIDPOINT = 24; // months
const FEMALE_PERIOD = 36; // months
const FEMALE_MIDPOINT = 18; // months

/**
 * Calculate months elapsed between two dates (month granularity)
 */
export function monthsSince(from: DateInput, to: DateInput): number {
  return (to.year - from.year) * 12 + (to.month - from.month);
}

/**
 * Calculate blood freshness score using triangular wave
 * @param monthsSinceBirth - Months elapsed since birth
 * @param period - Full cycle period in months
 * @param midpoint - Peak position in months
 * @returns Score in range [0, 1]
 */
function calculateScore(
  monthsSinceBirth: number,
  period: number,
  midpoint: number
): number {
  if (monthsSinceBirth < 0) return 0;
  
  const pos = monthsSinceBirth % period;
  
  if (pos <= midpoint) {
    // Rising phase: 0 → 1
    return pos / midpoint;
  } else {
    // Falling phase: 1 → 0
    return (period - pos) / midpoint;
  }
}

/**
 * Calculate blood freshness scores for both partners at a given date
 */
export function calculateBloodScores(
  maleDOB: DateInput,
  femaleDOB: DateInput,
  targetDate: DateInput
): BloodScore {
  const maleMonths = monthsSince(maleDOB, targetDate);
  const femaleMonths = monthsSince(femaleDOB, targetDate);

  return {
    male: calculateScore(maleMonths, MALE_PERIOD, MALE_MIDPOINT),
    female: calculateScore(femaleMonths, FEMALE_PERIOD, FEMALE_MIDPOINT),
  };
}

/**
 * Calculate probabilities from blood scores
 */
export function calculateProbabilities(scores: BloodScore): Probability {
  const sum = scores.male + scores.female;
  
  if (sum === 0) {
    return { boy: 0.5, girl: 0.5 };
  }
  
  return {
    boy: scores.male / sum,
    girl: scores.female / sum,
  };
}

/**
 * Determine label based on probabilities
 */
export function determineLabel(scores: BloodScore): MonthResult['label'] {
  const probabilities = calculateProbabilities(scores);
  const diff = Math.abs(probabilities.boy - probabilities.girl);
  
  // If the difference in probabilities is less than 20%, it's too close to call
  if (diff < 0.20) {
    return 'Too Close to Call';
  }
  
  return probabilities.boy > probabilities.girl ? 'Leans Boy' : 'Leans Girl';
}

/**
 * Determine badge based on target sex probability
 */
export function determineBadge(
  probability: number
): MonthResult['badge'] | undefined {
  if (probability >= 0.85) return 'Best';
  if (probability >= 0.75) return 'Great';
  if (probability >= 0.68) return 'Good';
  if (probability >= 0.60) return 'Fair';
  return 'Close Call';
}

/**
 * Calculate complete result for a single month
 */
export function calculateMonthResult(
  maleDOB: DateInput,
  femaleDOB: DateInput,
  targetDate: DateInput,
  targetSex?: Sex
): MonthResult {
  const scores = calculateBloodScores(maleDOB, femaleDOB, targetDate);
  const probabilities = calculateProbabilities(scores);
  const label = determineLabel(scores);
  
  const badge = targetSex
    ? determineBadge(probabilities[targetSex])
    : undefined;

  return {
    date: targetDate,
    scores,
    probabilities,
    label,
    badge,
  };
}

/**
 * Generate all months in a date range
 */
export function generateMonthRange(
  start: DateInput,
  end: DateInput
): DateInput[] {
  const months: DateInput[] = [];
  let current = { ...start };
  
  while (
    current.year < end.year ||
    (current.year === end.year && current.month <= end.month)
  ) {
    months.push({ ...current });
    
    current.month++;
    if (current.month > 12) {
      current.month = 1;
      current.year++;
    }
  }
  
  return months;
}

/**
 * Calculate results for all months in range and sort by target sex
 */
export function planBestMonths(
  maleDOB: DateInput,
  femaleDOB: DateInput,
  targetSex: Sex,
  startDate: DateInput,
  endDate: DateInput,
  topN: number = 6
): MonthResult[] {
  const months = generateMonthRange(startDate, endDate);
  
  const results = months.map((date) =>
    calculateMonthResult(maleDOB, femaleDOB, date, targetSex)
  );

  // Sort by target probability (desc), then by absolute difference (desc), then by date (asc)
  results.sort((a, b) => {
    const probDiff = b.probabilities[targetSex] - a.probabilities[targetSex];
    if (Math.abs(probDiff) > 0.001) return probDiff;

    const diffA = Math.abs(a.scores.male - a.scores.female);
    const diffB = Math.abs(b.scores.male - b.scores.female);
    const absDiff = diffB - diffA;
    if (Math.abs(absDiff) > 0.001) return absDiff;

    return monthsSince(a.date, b.date);
  });

  return results.slice(0, topN);
}

/**
 * Plan best months with strict filtering to ensure quality results
 * Searches year-by-year until topN qualifying months are found
 * Only returns Best, Great, and Good months (minimum 68% probability)
 */
export function planBestMonthsStrict(
  maleDOB: DateInput,
  femaleDOB: DateInput,
  targetSex: Sex,
  startDate: DateInput,
  options?: {
    topN?: number;           // default 6
    minProbability?: number; // default 0.68 (Good or better, excludes Fair)
    minDiff?: number;        // default 0.20 (avoid "Too Close to Call")
  }
): MonthResult[] {
  const {
    topN = 6,
    minProbability = 0.68,
    minDiff = 0.20
  } = options || {};

  let collectedResults: MonthResult[] = [];
  let currentYearOffset = 0;
  
  // Search year by year until we have enough qualifying months
  while (collectedResults.length < topN) {
    // Calculate this year's date range (12 months)
    const yearStartDate: DateInput = {
      year: startDate.year + currentYearOffset,
      month: startDate.month
    };
    
    const yearEndDate: DateInput = {
      year: startDate.year + currentYearOffset + 1,
      month: startDate.month === 1 ? 12 : startDate.month - 1
    };
    
    // Generate months for just this year
    const yearMonths = generateMonthRange(yearStartDate, yearEndDate);
    
    // Calculate and filter results for this year only
    const yearResults = yearMonths
      .map(date => calculateMonthResult(maleDOB, femaleDOB, date, targetSex))
      .filter(result => {
        const targetProb = result.probabilities[targetSex];
        const probDiff = Math.abs(result.probabilities.boy - result.probabilities.girl);
        
        // Only accept Best, Great, or Good (excludes Fair and Close Call)
        return targetProb >= minProbability && probDiff >= minDiff;
      });
    
    // Add this year's qualifying months
    collectedResults.push(...yearResults);
    
    // Move to next year
    currentYearOffset++;
  }
  
  // Sort by target probability (desc), then by absolute score difference (desc), then by date (asc)
  collectedResults.sort((a, b) => {
    const probDiff = b.probabilities[targetSex] - a.probabilities[targetSex];
    if (Math.abs(probDiff) > 0.001) return probDiff;

    const diffA = Math.abs(a.scores.male - a.scores.female);
    const diffB = Math.abs(b.scores.male - b.scores.female);
    const absDiff = diffB - diffA;
    if (Math.abs(absDiff) > 0.001) return absDiff;

    return monthsSince(a.date, b.date);
  });

  // Return exactly topN months (sorted by probability)
  return collectedResults.slice(0, topN);
}

/**
 * Calculate next peak date for a person
 */
export function calculateNextPeak(
  dob: DateInput,
  targetDate: DateInput,
  period: number,
  midpoint: number
): DateInput {
  const elapsed = monthsSince(dob, targetDate);
  const pos = elapsed % period;
  
  const monthsToNextPeak = pos <= midpoint
    ? midpoint - pos
    : period - pos + midpoint;
  
  const totalMonths = targetDate.month + monthsToNextPeak;
  const year = targetDate.year + Math.floor((totalMonths - 1) / 12);
  const month = ((totalMonths - 1) % 12) + 1;
  
  return { year, month };
}

/**
 * Get cycle position details for display
 */
export interface CycleDetails {
  position: number; // months into current cycle
  percentToPeak: number; // 0-100
  nextPeak: DateInput;
}

export function getCycleDetails(
  dob: DateInput,
  targetDate: DateInput,
  period: number,
  midpoint: number
): CycleDetails {
  const elapsed = monthsSince(dob, targetDate);
  const position = elapsed % period;
  
  // Calculate percent to peak: positive when ascending, negative when descending
  let percentToPeak: number;
  if (position <= midpoint) {
    // Ascending phase: 0% to 100%
    percentToPeak = (position / midpoint) * 100;
  } else {
    // Descending phase: -0% to -100%
    percentToPeak = -((position - midpoint) / midpoint) * 100;
  }
  
  const nextPeak = calculateNextPeak(dob, targetDate, period, midpoint);
  
  return {
    position,
    percentToPeak,
    nextPeak,
  };
}

export function getMaleCycleDetails(
  maleDOB: DateInput,
  targetDate: DateInput
): CycleDetails {
  return getCycleDetails(maleDOB, targetDate, MALE_PERIOD, MALE_MIDPOINT);
}

export function getFemaleCycleDetails(
  femaleDOB: DateInput,
  targetDate: DateInput
): CycleDetails {
  return getCycleDetails(femaleDOB, targetDate, FEMALE_PERIOD, FEMALE_MIDPOINT);
}

/**
 * Estimate conception window from due date
 * Assumes 38 weeks (266 days ≈ 8.7 months) from conception to due date
 */
export function estimateConceptionWindow(dueDate: Date): [DateInput, DateInput] {
  // Go back ~38 weeks (266 days)
  const conception = new Date(dueDate);
  conception.setDate(conception.getDate() - 266);
  
  // Window: ±2 weeks
  const earlyConception = new Date(conception);
  earlyConception.setDate(earlyConception.getDate() - 14);
  
  const lateConception = new Date(conception);
  lateConception.setDate(lateConception.getDate() + 14);
  
  const start: DateInput = {
    year: earlyConception.getFullYear(),
    month: earlyConception.getMonth() + 1,
  };
  
  const end: DateInput = {
    year: lateConception.getFullYear(),
    month: lateConception.getMonth() + 1,
  };
  
  return [start, end];
}

/**
 * Calculate weighted average probabilities across a window
 */
export function calculateWeightedAverage(
  results: MonthResult[],
  weights: number[]
): Probability {
  if (results.length === 0) return { boy: 0.5, girl: 0.5 };
  
  const normalizedWeights = weights.map((w) => w / weights.reduce((a, b) => a + b, 0));
  
  let boySum = 0;
  let girlSum = 0;
  
  results.forEach((result, i) => {
    boySum += result.probabilities.boy * normalizedWeights[i];
    girlSum += result.probabilities.girl * normalizedWeights[i];
  });
  
  return { boy: boySum, girl: girlSum };
}
