import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Shield, AlertCircle, CheckCircle2, Microscope } from "lucide-react";
import QuickSummaryCard from "./QuickSummaryCard";

export default function TestingMethods() {
  return (
    <div className="space-y-8 animate-fade-in">
      <QuickSummaryCard 
        title="6 Ways to Determine Fetal Sex"
        icon={Microscope}
        items={[
          "Ultrasound (18–22 weeks): 95-99% accurate, standard prenatal care",
          "NIPT (10+ weeks): >99% accurate, screening test from blood sample",
          "CVS/Amniocentesis: Definitive chromosomal analysis, medical indication only",
          "Commercial tests: Variable accuracy, not recommended for medical purposes",
          "3D/4D ultrasound: Same accuracy as standard 2D ultrasound",
        ]}
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Routine ultrasound (18–22 weeks)</CardTitle>
              <Badge variant="default" className="bg-blue-500">High Accuracy</Badge>
            </div>
            <CardDescription>Standard anatomy scan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">Primary Purpose:</p>
              <p>The anatomy scan is a comprehensive assessment of fetal development, including the brain, heart, spine, limbs, and internal organs. Sex determination is a secondary finding.</p>
              
              <div className="flex items-start gap-2 mt-3">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Accuracy for Sex:</p>
                  <p>95–99% accuracy when fetal position allows clear visualization. Accuracy depends on gestational age, fetal position, maternal body composition, and sonographer experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <Clock className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Timeline:</p>
                  <p>Results provided during the scan (same day). If position prevents visualization, you may be asked to return.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <Shield className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Safety:</p>
                  <p>No known risks. Ultrasound uses sound waves, not radiation. Considered safe throughout pregnancy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Cost & Insurance:</p>
                  <p>Typically covered by insurance as standard prenatal care. Out-of-pocket costs vary by provider and insurance plan.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Cell‑free DNA / NIPT (≥10 weeks)</CardTitle>
              <Badge variant="default" className="bg-green-600">Very High Accuracy</Badge>
            </div>
            <CardDescription>Screening test from maternal blood</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">Primary Purpose:</p>
              <p>Screens for common chromosomal conditions including trisomy 21 (Down syndrome), trisomy 18, and trisomy 13. Analyzes fragments of placental DNA circulating in maternal blood.</p>
              
              <div className="flex items-start gap-2 mt-3">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Accuracy for Sex:</p>
                  <p>&gt;99% accuracy for fetal sex determination (ACOG 2020). Detects presence or absence of Y chromosome. This is a screening test—not diagnostic.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Important Note:</p>
                  <p>Rare discordance can occur with vanishing twin, maternal chromosomal variations, or confined placental mosaicism. A diagnostic test confirms any concerning results.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <Clock className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Timeline:</p>
                  <p>Results typically available in 7–14 days. Some labs offer expedited results.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <Shield className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Safety:</p>
                  <p>Simple blood draw with no risk to the fetus. No procedural risks.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Cost & Insurance:</p>
                  <p>Often covered for pregnancies at increased risk. Out-of-pocket costs range from $0–$500+ depending on insurance and lab. Some labs offer self-pay options around $99–$299.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-600">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Chorionic villus sampling / CVS (10–13 weeks)</CardTitle>
              <Badge variant="default" className="bg-emerald-600">Definitive</Badge>
            </div>
            <CardDescription>Diagnostic test—chromosomal analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">Primary Purpose:</p>
              <p>Provides definitive diagnosis of chromosomal conditions and genetic disorders. Samples placental tissue (chorionic villi) for karyotype or microarray analysis.</p>
              
              <div className="flex items-start gap-2 mt-3">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Accuracy for Sex:</p>
                  <p>Definitive—chromosomal karyotype directly reveals XX or XY. Near 100% accuracy for typical chromosomal sex.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Procedure & Risks:</p>
                  <p>Performed transabdominally or transcervically under ultrasound guidance. Procedure-related miscarriage risk approximately 0.2–0.3% (recent studies). Only recommended when medically indicated after genetic counseling.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <Clock className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Timeline:</p>
                  <p>Preliminary results (FISH) in 1–3 days. Full karyotype results in 7–14 days.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Cost & Insurance:</p>
                  <p>Usually covered when medically indicated (e.g., abnormal NIPT, family history, advanced maternal age). Costs range $1,500–$3,000+ without insurance.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-600">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Amniocentesis (≈15–20 weeks)</CardTitle>
              <Badge variant="default" className="bg-emerald-600">Definitive</Badge>
            </div>
            <CardDescription>Diagnostic test—amniotic fluid analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">Primary Purpose:</p>
              <p>Provides definitive diagnosis of chromosomal conditions, genetic disorders, and neural tube defects. Samples amniotic fluid containing fetal cells.</p>
              
              <div className="flex items-start gap-2 mt-3">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Accuracy for Sex:</p>
                  <p>Definitive—chromosomal karyotype directly reveals XX or XY. Near 100% accuracy for typical chromosomal sex.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Procedure & Risks:</p>
                  <p>Performed transabdominally under ultrasound guidance. Procedure-related miscarriage risk approximately 0.1–0.3% (contemporary studies). Only recommended when medically indicated.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <Clock className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Timeline:</p>
                  <p>Preliminary results (FISH) in 1–3 days. Full karyotype results in 7–14 days. Microarray results may take 2–3 weeks.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Cost & Insurance:</p>
                  <p>Usually covered when medically indicated. Costs range $1,500–$3,500+ without insurance, depending on analysis type.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-gray-400">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Early commercial blood tests</CardTitle>
              <Badge variant="outline" className="border-gray-400">Variable</Badge>
            </div>
            <CardDescription>Non‑clinical, direct-to-consumer products</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">What They Are:</p>
              <p>Commercial tests marketed for early sex prediction (as early as 6–10 weeks), typically using maternal blood sample collected at home or in a retail location.</p>
              
              <div className="flex items-start gap-2 mt-3">
                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Accuracy Concerns:</p>
                  <p>Not FDA-approved for clinical decision-making. Accuracy varies widely and is lower than medical-grade NIPT. Prone to contamination from improper collection, maternal DNA, or external sources.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Clinical Guidance:</p>
                  <p>ACOG and other professional societies do not recommend these tests for medical purposes. Should never replace medical testing or guide pregnancy decisions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <Clock className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Timeline:</p>
                  <p>Results typically in 5–10 business days after sample received by lab.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Cost:</p>
                  <p>Typically $50–$200 out-of-pocket. Not covered by insurance.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-gray-400">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">3D/4D ultrasound</CardTitle>
              <Badge variant="outline" className="border-gray-400">Same as 2D</Badge>
            </div>
            <CardDescription>Elective keepsake imaging</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">What It Is:</p>
              <p>Optional ultrasound performed for photos and videos of the baby. Uses the same technology as medical ultrasound but renders 3D images or real-time 4D video.</p>
              
              <div className="flex items-start gap-2 mt-3">
                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Accuracy for Sex:</p>
                  <p>No more accurate than standard 2D medical ultrasound. Accuracy still depends on fetal position and gestational age, not imaging dimension.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Clinical Guidance:</p>
                  <p>FDA and ACOG discourage non-medical ultrasound solely for keepsake purposes. While considered low-risk, unnecessary ultrasound exposure is not recommended. If performed, should be brief and by trained professionals.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <Clock className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Timing:</p>
                  <p>Typically performed 24–34 weeks for best facial visualization. Earlier or later may produce less detailed images.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mt-3">
                <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Cost:</p>
                  <p>$100–$300+ depending on package and session length. Not covered by insurance.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
