import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DevelopmentTimeline() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Prenatal development timeline</h2>
        <p className="text-muted-foreground">How and when sex characteristics are typically visible in routine care.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">First trimester (1–12 weeks)</CardTitle>
            <CardDescription>Foundations form</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Chromosomal sex is determined at conception. Early tissues develop, but external genitalia are not reliably distinguished on ultrasound.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Second trimester (13–27 weeks)</CardTitle>
            <CardDescription>Most common visualization</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>The anatomy scan around 18–22 weeks is when sex is most often visualized as a secondary finding to the medical exam.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Third trimester (28–40 weeks)</CardTitle>
            <CardDescription>Less emphasized</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Later ultrasounds focus on growth and position. Visualization of sex may be incidental and depends on fetal position.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
