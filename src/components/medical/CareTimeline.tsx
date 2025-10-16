import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CareTimeline() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Pregnancy care timeline</h2>
        <p className="text-muted-foreground">Typical milestones; schedules vary by clinic.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">First trimester</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Initial prenatal visit and lab panel</li>
              <li>Nuchal translucency/NIPT if recommended</li>
              <li>Dating ultrasound as needed</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Second trimester</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Anatomy ultrasound (18–22 weeks)</li>
              <li>Glucose screening as scheduled</li>
              <li>Follow‑up imaging if needed</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Third trimester</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Growth/position checks as indicated</li>
              <li>Group B strep screening</li>
              <li>Birth planning and education</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
