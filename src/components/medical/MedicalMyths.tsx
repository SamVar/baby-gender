import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MedicalMyths() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Medical view on common myths</h2>
        <p className="text-muted-foreground">Fun to guess, but not medically reliable.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Heartbeat rate</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Fetal heart rate varies with activity and gestational age; it does not reliably predict sex.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Belly shape or carrying high/low</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Belly shape is influenced by anatomy and position, not fetal sex.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Cravings or morning sickness</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Symptoms vary widely and are not sex predictors.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ring test or charts</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Anecdotal methods like the ring test or lunar/Chinese charts lack scientific basis.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
