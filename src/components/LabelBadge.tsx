import { cn } from "@/lib/utils";
import { MonthResult } from "@/lib/bloodFreshness";
import { Baby } from "lucide-react";

interface LabelBadgeProps {
  label: MonthResult['label'];
  className?: string;
}

export function LabelBadge({ label, className }: LabelBadgeProps) {
  const styles = {
    "Leans Boy": "bg-boy/10 text-boy border-boy/30",
    "Leans Girl": "bg-girl/10 text-girl border-girl/30",
    "Too Close to Call": "bg-muted text-muted-foreground border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition-colors",
        styles[label],
        className
      )}
    >
      <Baby className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}
