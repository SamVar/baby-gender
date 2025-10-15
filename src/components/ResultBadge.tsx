import { cn } from "@/lib/utils";
import { MonthResult } from "@/lib/bloodFreshness";

interface ResultBadgeProps {
  badge?: MonthResult['badge'];
  className?: string;
}

export function ResultBadge({ badge, className }: ResultBadgeProps) {
  if (!badge) return null;

  const styles = {
    Best: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    Great: "bg-accent/10 text-accent border-accent/20",
    Good: "bg-primary/10 text-primary border-primary/20",
    "Close Call": "bg-muted text-muted-foreground border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        styles[badge],
        className
      )}
    >
      {badge}
    </span>
  );
}
