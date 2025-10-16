import { Stethoscope, Activity, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Header() {
  return (
    <header className="text-center space-y-6 mb-10 animate-fade-in">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
        <Stethoscope className="h-8 w-8 text-accent" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
        Medical Information
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Evidence-based guidance on when and how fetal sex is determined in clinical care.
      </p>

      <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
        <Card className="border-2 border-accent/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Earliest accurate screening</CardTitle>
            <CardDescription className="text-sm">From 10 weeks</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-accent" />
            <p className="text-sm text-muted-foreground">Cell‑free DNA (NIPT) can report fetal sex; screening, not diagnostic</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Anatomy ultrasound</CardTitle>
            <CardDescription className="text-sm">18–22 weeks</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">Sex often visualized during the standard anatomy scan</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Diagnostic options</CardTitle>
            <CardDescription className="text-sm">CVS 10–13w, Amnio 15–20w</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Definitive chromosome analysis when medically indicated</p>
          </CardContent>
        </Card>
      </div>
    </header>
  );
}
