import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuestionsForProvider() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Questions to ask your provider</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Before/at first prenatal visit</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>When will my anatomy ultrasound be scheduled?</li>
              <li>Is NIPT recommended in my situation?</li>
              <li>What would we do if a screening result is high risk?</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Before the anatomy scan</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>What is the main purpose of this ultrasound?</li>
              <li>If fetal position makes sex unclear, will we recheck later?</li>
              <li>Can I receive the report in my patient portal?</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">If NIPT is offered</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>What conditions does it screen for and what are its limits?</li>
              <li>How accurate is it for fetal sex?</li>
              <li>What follow‑up is available if a result is unexpected?</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">If diagnostic testing is discussed</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>What are the benefits, risks, and alternatives?</li>
              <li>How do CVS and amniocentesis differ in timing and risk?</li>
              <li>Can I meet with a genetic counselor?</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
