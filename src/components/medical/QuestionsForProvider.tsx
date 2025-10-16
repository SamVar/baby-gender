import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function QuestionsForProvider() {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">At your first prenatal visit</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>What prenatal screening and diagnostic tests do you recommend for my pregnancy?</li>
              <li>When will I have my first ultrasound, and what will it check?</li>
              <li>Am I a candidate for NIPT? When can it be performed?</li>
              <li>What factors (age, family history, prior pregnancies) might affect my testing plan?</li>
              <li>How do you approach prenatal testing and informed consent?</li>
              <li>Can I choose to decline any tests? What are the implications?</li>
              <li>If I want to know the sex of my baby, when is the earliest reliable time?</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">Before NIPT or cell-free DNA screening</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>What conditions will this test screen for beyond fetal sex?</li>
              <li>What is the detection rate (sensitivity) and false positive rate for each condition?</li>
              <li>Is this a screening test or a diagnostic test? What's the difference?</li>
              <li>What happens if the test comes back "high-risk" or "positive" for a condition?</li>
              <li>How long until I receive results?</li>
              <li>Will you offer genetic counseling if results are concerning?</li>
              <li>What is the cost, and is it typically covered by my insurance?</li>
              <li>What if the test fails or is inconclusive? Will I need to repeat it?</li>
              <li>Can rare conditions (like vanishing twin or mosaicism) affect the sex result?</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">Before the anatomy scan (18–22 weeks)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>What will you be checking during this ultrasound?</li>
              <li>How accurate is sex determination at this stage?</li>
              <li>What if the baby isn't in a good position to see the genitalia?</li>
              <li>Will you check for any "soft markers" for chromosomal conditions?</li>
              <li>If you find a soft marker, what does that mean, and what are the next steps?</li>
              <li>How soon will I get the results?</li>
              <li>Can my partner or family member be present during the scan?</li>
              <li>If something unexpected is seen, how will you communicate that to me?</li>
              <li>Will I need a follow-up scan if position prevents full assessment?</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">If diagnostic testing (CVS or amniocentesis) is recommended</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Why are you recommending this test for my situation?</li>
              <li>What is the procedure-related miscarriage risk, and how does it compare to the risk of the condition being tested?</li>
              <li>What exactly will the test diagnose?</li>
              <li>How is the procedure performed, and how long does it take?</li>
              <li>Will I receive anesthesia or pain relief?</li>
              <li>What are the immediate post-procedure instructions and restrictions?</li>
              <li>When will I receive preliminary and final results?</li>
              <li>Will genetic counseling be provided to help me interpret results?</li>
              <li>What if I decline this test—what are my other options?</li>
              <li>What is the cost, and will insurance cover it?</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">If results are unexpected or unclear</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Can you explain the results in simple terms?</li>
              <li>What do these results mean for my baby's health and development?</li>
              <li>What are my options for follow-up testing or confirmation?</li>
              <li>Can I speak with a genetic counselor to understand this better?</li>
              <li>How much time do I have to make decisions about next steps?</li>
              <li>Are there specialists (maternal-fetal medicine, pediatric specialists) I should see?</li>
              <li>What resources or support groups are available for families in similar situations?</li>
              <li>Can I get a second opinion or additional consultation?</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">About cost and insurance coverage</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>What is the typical cost of this test or procedure?</li>
              <li>Does my insurance cover this test? Are there specific criteria I need to meet for coverage?</li>
              <li>Will I need pre-authorization from my insurance?</li>
              <li>If insurance doesn't cover it, are there self-pay options or payment plans?</li>
              <li>Are there financial assistance programs available?</li>
              <li>Will I receive a bill directly, or does the lab/provider bill insurance first?</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-muted-foreground space-y-2 border-l-4 border-l-blue-500 pl-4 py-2 mt-6">
        <p className="font-medium text-foreground">Tips for productive conversations:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Write your questions down before your appointment so you don't forget</li>
          <li>Bring a partner, family member, or friend for support and to help remember information</li>
          <li>Ask your provider to repeat or clarify anything you don't understand</li>
          <li>Request printed information or resources you can review at home</li>
          <li>Don't be afraid to ask for more time or a follow-up call if you need it</li>
          <li>Remember: there are no "silly" questions—your provider is there to help you feel informed and confident</li>
        </ul>
      </div>
    </div>
  );
}
