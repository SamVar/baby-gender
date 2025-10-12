import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Calendar, Baby, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="container mx-auto px-4 py-8 relative">
        <Button variant="ghost" size="icon" asChild className="absolute top-8 right-4">
          <Link to="/about" aria-label="About">
            <Info className="h-5 w-5" />
          </Link>
        </Button>
        
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Baby Gender Planner
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use cyclical blood freshness peaks to plan your ideal conception dates or predict your baby's gender
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary/70 bg-primary/10 px-3 py-1 rounded-full inline-block">
              Choose Your Method
            </span>
            <p className="text-xs text-muted-foreground italic">
              ✨ For entertainment only
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Plan</CardTitle>
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
                <Button asChild className="w-full" size="lg">
                  <Link to="/plan">Start Planning</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Baby className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Predict</CardTitle>
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
                <Button asChild className="w-full" size="lg" variant="secondary">
                  <Link to="/predict">Get Prediction</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="ghost" asChild className="hover:text-primary-foreground">
              <Link to="/about">
                Learn how it works →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
