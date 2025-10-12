import { DateInput, MonthResult, Sex } from "@/lib/bloodFreshness";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface HeatmapCalendarProps {
  results: MonthResult[];
  targetSex: Sex;
  onMonthClick?: (date: DateInput) => void;
}

const MONTH_NAMES_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function HeatmapCalendar({ results, targetSex, onMonthClick }: HeatmapCalendarProps) {
  // Group by year
  const yearGroups = results.reduce((acc, result) => {
    const year = result.date.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(result);
    return acc;
  }, {} as Record<number, MonthResult[]>);

  const getIntensityClass = (probability: number) => {
    if (probability >= 0.70) return targetSex === 'boy' ? "bg-boy" : "bg-girl";
    if (probability >= 0.60) return targetSex === 'boy' ? "bg-boy/80" : "bg-girl/80";
    if (probability >= 0.55) return targetSex === 'boy' ? "bg-boy/60" : "bg-girl/60";
    if (probability >= 0.50) return targetSex === 'boy' ? "bg-boy/40" : "bg-girl/40";
    return "bg-muted";
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {Object.entries(yearGroups).map(([year, monthResults]) => (
          <div key={year} className="space-y-2">
            <h4 className="text-sm font-semibold text-muted-foreground">{year}</h4>
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
              {monthResults.map((result) => {
                const probability = result.probabilities[targetSex];
                return (
                  <Tooltip key={`${result.date.year}-${result.date.month}`}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => onMonthClick?.(result.date)}
                        className={cn(
                          "aspect-square rounded-lg transition-all duration-200",
                          "hover:scale-105 hover:shadow-md",
                          "flex flex-col items-center justify-center p-2",
                          "text-xs font-medium",
                          getIntensityClass(probability),
                          probability >= 0.55 ? "text-white" : "text-foreground"
                        )}
                      >
                        <span className="font-semibold">{MONTH_NAMES_SHORT[result.date.month - 1]}</span>
                        <span className="text-[10px] opacity-90">{(probability * 100).toFixed(0)}%</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <div className="space-y-1">
                        <p className="font-semibold">
                          {MONTH_NAMES_SHORT[result.date.month - 1]} {result.date.year}
                        </p>
                        <p className="text-sm">
                          Boy: {(result.probabilities.boy * 100).toFixed(1)}%
                        </p>
                        <p className="text-sm">
                          Girl: {(result.probabilities.girl * 100).toFixed(1)}%
                        </p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}
