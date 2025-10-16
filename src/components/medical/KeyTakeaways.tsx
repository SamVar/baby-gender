import { Key } from "lucide-react";

interface KeyTakeawaysProps {
  items: string[];
  title?: string;
}

export default function KeyTakeaways({ items, title = "Key Takeaways" }: KeyTakeawaysProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-primary/10 border-l-4 border-l-purple-500 rounded-r-lg p-6 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Key className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5">•</span>
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
