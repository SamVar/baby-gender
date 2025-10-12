import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { DOBPicker } from "@/components/DOBPicker";
import { ProbabilityRing } from "@/components/ProbabilityRing";
import { LabelBadge } from "@/components/LabelBadge";
import { DetailsDrawer } from "@/components/DetailsDrawer";
import { DateInput, calculateMonthResult, estimateConceptionWindow, generateMonthRange, calculateWeightedAverage } from "@/lib/bloodFreshness";
import { ArrowLeft, Calendar } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Predict() {
  const [maleDOB, setMaleDOB] = useState<DateInput | null>(null);
  const [femaleDOB, setFemaleDOB] = useState<DateInput | null>(null);
  const [inputMode, setInputMode] = useState<'conception' | 'dueDate'>('conception');
  const [conceptionDate, setConceptionDate] = useState<DateInput | null>(null);
  const [dueDate, setDueDate] = useState<string>('');
  const [windowWeight, setWindowWeight] = useState<number>(50); // 0-100, 50 = equal weight
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<DateInput | null>(null);
  const [showResults, setShowResults] = useState(false);

  const hasInputs = maleDOB && femaleDOB && (
    (inputMode === 'conception' && conceptionDate) ||
    (inputMode === 'dueDate' && dueDate)
  );

  let results: ReturnType<typeof calculateMonthResult>[] = [];
  let windowMonths: DateInput[] = [];
  
  if (hasInputs && showResults) {
    if (inputMode === 'conception' && conceptionDate) {
      results = [calculateMonthResult(maleDOB, femaleDOB, conceptionDate)];
      windowMonths = [conceptionDate];
    } else if (inputMode === 'dueDate' && dueDate) {
      const [start, end] = estimateConceptionWindow(new Date(dueDate));
      windowMonths = generateMonthRange(start, end);
      results = windowMonths.map(date => calculateMonthResult(maleDOB, femaleDOB, date));
    }
  }

  const handleCalculate = () => {
    setShowResults(true);
  };

  const weightedProbability = results.length > 1
    ? calculateWeightedAverage(
        results,
        results.map((_, idx) => {
          // Convert slider (0-100) to weights: 0=all first, 50=equal, 100=all last
          const t = windowWeight / 100;
          return idx === 0 ? (1 - t) : t;
        })
      )
    : null;

  const handleMonthClick = (date: DateInput) => {
    setSelectedMonth(date);
    setDrawerOpen(true);
  };

  const selectedResult = selectedMonth && maleDOB && femaleDOB
    ? calculateMonthResult(maleDOB, femaleDOB, selectedMonth)
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
              Predict Mode
            </h1>
            <p className="text-sm text-muted-foreground">Estimate baby gender based on conception date</p>
          </div>
        </div>
        
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Input Card */}
          <Card>
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Partner Information</CardTitle>
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
            </CardContent>
          </Card>

          {/* Conception Input */}
          <Card>
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conception Information</CardTitle>
              <CardDescription>Choose your input method</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={inputMode} onValueChange={(v) => {
                setInputMode(v as any);
                setShowResults(false);
              }}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="conception">Known Conception</TabsTrigger>
                  <TabsTrigger value="dueDate">Due Date</TabsTrigger>
                </TabsList>
                
                <TabsContent value="conception" className="space-y-4 mt-4">
                  <DOBPicker
                    label="Conception Month & Year"
                    value={conceptionDate}
                    onChange={(date) => {
                      setConceptionDate(date);
                      setShowResults(false);
                    }}
                    minYear={2020}
                    maxYear={new Date().getFullYear() + 1}
                  />
                </TabsContent>

                <TabsContent value="dueDate" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Due Date</Label>
                    <Input
                      type="date"
                      value={dueDate}
                      onChange={(e) => {
                        setDueDate(e.target.value);
                        setShowResults(false);
                      }}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              {hasInputs && (
                <Button 
                  onClick={handleCalculate} 
                  size="lg" 
                  className="w-full mt-6"
                >
                  Calculate Prediction
                </Button>
              )}
            </CardContent>
          </Card>

          {!hasInputs && (
            <Alert>
              <Calendar className="h-4 w-4" />
              <AlertDescription>
                Please enter both partners' birth dates and conception information to see predictions
              </AlertDescription>
            </Alert>
          )}

          {showResults && results.length > 0 && (
            <>
              {/* Single Result */}
              {results.length === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Prediction Results</CardTitle>
                    <CardDescription>
                      {MONTH_NAMES[results[0].date.month - 1]} {results[0].date.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-around">
                      <ProbabilityRing
                        percentage={results[0].probabilities.boy * 100}
                        label="Boy"
                        color="boy"
                        size={140}
                      />
                      <ProbabilityRing
                        percentage={results[0].probabilities.girl * 100}
                        label="Girl"
                        color="girl"
                        size={140}
                      />
                    </div>
                    <div className="flex justify-center">
                      <LabelBadge label={results[0].label} />
                    </div>
                    <Button
                      onClick={() => handleMonthClick(results[0].date)}
                      variant="outline"
                      className="w-full"
                    >
                      View Detailed Analysis
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Window Results */}
              {results.length > 1 && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conception Window</CardTitle>
                      <CardDescription>
                        Estimated conception window spans {results.length} months
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {results.map((result) => (
                          <button
                            key={`${result.date.year}-${result.date.month}`}
                            onClick={() => handleMonthClick(result.date)}
                            className="text-left p-4 rounded-lg border-2 hover:border-primary transition-all hover:shadow-md"
                          >
                            <p className="font-semibold mb-2">
                              {MONTH_NAMES[result.date.month - 1]} {result.date.year}
                            </p>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Boy:</span>
                                <span className="font-medium">{(result.probabilities.boy * 100).toFixed(1)}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Girl:</span>
                                <span className="font-medium">{(result.probabilities.girl * 100).toFixed(1)}%</span>
                              </div>
                            </div>
                            <div className="mt-2">
                              <LabelBadge label={result.label} className="text-xs" />
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Weighted Average Controls */}
                      <div className="space-y-4 pt-4 border-t">
                        <div>
                          <Label className="text-sm font-medium">Conception Likelihood</Label>
                          <p className="text-xs text-muted-foreground mb-3">
                            Adjust slider if conception was more likely early or late in window
                          </p>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-muted-foreground">Earlier</span>
                            <Slider
                              value={[windowWeight]}
                              onValueChange={([v]) => setWindowWeight(v)}
                              min={0}
                              max={100}
                              step={1}
                              className="flex-1"
                            />
                            <span className="text-xs text-muted-foreground">Later</span>
                          </div>
                        </div>

                        {weightedProbability && (
                          <div className="rounded-lg bg-muted/50 p-4">
                            <h4 className="text-sm font-semibold mb-3">Combined Estimate</h4>
                            <div className="flex justify-around">
                              <ProbabilityRing
                                percentage={weightedProbability.boy * 100}
                                label="Boy"
                                color="boy"
                                size={100}
                              />
                              <ProbabilityRing
                                percentage={weightedProbability.girl * 100}
                                label="Girl"
                                color="girl"
                                size={100}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </>
          )}
        </div>
      </main>

      {maleDOB && femaleDOB && (
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
