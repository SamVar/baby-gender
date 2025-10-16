import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConditionsAndVariations() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Conditions and variations</h2>
        <p className="text-muted-foreground">High‑level information, not a diagnosis. Discuss concerns with your clinician.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Differences in sex development (DSD)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>DSD is an umbrella term for conditions involving variations in chromosomes, gonads, or anatomy. Care is individualized and often involves a team including genetics and endocrinology.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Common chromosomal variations</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Turner syndrome (45,X)</li>
              <li>Klinefelter syndrome (47,XXY)</li>
              <li>Triple X (47,XXX), XYY (47,XYY)</li>
            </ul>
            <p>Screening may suggest risk; diagnosis requires confirmatory testing.
            </p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">When ultrasound sex can be wrong</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Factors include fetal position, gestational age, and image quality. If results are uncertain or conflict with other data, clinicians may recommend repeat imaging or appropriate testing.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
