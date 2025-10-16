import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function Stories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 animate-fade-in">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <MessageCircle className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-girl bg-clip-text text-transparent">
              Stories & Community 💬
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences and testimonials from families around the world
            </p>
          </div>

          {/* Coming Soon Card */}
          <Card className="border-2 border-accent/30">
            <CardHeader>
              <CardTitle>Content Coming Soon</CardTitle>
              <CardDescription>
                We're curating a collection of real stories and experiences from families who have tried various gender prediction methods.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This page will soon feature:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Prediction accuracy stories and personal testimonials
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Gender planning journeys and fertility experiences
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Old wives' tales that actually worked
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Cultural traditions and family stories
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/predict">Try a Prediction</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
