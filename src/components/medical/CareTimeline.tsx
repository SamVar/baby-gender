import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CareTimeline() {
  return (
    <div className="space-y-6 animate-fade-in">
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
      
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-6">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Note:</span> Every pregnancy and clinic is different. Your schedule may vary based on your health, pregnancy complexity, and provider's recommendations. Always follow your healthcare team's guidance.
        </p>
      </div>
    </div>
  );
}
