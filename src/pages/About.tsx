import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, TrendingUp, Calendar, Baby, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function About() {
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
              About & Methodology
            </h1>
            <p className="text-sm text-muted-foreground">How the blood freshness model works</p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important Disclaimer</AlertTitle>
            <AlertDescription>
              This tool is based on traditional folklore methods and is <strong>for entertainment purposes only</strong>.
              It is not scientifically validated and should not be used for medical decisions or family planning.
              Always consult healthcare professionals for medical advice.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                The Blood Freshness Model
              </CardTitle>
              <CardDescription>Understanding the cyclical theory</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                The blood freshness model is based on a traditional belief that each partner has a cyclical
                "blood renewal" pattern. According to this theory, the baby's gender is influenced by whose
                blood is "fresher" (closer to its renewal peak) at the time of conception.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3 p-4 rounded-lg bg-boy/5 border border-boy/20">
                  <h3 className="font-semibold text-boy flex items-center gap-2">
                    <Baby className="h-4 w-4" />
                    Male Cycle
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Period:</strong> 4 years (48 months)</li>
                    <li>• <strong>Peak:</strong> Month 24</li>
                    <li>• <strong>Pattern:</strong> Rises from 0 to peak at month 24, then falls back to 0 by month 48</li>
                    <li>• <strong>Anchor:</strong> Cycle starts from birth month</li>
                  </ul>
                </div>

                <div className="space-y-3 p-4 rounded-lg bg-girl/5 border border-girl/20">
                  <h3 className="font-semibold text-girl flex items-center gap-2">
                    <Baby className="h-4 w-4" />
                    Female Cycle
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Period:</strong> 3 years (36 months)</li>
                    <li>• <strong>Peak:</strong> Month 18</li>
                    <li>• <strong>Pattern:</strong> Rises from 0 to peak at month 18, then falls back to 0 by month 36</li>
                    <li>• <strong>Anchor:</strong> Cycle starts from birth month</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold mb-2">Triangular Wave Pattern</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each cycle follows a triangular wave: the score rises linearly from 0 at birth to 1.0 at the midpoint
                  (peak freshness), then falls linearly back to 0 at the end of the cycle, where it repeats. The position
                  in the cycle for any given month is calculated by counting months elapsed since birth, then using
                  modulo arithmetic to find the current position within the repeating cycle.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                How Probabilities Are Calculated
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Step 1: Calculate Blood Scores</h4>
                <p className="text-sm text-muted-foreground">
                  For any target conception month, we calculate each partner's blood score (0 to 1.0)
                  based on their position in their respective cycles.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Step 2: Determine Probabilities</h4>
                <p className="text-sm text-muted-foreground">
                  The probability of conceiving a boy or girl is proportional to the blood scores:
                </p>
                <div className="bg-muted/50 p-4 rounded font-mono text-sm">
                  <div>P(boy) = male_score / (male_score + female_score)</div>
                  <div>P(girl) = female_score / (male_score + female_score)</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  If both scores are 0, we default to 50/50 probability.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Step 3: Assign Label</h4>
                <p className="text-sm text-muted-foreground">
                  Based on the difference between scores:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Leans Boy:</strong> Male score is ≥0.10 higher</li>
                  <li>• <strong>Leans Girl:</strong> Female score is ≥0.10 higher</li>
                  <li>• <strong>Too Close to Call:</strong> Difference is &lt;0.10</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Step 4: Quality Badge (Plan Mode Only)</h4>
                <p className="text-sm text-muted-foreground">
                  Months are ranked by probability for the target sex:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Best:</strong> ≥70% probability</li>
                  <li>• <strong>Great:</strong> ≥60% probability</li>
                  <li>• <strong>Good:</strong> ≥55% probability</li>
                  <li>• <strong>Close Call:</strong> &lt;55% probability</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Plan Mode</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Interactive calendar heatmap</li>
                    <li>• Top 6 recommended months</li>
                    <li>• Detailed cycle position analysis</li>
                    <li>• Toggle between boy/girl targets</li>
                    <li>• Next peak date predictions</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Predict Mode</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Known conception date input</li>
                    <li>• Due date calculator</li>
                    <li>• Conception window analysis</li>
                    <li>• Weighted probability estimates</li>
                    <li>• Detailed breakdown per month</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/plan">Try Plan Mode</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/predict">Try Predict Mode</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
