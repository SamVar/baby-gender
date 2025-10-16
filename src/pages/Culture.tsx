import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

export default function Culture() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 animate-fade-in">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-girl to-accent bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Globe className="h-10 w-10 md:h-12 md:w-12 text-girl" />
              Cultural Perspectives 🌍
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore gender preferences and traditions from around the world
            </p>
          </div>

          {/* Coming Soon Card */}
          <Card className="border-2 border-girl/30">
            <CardHeader>
              <CardTitle>Content Coming Soon</CardTitle>
              <CardDescription>
                We're exploring cultural traditions and perspectives on baby gender from around the world.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This page will soon feature detailed information about:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-girl"></span>
                  Gender preferences and significance worldwide
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-girl"></span>
                  Traditional celebrations and gender reveal customs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-girl"></span>
                  Religious and spiritual beliefs about gender
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-girl"></span>
                  Modern gender-neutral parenting movement
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild variant="outline" className="border-girl text-girl hover:bg-girl/10">
                  <Link to="/stories">Read Stories</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
