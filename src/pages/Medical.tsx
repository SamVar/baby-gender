import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";

export default function Medical() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Stethoscope className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Medical Information 🏥
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional medical perspective and advice on gender determination
            </p>
          </div>

          {/* Coming Soon Card */}
          <Card className="border-2 border-accent/30">
            <CardHeader>
              <CardTitle>Content Coming Soon</CardTitle>
              <CardDescription>
                We're gathering professional medical information about gender determination during pregnancy.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This page will soon feature detailed information about:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Timeline of detection methods and accuracy by gestational week
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Important prenatal tests and what they reveal
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Questions to ask your healthcare provider
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Expert quotes from OB-GYNs and pediatricians
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/about">Learn About Our Method</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
