import { Stethoscope, Activity, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Header() {
  return (
    <header className="text-center space-y-6 mb-10 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-center justify-center gap-3">
        <Stethoscope className="h-10 w-10 md:h-12 md:w-12 text-accent" />
        Medical Information
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Evidence-based guidance on when and how fetal sex is determined in clinical care.
      </p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Card className="border-2 border-green-500/30 hover:border-green-500/50 hover:shadow-lg transition-all">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-bold">Earliest Accurate Screening</CardTitle>
            <CardDescription className="text-sm font-medium">From 10 weeks</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
            <p className="text-sm text-muted-foreground">Cell‑free DNA (NIPT) can report fetal sex; screening, not diagnostic</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-500/30 hover:border-blue-500/50 hover:shadow-lg transition-all">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-bold">Anatomy Ultrasound</CardTitle>
            <CardDescription className="text-sm font-medium">18–22 weeks</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <p className="text-sm text-muted-foreground">Sex often visualized during the standard anatomy scan</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/30 hover:border-purple-500/50 hover:shadow-lg transition-all">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-bold">Diagnostic Options</CardTitle>
            <CardDescription className="text-sm font-medium">CVS 10–13w, Amnio 15–20w</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Stethoscope className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <p className="text-sm text-muted-foreground">Definitive chromosome analysis when medically indicated</p>
          </CardContent>
        </Card>
      </div>
    </header>
  );
}
