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
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-1 w-12 bg-primary rounded" />
        {sectionNumber && (
          <Badge variant="outline" className="text-xs font-medium">
            Section {sectionNumber}
          </Badge>
        )}
        {Icon && <Icon className="h-5 w-5 text-primary" />}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
