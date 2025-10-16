import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestingMethods() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Medical testing methods</h2>
        <p className="text-muted-foreground">Screening versus diagnostic approaches and typical timing.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Routine ultrasound (18–22 weeks)</CardTitle>
            <CardDescription>Standard anatomy scan</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>The primary purpose is assessing fetal anatomy. Sex is often visualized as a secondary finding depending on position and image quality.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Cell‑free DNA (NIPT) (≥10 weeks)</CardTitle>
            <CardDescription>Screening test</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Analyzes placental DNA fragments in maternal blood. Can report fetal sex with very high accuracy. It is a screening test and not diagnostic.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Chorionic villus sampling (CVS) (10–13 weeks)</CardTitle>
            <CardDescription>Diagnostic test</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Provides definitive chromosomal information. Performed earlier than amniocentesis. Used when medically indicated after counseling.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Amniocentesis (≈15–20 weeks)</CardTitle>
            <CardDescription>Diagnostic test</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Analyzes amniotic fluid for chromosomal conditions and fetal sex with near‑100% accuracy. Recommended only for specific indications.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Early commercial blood tests</CardTitle>
            <CardDescription>Non‑clinical use</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Often marketed for early sex prediction. Not intended for medical decisions and may be prone to contamination if not collected properly.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">3D/4D ultrasound</CardTitle>
            <CardDescription>Keepsake imaging</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Elective imaging for photos/videos. Not more accurate for sex determination than standard medical ultrasound.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
