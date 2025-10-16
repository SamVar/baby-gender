import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, HelpCircle, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InterpretingResults() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Quick overview section */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold mb-3 flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-blue-600" />
          Understanding Your Results: Quick Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-1">Screening Tests (NIPT, Ultrasound)</p>
            <p className="text-muted-foreground">Provide probability or likelihood—not a diagnosis. High accuracy but not 100% definitive.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Diagnostic Tests (CVS, Amniocentesis)</p>
            <p className="text-muted-foreground">Provide definitive chromosomal information. Near 100% accuracy.</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="communication" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-auto">
          <TabsTrigger value="communication" className="text-xs sm:text-sm">How Results Come</TabsTrigger>
          <TabsTrigger value="screening" className="text-xs sm:text-sm">Screening vs Diagnostic</TabsTrigger>
          <TabsTrigger value="concerns" className="text-xs sm:text-sm">When Issues Arise</TabsTrigger>
        </TabsList>

        <TabsContent value="communication" className="space-y-6 mt-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-base">How results are communicated</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div>
              <p className="font-medium text-foreground">Ultrasound results:</p>
              <p>Typically communicated during the scan or immediately after. The sonographer or physician will explain what they see. You may receive a printed summary or images to take home.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">NIPT and blood test results:</p>
              <p>Usually delivered by phone call, secure patient portal message, or at a follow-up appointment. Your provider will explain what the screening results mean and whether further testing is recommended.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Diagnostic test results (CVS, amniocentesis):</p>
              <p>Typically discussed in person or via phone with your provider or genetic counselor. Preliminary results (FISH) may be available in 1–3 days; full karyotype takes 7–14 days. Results are definitive.</p>
            </div>
          </CardContent>
        </Card>
        </TabsContent>

        <TabsContent value="screening" className="space-y-6 mt-6">

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <CardTitle className="text-base">Screening vs. diagnostic: critical distinction</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div>
              <Badge variant="outline" className="mb-2">Screening tests</Badge>
              <p><strong>Ultrasound, NIPT:</strong> Provide <em>probability</em> or <em>likelihood</em> of a condition. High accuracy for sex determination but not 100% definitive. A "positive" or "high-risk" result means further testing is recommended—not a diagnosis.</p>
            </div>
            <div>
              <Badge variant="default" className="bg-emerald-600 mb-2">Diagnostic tests</Badge>
              <p><strong>CVS, amniocentesis:</strong> Provide <em>definitive</em> chromosomal information by analyzing fetal cells directly. Near 100% accuracy for determining chromosomal sex and diagnosing conditions.</p>
            </div>
            <p className="font-medium text-foreground mt-3">Why this matters:</p>
            <p>Many people mistakenly believe NIPT is diagnostic. It is not—it is a highly accurate screening test. If NIPT suggests a concern, diagnostic testing is needed to confirm.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <CardTitle className="text-base">What "high-risk" or "positive" means</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>A "positive" or "high-risk" screening result (e.g., from NIPT) indicates an <em>increased likelihood</em> of a chromosomal condition—it does not mean the condition is definitely present.</p>
            <div>
              <p className="font-medium text-foreground">Positive predictive value (PPV):</p>
              <p>The probability that a positive screening result is a true positive (i.e., the condition is actually present). PPV varies by condition, maternal age, and test type. For some conditions, even with a "high-risk" NIPT result, the chance the baby is actually affected may be less than 50%.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Next steps after a high-risk result:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Genetic counseling to understand what the result means</li>
                <li>Diagnostic testing (CVS or amniocentesis) to confirm or rule out the condition</li>
                <li>Emotional support and time to process information</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        </TabsContent>

        <TabsContent value="concerns" className="space-y-6 mt-6">

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-base">When tests disagree: sex discordance</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Rarely, NIPT and ultrasound may suggest different sexes. This can happen for several reasons:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Vanishing twin:</strong> NIPT detected DNA from a twin that did not survive</li>
              <li><strong>Maternal chromosomal variation:</strong> NIPT may detect maternal DNA with unexpected chromosomes</li>
              <li><strong>Confined placental mosaicism:</strong> Placental cells differ from fetal cells</li>
              <li><strong>Ultrasound visualization error:</strong> Fetal position or image quality led to incorrect assessment</li>
              <li><strong>Differences in sex development (DSD):</strong> Chromosomal sex and external anatomy do not align in typical ways</li>
            </ul>
            <p className="font-medium text-foreground mt-3">What to do:</p>
            <p>Your provider will recommend follow-up imaging and may suggest diagnostic testing (amniocentesis) for definitive chromosomal confirmation. Genetic counseling can help you understand the possibilities and next steps.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-base">Genetic counseling: what to expect</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Genetic counselors are healthcare professionals with specialized training in genetics and counseling. They help you understand test results, assess risks, and make informed decisions.</p>
            <div>
              <p className="font-medium text-foreground">When genetic counseling is offered:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Before or after NIPT or diagnostic testing</li>
                <li>When screening results are high-risk or abnormal</li>
                <li>If you have a family history of genetic conditions</li>
                <li>When ultrasound findings raise questions</li>
                <li>If tests show discordant results</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">What happens in a session:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Review your personal and family medical history</li>
                <li>Explain what test results mean in clear, accessible language</li>
                <li>Discuss probabilities, risks, and uncertainties</li>
                <li>Outline options for further testing or management</li>
                <li>Provide emotional support and resources</li>
                <li>Respect your values, beliefs, and decisions</li>
              </ul>
            </div>
            <p>Genetic counseling is typically covered by insurance when medically indicated. You can find a genetic counselor through your provider or at <a href="https://www.nsgc.org/find-a-genetic-counselor" target="_blank" rel="noopener noreferrer" className="story-link">findageneticcounselor.com</a>.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-pink-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-600" />
              <CardTitle className="text-base">Emotional support and coping</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>It is completely normal to feel anxious, overwhelmed, or uncertain when receiving test results—especially if results are unexpected or require follow-up.</p>
            <div>
              <p className="font-medium text-foreground">You are not alone:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Many parents experience worry while waiting for results</li>
                <li>Unexpected findings can trigger a range of emotions</li>
                <li>It's okay to take time to process information</li>
                <li>Partners, family, and friends can offer support</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">Resources for support:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Speak with your provider or genetic counselor about your feelings</li>
                <li>Connect with support groups (online or in-person) for parents navigating similar experiences</li>
                <li>Consider counseling or therapy if you're feeling especially distressed</li>
                <li>Organizations like March of Dimes, Genetic Alliance, and condition-specific groups offer resources</li>
              </ul>
            </div>
            <p className="font-medium text-foreground mt-3">Remember:</p>
            <p>You have time to ask questions, seek second opinions, and make informed decisions that feel right for you and your family. There is no rush, and you deserve compassionate, patient-centered care.</p>
          </CardContent>
        </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
