import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import KeyTakeaways from "./KeyTakeaways";

export default function DevelopmentTimeline() {
  return (
    <div className="space-y-6 animate-fade-in">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Weeks 1–6: Conception & early development</CardTitle>
              <Badge variant="outline">Pre-differentiation</Badge>
            </div>
            <CardDescription>Chromosomal sex determined at conception</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong>What's happening:</strong> At conception, chromosomal sex is established (typically XX or XY). During the first few weeks, the embryo develops rapidly but reproductive structures have not yet formed.</p>
            <p><strong>Visibility:</strong> Sex cannot be determined by any imaging method. All embryos appear identical in early development.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Weeks 7–9: Genital ridge formation</CardTitle>
              <Badge variant="outline">Internal differentiation begins</Badge>
            </div>
            <CardDescription>Internal reproductive structures start forming</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong>What's happening:</strong> The genital ridge (gonadal ridge) begins to form around week 7. This tissue will develop into either ovaries or testes, depending on chromosomal sex and hormonal signals.</p>
            <p><strong>Week 8–9:</strong> In XY embryos, the SRY gene on the Y chromosome triggers testicular development. In XX embryos, ovarian development begins later. External genitalia begin as a genital tubercle, identical in appearance regardless of sex.</p>
            <p><strong>Visibility:</strong> External genitalia are not yet distinguishable by ultrasound. Too early for reliable sex determination.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Weeks 10–14: External genitalia differentiation</CardTitle>
              <Badge variant="outline">Early external changes</Badge>
            </div>
            <CardDescription>External structures begin to differentiate</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong>What's happening:</strong> External genitalia continue to develop and differentiate. The genital tubercle elongates differently in male vs. female fetuses under the influence of hormones (particularly testosterone in males).</p>
            <p><strong>Week 11–12:</strong> In some cases, highly skilled sonographers using high-resolution equipment may begin to distinguish sex, but accuracy is limited. Fetal position and image quality are critical.</p>
            <p><strong>Week 13–14:</strong> External genitalia are more developed. Some providers may attempt sex determination, but accuracy is still lower than at later gestational ages.</p>
            <p><strong>Visibility:</strong> Possible but not standard practice. Many providers wait until the anatomy scan for reliable determination.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Weeks 18–22: Anatomy scan window</CardTitle>
              <Badge variant="default">Standard timing</Badge>
            </div>
            <CardDescription>Most common time for sex visualization</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong>What's happening:</strong> This is the standard timing for the detailed anatomy scan, which assesses fetal organs, limbs, brain, heart, and other structures. External genitalia are typically well-developed and easier to visualize.</p>
            <p><strong>Anatomical markers providers look for:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Male:</strong> Penis, scrotum, and sometimes testicles (which may still be descending)</li>
              <li><strong>Female:</strong> Labia and absence of penis; sometimes the "hamburger sign" (three parallel lines representing labia)</li>
            </ul>
            <p><strong>Accuracy:</strong> 95–99% when fetal position allows clear visualization. Factors affecting accuracy include fetal position (legs crossed, breech), maternal body composition, amniotic fluid level, and gestational age within the window.</p>
            <p><strong>Why position matters:</strong> If the fetus has legs crossed or is in a position that obscures the perineum, visualization may be impossible. You may be asked to walk around or return for a follow-up scan.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Weeks 28–40: Third trimester</CardTitle>
              <Badge variant="outline">Less emphasized</Badge>
            </div>
            <CardDescription>Later scans focus on growth and position</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong>What's happening:</strong> The fetus continues to grow and mature. Reproductive structures are fully formed. Third-trimester ultrasounds typically focus on fetal growth, placental position, amniotic fluid levels, and presentation (head-down vs. breech).</p>
            <p><strong>Visibility:</strong> Sex may be visualized incidentally if the fetus is in a favorable position, but it is not the primary focus. Larger fetal size and crowding in the uterus can actually make genital visualization more challenging.</p>
            <p><strong>Clinical note:</strong> If sex was determined earlier and later imaging shows conflicting information, diagnostic testing may be recommended to clarify.</p>
          </CardContent>
        </Card>

      <KeyTakeaways 
        items={[
          "Chromosomal sex is determined at conception, but external structures take weeks to differentiate.",
          "The 18–22 week anatomy scan is the standard time for sex visualization—accurate in 95–99% of cases when position allows.",
          "Earlier determination (11–14 weeks) is possible but less reliable and not standard practice.",
          "Fetal position is a major factor in whether sex can be determined on any given scan.",
        ]}
      />
    </div>
  );
}
