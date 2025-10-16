import { LucideIcon } from "lucide-react";

interface StatBlockProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  color?: "primary" | "green" | "blue" | "amber";
}

export default function StatBlock({ value, label, icon: Icon, color = "primary" }: StatBlockProps) {
  const colorClasses = {
    primary: "text-primary bg-primary/10 border-primary/20",
    green: "text-primary bg-primary/10 border-primary/20",
    blue: "text-primary bg-primary/10 border-primary/20",
    amber: "text-accent bg-accent/10 border-accent/20",
  };

  return (
    <div className={`rounded-lg p-6 border-2 ${colorClasses[color]} transition-all hover:scale-105 hover:shadow-lg`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-4xl font-bold">{value}</span>
        {Icon && <Icon className="h-8 w-8 opacity-60" />}
      </div>
      <p className="text-sm font-medium opacity-90">{label}</p>
    </div>
  );
}
