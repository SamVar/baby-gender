import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 animate-fade-in">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-boy to-primary bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Calculator className="h-10 w-10 md:h-12 md:w-12 text-boy" />
              Tools & Calculators 🔧
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional calculators and helpful resources for your pregnancy journey
            </p>
          </div>

          {/* Coming Soon Card */}
          <Card className="border-2 border-boy/30">
            <CardHeader>
              <CardTitle>Content Coming Soon</CardTitle>
              <CardDescription>
                We're building additional tools and resources to support your pregnancy planning.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This page will soon feature:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-boy"></span>
                  Enhanced due date and conception date calculators
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-boy"></span>
                  Ovulation and fertility window calculators
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-boy"></span>
                  Downloadable pregnancy tracking charts and worksheets
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-boy"></span>
                  Links to helpful organizations and support groups
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild variant="outline" className="border-boy text-boy hover:bg-boy/10">
                  <Link to="/plan">Use Planning Tool</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
