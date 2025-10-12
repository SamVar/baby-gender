import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DOBPicker } from "@/components/DOBPicker";
import { HeatmapCalendar } from "@/components/HeatmapCalendar";
import { ProbabilityRing } from "@/components/ProbabilityRing";
import { ResultBadge } from "@/components/ResultBadge";
import { LabelBadge } from "@/components/LabelBadge";
import { DetailsDrawer } from "@/components/DetailsDrawer";
import { DateInput, Sex, planBestMonths, generateMonthRange, calculateMonthResult } from "@/lib/bloodFreshness";
import { ArrowLeft, Calendar } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Plan() {
  const [maleDOB, setMaleDOB] = useState<DateInput | null>(null);
  const [femaleDOB, setFemaleDOB] = useState<DateInput | null>(null);
  const [targetSex, setTargetSex] = useState<Sex>('boy');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<DateInput | null>(null);

  // Default window: next 18 months
  const now = new Date();
  const startDate: DateInput = { year: now.getFullYear(), month: now.getMonth() + 1 };
  const endYear = now.getFullYear() + 1;
  const endMonth = now.getMonth() + 7;
  const endDate: DateInput = {
    year: endYear + Math.floor(endMonth / 12),
    month: (endMonth % 12) || 12
  };

  const canCalculate = maleDOB && femaleDOB;
  
  const topMonths = canCalculate
    ? planBestMonths(maleDOB, femaleDOB, targetSex, startDate, endDate, 6)
    : [];

  const allMonths = canCalculate
    ? generateMonthRange(startDate, endDate).map(date =>
        calculateMonthResult(maleDOB, femaleDOB, date, targetSex)
      )
    : [];

  const handleMonthClick = (date: DateInput) => {
    setSelectedMonth(date);
    setDrawerOpen(true);
  };

  const selectedResult = selectedMonth && canCalculate
    ? calculateMonthResult(maleDOB, femaleDOB, selectedMonth, targetSex)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Plan Mode
            </h1>
            <p className="text-sm text-muted-foreground">Find the best dates for your desired baby gender</p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Input Card */}
          <Card>
            <CardHeader>
              <CardTitle>Partner Information</CardTitle>
              <CardDescription>Enter birth dates (month & year only)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <DOBPicker
                  label="Male Partner Birth Date"
                  value={maleDOB}
                  onChange={setMaleDOB}
                />
                <DOBPicker
                  label="Female Partner Birth Date"
                  value={femaleDOB}
                  onChange={setFemaleDOB}
                />
              </div>

              {canCalculate && (
                <div className="space-y-3">
                  <label className="text-sm font-medium">Desired Gender</label>
                  <div className="flex gap-3">
                    <Button
                      variant={targetSex === 'boy' ? 'default' : 'outline'}
                      onClick={() => setTargetSex('boy')}
                      className="flex-1"
                    >
                      Boy
                    </Button>
                    <Button
                      variant={targetSex === 'girl' ? 'default' : 'outline'}
                      onClick={() => setTargetSex('girl')}
                      className="flex-1"
                    >
                      Girl
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {!canCalculate && (
            <Alert>
              <Calendar className="h-4 w-4" />
              <AlertDescription>
                Please enter both partners' birth dates to see recommendations
              </AlertDescription>
            </Alert>
          )}

          {canCalculate && (
            <>
              {/* Top Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Top 6 Recommended Months</CardTitle>
                  <CardDescription>
                    Best months for conceiving a {targetSex} based on blood freshness peaks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topMonths.map((result, idx) => (
                      <button
                        key={`${result.date.year}-${result.date.month}`}
                        onClick={() => handleMonthClick(result.date)}
                        className="text-left p-4 rounded-lg border-2 hover:border-primary transition-all hover:shadow-md"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold text-lg">
                              {MONTH_NAMES[result.date.month - 1]}
                            </p>
                            <p className="text-sm text-muted-foreground">{result.date.year}</p>
                          </div>
                          <ResultBadge badge={result.badge} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Boy:</span>
                            <span className="font-medium">{(result.probabilities.boy * 100).toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Girl:</span>
                            <span className="font-medium">{(result.probabilities.girl * 100).toFixed(1)}%</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <LabelBadge label={result.label} />
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Heatmap */}
              <Card>
                <CardHeader>
                  <CardTitle>Calendar Heatmap</CardTitle>
                  <CardDescription>
                    Visual representation of probabilities across all months (click any month for details)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <HeatmapCalendar
                    results={allMonths}
                    targetSex={targetSex}
                    onMonthClick={handleMonthClick}
                  />
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>

      {canCalculate && (
        <DetailsDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          maleDOB={maleDOB}
          femaleDOB={femaleDOB}
          result={selectedResult}
        />
      )}
    </div>
  );
}
