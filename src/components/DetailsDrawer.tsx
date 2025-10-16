import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { DateInput, getMaleCycleDetails, getFemaleCycleDetails, MonthResult } from "@/lib/bloodFreshness";
import { ProbabilityRing } from "./ProbabilityRing";
import { LabelBadge } from "./LabelBadge";
import { ResultBadge } from "./ResultBadge";
import { Calendar, TrendingUp } from "lucide-react";

interface DetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  maleDOB: DateInput;
  femaleDOB: DateInput;
  result: MonthResult | null;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function DetailsDrawer({ open, onOpenChange, maleDOB, femaleDOB, result }: DetailsDrawerProps) {
  if (!result) return null;

  const maleCycle = getMaleCycleDetails(maleDOB, result.date);
  const femaleCycle = getFemaleCycleDetails(femaleDOB, result.date);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {MONTH_NAMES[result.date.month - 1]} {result.date.year}
          </SheetTitle>
          <SheetDescription>
            Detailed blood freshness analysis for this month
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Probabilities */}
          <div>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Probabilities
            </h3>
            <div className="flex justify-around">
              <ProbabilityRing
                percentage={result.probabilities.boy * 100}
                label="Boy"
                color="boy"
              />
              <ProbabilityRing
                percentage={result.probabilities.girl * 100}
                label="Girl"
                color="girl"
              />
            </div>
          </div>

          {/* Labels */}
          <div className="flex flex-wrap gap-2">
            <LabelBadge label={result.label} />
            {result.badge && <ResultBadge badge={result.badge} />}
          </div>

          {/* Male Cycle Details */}
          <div className="space-y-3 rounded-lg bg-boy/15 p-4 border-2 border-boy/40">
            <h4 className="font-semibold text-boy">Male Cycle</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Blood Score:</span>
                <span className="font-medium">{(result.scores.male * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Position in Cycle:</span>
                <span className="font-medium">{maleCycle.position} months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distance to Peak:</span>
                <span className="font-medium">{maleCycle.percentToPeak.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next Peak:</span>
                <span className="font-medium">
                  {MONTH_NAMES[maleCycle.nextPeak.month - 1]} {maleCycle.nextPeak.year}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Male cycle: 4 years (48 months), peaks at 24 months
              </p>
            </div>
          </div>

          {/* Female Cycle Details */}
          <div className="space-y-3 rounded-lg bg-girl/15 p-4 border-2 border-girl/40">
            <h4 className="font-semibold text-girl">Female Cycle</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Blood Score:</span>
                <span className="font-medium">{(result.scores.female * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Position in Cycle:</span>
                <span className="font-medium">{femaleCycle.position} months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distance to Peak:</span>
                <span className="font-medium">{femaleCycle.percentToPeak.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next Peak:</span>
                <span className="font-medium">
                  {MONTH_NAMES[femaleCycle.nextPeak.month - 1]} {femaleCycle.nextPeak.year}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Female cycle: 3 years (36 months), peaks at 18 months
              </p>
            </div>
          </div>

          {/* How it Works */}
          <div className="rounded-lg bg-muted/50 p-4 text-sm">
            <h4 className="font-semibold mb-2">How It's Calculated</h4>
            <p className="text-muted-foreground leading-relaxed">
              Each partner has a cyclical "blood freshness" score that rises and falls over time.
              The probability of conceiving a boy or girl depends on whose blood is "fresher" (closer to peak)
              at the time of conception. This is based on traditional folklore methods.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
