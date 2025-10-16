import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  sectionNumber?: number;
}

export default function SectionHeader({ 
  title, 
  description, 
  icon: Icon, 
  sectionNumber 
}: SectionHeaderProps) {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        {sectionNumber && (
          <Badge variant="outline" className="text-xs font-semibold px-3 py-1 bg-primary/10 border-primary/20">
            Section {sectionNumber}
          </Badge>
        )}
        {Icon && <Icon className="h-6 w-6 text-primary" />}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">{title}</h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
