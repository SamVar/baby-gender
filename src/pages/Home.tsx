import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Calendar, Baby, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="container mx-auto px-4 py-8 pt-24 relative">
        <Button variant="ghost" size="icon" asChild className="absolute top-8 right-4">
          <Link to="/about" aria-label="About">
            <Info className="h-5 w-5" />
          </Link>
        </Button>

        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Baby Gender Planner
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your ideal conception dates or predict your future baby's gender
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-0 pb-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary/70 bg-primary/10 px-3 py-1 rounded-full inline-block">
              Choose Your Method
            </span>
            <p className="text-xs text-muted-foreground italic">✨ For entertainment only</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="group md:hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-2 md:hover:border-primary/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Plan
                </CardTitle>
                <CardDescription className="text-base">
                  Not pregnant yet? Find the best dates to try for your desired baby gender.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Calendar heatmap of optimal months
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Top 6 recommended dates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Detailed cycle analysis
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground transition-all duration-300 md:hover:scale-105 md:hover:shadow-lg"
                  size="lg"
                >
                  <Link to="/plan">Start Planning</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group md:hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-2 md:hover:border-accent/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 md:group-hover:scale-110 transition-transform">
                  <Baby className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Predict
                </CardTitle>
                <CardDescription className="text-base">
                  Already pregnant? Estimate the probability of boy vs girl based on conception date.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                    Use conception or due date
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                    Probability breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                    Conception window analysis
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground transition-all duration-300 md:hover:scale-105 md:hover:shadow-lg md:hover:bg-accent"
                  size="lg"
                >
                  <Link to="/predict">Get Prediction</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center pb-24">
            <Button variant="ghost" asChild>
              <Link to="/about" className="text-muted-foreground md:hover:text-primary-foreground">
                Learn how it works →
              </Link>
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-muted-foreground/20 bg-muted/30">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-sm mb-2">Important Disclaimer</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This tool is based on traditional folklore methods. Even though this tool can produce correct results, 
                  it is not scientifically validated and should not be used for medical decisions or family planning. 
                  Always consult healthcare professionals for medical advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
