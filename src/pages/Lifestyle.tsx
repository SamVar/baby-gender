import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Apple } from "lucide-react";

export default function Lifestyle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 animate-fade-in">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Apple className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nutrition & Lifestyle 🥗
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diet and lifestyle factors that may influence baby gender
            </p>
          </div>

          {/* Coming Soon Card */}
          <Card className="border-2 border-primary/30">
            <CardHeader>
              <CardTitle>Content Coming Soon</CardTitle>
              <CardDescription>
                We're compiling information about dietary and lifestyle theories related to gender influence.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This page will soon feature detailed information about:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Diet theories (high sodium/potassium for boys, calcium/magnesium for girls)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  The Shettles Method (timing techniques and pH modification)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Natural methods and cycle tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Evidence-based analysis and success rates
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild>
                  <Link to="/plan">Plan Your Conception</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
