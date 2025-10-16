import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resources() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Trusted resources</h2>
        <p className="text-muted-foreground">Further reading and patient‑friendly references.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">External links</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li><a className="story-link" href="https://www.acog.org/womens-health/faqs/ultrasound-exams" target="_blank" rel="noopener noreferrer">ACOG – Ultrasound Exams (patient FAQ)</a></li>
            <li><a className="story-link" href="https://www.acog.org/womens-health/faqs/prenatal-genetic-screening-tests" target="_blank" rel="noopener noreferrer">ACOG – Prenatal Genetic Screening Tests</a></li>
            <li><a className="story-link" href="https://www.acog.org/womens-health/faqs/prenatal-genetic-diagnostic-tests" target="_blank" rel="noopener noreferrer">ACOG – Prenatal Genetic Diagnostic Tests</a></li>
            <li><a className="story-link" href="https://www.acog.org/womens-health/infographics/cell-free-dna-prenatal-screening-test" target="_blank" rel="noopener noreferrer">ACOG – Cell‑Free DNA Prenatal Screening</a></li>
            <li><a className="story-link" href="https://www.acog.org/advocacy/policy-priorities/non-invasive-prenatal-testing/current-acog-guidance" target="_blank" rel="noopener noreferrer">ACOG – Current Guidance on NIPT</a></li>
            <li><a className="story-link" href="https://medlineplus.gov/ency/article/003778.htm" target="_blank" rel="noopener noreferrer">NIH MedlinePlus – Pregnancy Ultrasound</a></li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
