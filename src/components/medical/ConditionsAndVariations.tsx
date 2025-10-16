import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Info } from "lucide-react";

export default function ConditionsAndVariations() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Conditions and variations</h2>
        <p className="text-muted-foreground">Understanding differences in sex development, chromosomal variations, and when standard determination is challenging.</p>
      </div>
      
      <div className="space-y-4">
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-base">Differences in sex development (DSD)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p><strong>What is DSD?</strong> Differences (or disorders) of sex development refer to a group of conditions where chromosomal, gonadal, or anatomical sex is atypical. This includes conditions where external genitalia do not appear typically male or female, or where chromosomal sex doesn't match external anatomy.</p>
            
            <div>
              <p className="font-medium text-foreground">How common is DSD?</p>
              <p>Estimates vary, but approximately 1 in 4,500 to 1 in 5,500 births involve some form of atypical sex development. Many cases are mild and may not be identified until puberty or later; others are evident at birth.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Examples of DSD conditions:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Congenital adrenal hyperplasia (CAH):</strong> Affects hormone production; XX individuals may have masculinized external genitalia</li>
                <li><strong>Androgen insensitivity syndrome (AIS):</strong> XY individuals with cells that don't respond to androgens; may have female-appearing external anatomy</li>
                <li><strong>5-alpha-reductase deficiency:</strong> XY individuals with ambiguous or female-appearing genitalia at birth that may masculinize at puberty</li>
                <li><strong>Ovotesticular DSD:</strong> Presence of both ovarian and testicular tissue</li>
                <li><strong>Gonadal dysgenesis:</strong> Incomplete or atypical development of gonads</li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Modern medical approach:</p>
              <p>Current best practice involves a multidisciplinary care team (endocrinology, genetics, urology, psychology) working with families to provide individualized, supportive care. Decisions about gender assignment, medical interventions, and long-term management are made collaboratively, with emphasis on informed consent and respecting the individual's eventual autonomy.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">For parents:</p>
              <p>If DSD is suspected or diagnosed, you will be connected with specialists who have expertise in these conditions. Many children with DSD grow up healthy and thrive with appropriate medical support and family acceptance. Support organizations and advocacy groups can provide community and resources.</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Turner syndrome (45,X)</CardTitle>
                <Badge variant="outline">Chromosomal variation</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong>What it is:</strong> A condition affecting individuals typically assigned female at birth, characterized by the complete or partial absence of one X chromosome (45,X instead of 46,XX).</p>
              <p><strong>Frequency:</strong> Occurs in approximately 1 in 2,500 female births.</p>
              <p><strong>Common features:</strong> Short stature, ovarian insufficiency (often leading to infertility without treatment), heart and kidney anomalies in some cases. Intelligence is typically normal.</p>
              <p><strong>Prenatal detection:</strong> May be identified through NIPT, CVS, or amniocentesis. Ultrasound may show soft markers like increased nuchal translucency or cystic hygroma.</p>
              <p><strong>Modern outlook:</strong> With growth hormone therapy and hormone replacement, many individuals with Turner syndrome lead healthy, fulfilling lives. Fertility options (e.g., egg donation, IVF) are available. Specialized care and monitoring for associated health issues are important.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Klinefelter syndrome (47,XXY)</CardTitle>
                <Badge variant="outline">Chromosomal variation</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong>What it is:</strong> A condition affecting individuals typically assigned male at birth, characterized by an extra X chromosome (47,XXY instead of 46,XY).</p>
              <p><strong>Frequency:</strong> Occurs in approximately 1 in 500 to 1 in 1,000 male births. Often goes undiagnosed because symptoms can be subtle.</p>
              <p><strong>Common features:</strong> Tall stature, reduced testosterone production, smaller testes, infertility (in most but not all cases), and sometimes learning or language challenges. Physical features vary widely.</p>
              <p><strong>Prenatal detection:</strong> May be identified through NIPT, CVS, or amniocentesis. Many cases are not detected until puberty or adulthood when fertility concerns arise.</p>
              <p><strong>Modern outlook:</strong> Testosterone replacement therapy can help with physical development and energy. Fertility treatments (e.g., testicular sperm extraction) are possible for some. Educational support and early intervention for learning challenges improve outcomes. Many individuals with Klinefelter syndrome live typical, healthy lives.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Triple X syndrome (47,XXX)</CardTitle>
                <Badge variant="outline">Chromosomal variation</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong>What it is:</strong> A condition where individuals assigned female at birth have an extra X chromosome (47,XXX instead of 46,XX).</p>
              <p><strong>Frequency:</strong> Occurs in approximately 1 in 1,000 female births. Often goes undiagnosed because symptoms are typically mild or absent.</p>
              <p><strong>Common features:</strong> Most individuals have no obvious physical differences. Some may be taller than average. There may be an increased risk for learning disabilities, developmental delays, or behavioral challenges, but many have no issues at all.</p>
              <p><strong>Prenatal detection:</strong> May be identified through NIPT, CVS, or amniocentesis.</p>
              <p><strong>Modern outlook:</strong> Most individuals with Triple X syndrome live healthy, typical lives. Early educational support and monitoring can address any developmental needs. Fertility is usually normal.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">XYY syndrome (47,XYY)</CardTitle>
                <Badge variant="outline">Chromosomal variation</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong>What it is:</strong> A condition where individuals assigned male at birth have an extra Y chromosome (47,XYY instead of 46,XY).</p>
              <p><strong>Frequency:</strong> Occurs in approximately 1 in 1,000 male births. Often goes undiagnosed because symptoms are mild or absent.</p>
              <p><strong>Common features:</strong> Most individuals have no obvious physical differences. Some may be taller than average. There may be an increased risk for learning disabilities, developmental delays, or behavioral challenges, but many have no issues at all.</p>
              <p><strong>Prenatal detection:</strong> May be identified through NIPT, CVS, or amniocentesis.</p>
              <p><strong>Modern outlook:</strong> Most individuals with XYY syndrome live healthy, typical lives. Early educational support and monitoring can address any developmental needs. Fertility is usually normal.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <CardTitle className="text-base">When ultrasound sex determination can be wrong</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>While ultrasound sex determination is highly accurate (95–99%) at 18–22 weeks, errors can occur. Understanding why helps set realistic expectations.</p>
            
            <div>
              <p className="font-medium text-foreground">Common reasons for incorrect determination:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Fetal position:</strong> Legs crossed, breech position, or umbilical cord obscuring genitalia can lead to misidentification</li>
                <li><strong>Gestational age:</strong> Earlier scans (&lt;18 weeks) are less reliable because external genitalia are less developed</li>
                <li><strong>Swelling or edema:</strong> Labial swelling in female fetuses can sometimes be mistaken for a scrotum</li>
                <li><strong>Visualizing fingers or umbilical cord:</strong> In some cases, a finger or cord between the legs may be mistaken for a penis</li>
                <li><strong>Differences in sex development:</strong> Atypical anatomy due to DSD conditions can lead to ambiguous or incorrect assessments</li>
                <li><strong>Technical factors:</strong> Image quality, maternal body composition, and sonographer experience all play a role</li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium text-foreground">What happens if determination is uncertain or changes:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Your provider may recommend a follow-up ultrasound at a later gestational age</li>
                <li>If there's concern about DSD or chromosomal variation, NIPT or diagnostic testing (amniocentesis) may be suggested</li>
                <li>If tests show discordant results (e.g., NIPT suggests XY but ultrasound suggests female anatomy), genetic counseling and further evaluation are recommended</li>
              </ul>
            </div>
            
            <p className="font-medium text-foreground mt-3">Important perspective:</p>
            <p>Errors are rare but possible. If you receive surprising or conflicting information after birth, remember that what matters most is the health and well-being of your baby. Support and resources are available if you need them.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-base">Handling conflicting test results</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Occasionally, NIPT and ultrasound may suggest different sexes. This is uncommon but important to understand.</p>
            
            <div>
              <p className="font-medium text-foreground">Possible explanations:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Vanishing twin:</strong> NIPT detected DNA from a twin that did not continue to develop. The surviving baby may be a different sex.</li>
                <li><strong>Maternal chromosomal mosaicism:</strong> Rare cases where the mother has cells with atypical chromosomes that are picked up by NIPT.</li>
                <li><strong>Confined placental mosaicism:</strong> The placenta has chromosomal makeup different from the fetus.</li>
                <li><strong>Ultrasound error:</strong> Fetal position or technical factors led to incorrect visual assessment.</li>
                <li><strong>Differences in sex development:</strong> Chromosomal sex and external anatomy don't align in typical ways.</li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Next steps:</p>
              <p>Your provider will recommend genetic counseling and may suggest diagnostic testing (amniocentesis) to obtain definitive chromosomal information. This can clarify the situation and guide any necessary planning or care.</p>
            </div>
            
            <p className="font-medium text-foreground mt-3">Support:</p>
            <p>Navigating uncertain or unexpected information can be stressful. Don't hesitate to ask questions, seek second opinions, and reach out for emotional support. You're not alone in this process.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-muted-foreground space-y-2 border-l-4 border-l-purple-500 pl-4 py-2 mt-6">
        <p className="font-medium text-foreground">If you have concerns:</p>
        <p>Always discuss questions about sex determination, chromosomal conditions, or unexpected findings with your healthcare provider or a genetic counselor. They can provide personalized guidance, connect you with specialists, and help you access support resources.</p>
      </div>
    </section>
  );
}
