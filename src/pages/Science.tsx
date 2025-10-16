import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Microscope } from "lucide-react";

export default function Science() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-boy/10 mb-4">
              <Microscope className="h-8 w-8 text-boy" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-boy to-primary bg-clip-text text-transparent">
              Science & Statistics 🔬
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What research actually tells us about gender determination
            </p>
          </div>

          {/* Coming Soon Card */}
          <Card className="border-2 border-boy/30">
            <CardHeader>
              <CardTitle>Content Coming Soon</CardTitle>
              <CardDescription>
                We're compiling scientific research and statistics about baby gender determination.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This page will soon feature detailed information about:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-boy"></span>
                  How gender is actually determined (X and Y chromosomes)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-boy"></span>
                  Global birth statistics and natural gender ratios
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-boy"></span>
                  Medical gender determination methods (ultrasound, NIPT, amniocentesis)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-boy"></span>
                  Peer-reviewed research and debunked myths
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild variant="outline" className="border-boy text-boy hover:bg-boy/10">
                  <Link to="/predict">Get a Prediction</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
