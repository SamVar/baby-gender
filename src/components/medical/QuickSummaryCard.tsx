import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface QuickSummaryCardProps {
  title: string;
  icon?: LucideIcon;
  items: string[];
}

export default function QuickSummaryCard({ title, icon: Icon, items }: QuickSummaryCardProps) {
  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-8">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
