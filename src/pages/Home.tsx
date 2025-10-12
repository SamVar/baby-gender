import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Calendar, Baby, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <header className="relative container mx-auto px-4 py-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Baby Gender Planner
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Based on blood freshness cycles</p>
        </div>
        <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
          <Link to="/about" aria-label="About">
            <Info className="h-5 w-5" />
          </Link>
        </Button>
      </header>

      <main className="relative container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider uppercase text-primary/80 bg-primary/10 px-4 py-2 rounded-full">
                Choose Your Method
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              Plan or Predict Your<br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Baby's Gender</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Use cyclical blood freshness peaks to find your ideal conception dates or predict your baby's gender
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="text-lg">✨</span>
              <span className="italic">For entertainment purposes only</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/20">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Plan
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Not pregnant yet? Find the best dates to try for your desired baby gender.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <span>Calendar heatmap of optimal months</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <span>Top 6 recommended dates</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <span>Detailed cycle analysis</span>
                  </li>
                </ul>
                <Button asChild className="w-full group-hover:scale-105 transition-transform" size="lg">
                  <Link to="/plan">
                    Start Planning
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent/20">
                  <Baby className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Predict
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Already pregnant? Estimate the probability of boy vs girl based on conception date.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </div>
                    <span>Use conception or due date</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </div>
                    <span>Probability breakdown</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                    </div>
                    <span>Conception window analysis</span>
                  </li>
                </ul>
                <Button asChild className="w-full group-hover:scale-105 transition-transform" size="lg" variant="secondary">
                  <Link to="/predict">
                    Get Prediction
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button variant="ghost" asChild className="group">
              <Link to="/about" className="text-muted-foreground hover:text-primary text-base">
                Learn how it works
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
