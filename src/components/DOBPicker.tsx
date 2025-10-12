import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { DateInput } from "@/lib/bloodFreshness";

interface DOBPickerProps {
  label: string;
  value: DateInput | null;
  onChange: (value: DateInput) => void;
  minYear?: number;
  maxYear?: number;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function DOBPicker({ label, value, onChange, minYear = 1950, maxYear = new Date().getFullYear() }: DOBPickerProps) {
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i);

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="grid grid-cols-2 gap-3">
        <Select
          value={value?.month?.toString() || undefined}
          onValueChange={(m) => {
            const newMonth = parseInt(m);
            onChange({ 
              month: newMonth, 
              year: value?.year || new Date().getFullYear() 
            });
          }}
        >
          <SelectTrigger className="transition-all hover:border-primary">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            {MONTHS.map((month, idx) => (
              <SelectItem key={idx} value={(idx + 1).toString()}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={value?.year?.toString() || undefined}
          onValueChange={(y) => {
            const newYear = parseInt(y);
            onChange({ 
              month: value?.month || 1, 
              year: newYear 
            });
          }}
        >
          <SelectTrigger className="transition-all hover:border-primary">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
