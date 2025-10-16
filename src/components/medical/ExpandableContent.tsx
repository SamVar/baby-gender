import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpandableContentProps {
  preview: React.ReactNode;
  children: React.ReactNode;
  buttonText?: string;
}

export default function ExpandableContent({ 
  preview, 
  children, 
  buttonText = "Learn more" 
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3">
      <div>{preview}</div>
      
      {isExpanded && (
        <div className="animate-fade-in space-y-3 pt-2 border-t border-border/50">
          {children}
        </div>
      )}
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
      >
        {isExpanded ? (
          <>
            Show less <ChevronUp className="ml-1 h-4 w-4" />
          </>
        ) : (
          <>
            {buttonText} <ChevronDown className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
}
