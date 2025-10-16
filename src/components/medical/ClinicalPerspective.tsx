import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Users, Scale, Globe } from "lucide-react";

export default function ClinicalPerspective() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Clinical perspective</h2>
        <p className="text-muted-foreground">Understanding how and why healthcare providers approach prenatal sex determination.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-base">Why sex is determined prenatally</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div>
              <p className="font-medium text-foreground">Medical reasons:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Sex-linked genetic conditions:</strong> Some conditions (e.g., hemophilia, Duchenne muscular dystrophy) are inherited in sex-linked patterns. Knowing fetal sex helps assess risk and guide testing.</li>
                <li><strong>Differences in sex development (DSD):</strong> When chromosomal sex and external anatomy don't align in typical ways, early identification allows for specialized care planning.</li>
                <li><strong>Family planning and preparation:</strong> For families with known genetic risks, sex information can inform reproductive decisions.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">Non-medical reasons:</p>
              <p>Most parents simply want to know out of curiosity, to plan, or to bond with their baby. Providers support patient autonomy—you have the right to know or not know, according to your preferences.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-base">Communication challenges</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Healthcare providers navigate complex communication around sex determination:</p>
            <div>
              <p className="font-medium text-foreground">Balancing information and expectations:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Explaining that ultrasound sex determination is highly accurate but not 100% definitive</li>
                <li>Managing disappointment if fetal position prevents visualization</li>
                <li>Clarifying the difference between screening and diagnostic tests</li>
                <li>Addressing myths and misconceptions about sex prediction</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">Sensitivity and respect:</p>
              <p>Providers aim to deliver information in a neutral, supportive way, respecting diverse family structures, cultural beliefs, and personal values. They avoid assumptions about gender identity or preferences.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-amber-600" />
              <CardTitle className="text-base">Accuracy and limitations: provider honesty</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Experienced providers know that even with the best technology, sex determination has limitations:</p>
            <div>
              <p className="font-medium text-foreground">When mistakes happen:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Fetal position:</strong> If genitalia are obscured, even skilled sonographers cannot see clearly. A follow-up scan or different timing may help.</li>
                <li><strong>Early gestational age:</strong> Before 18 weeks, external genitalia are less developed and harder to distinguish.</li>
                <li><strong>Technical factors:</strong> Image quality, maternal body composition, and amniotic fluid levels all affect visualization.</li>
                <li><strong>Rare anatomical variations:</strong> Differences in sex development can lead to ambiguous or unexpected findings.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">What providers do:</p>
              <p>Good clinicians communicate uncertainty clearly. If they're not confident in what they see, they'll say so and recommend follow-up. They won't guess or give false reassurance.</p>
            </div>
            <p className="font-medium text-foreground mt-3">For parents:</p>
            <p>If you're told "I'm not sure" or "Position is not ideal," it's not a failing—it's honest, responsible care. You can always ask for a follow-up scan or discuss other options.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-green-600" />
              <CardTitle className="text-base">Ethical considerations</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div>
              <p className="font-medium text-foreground">Patient autonomy:</p>
              <p>You have the right to know—or not know—your baby's sex. Some parents prefer to wait until birth for a surprise; others want to know as early as possible. Both choices are valid, and providers respect your preference.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Informed consent for testing:</p>
              <p>Before any prenatal test, your provider should explain its purpose, accuracy, risks, and limitations. You have the right to accept or decline any test, and to ask questions until you feel informed.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Non-directive counseling:</p>
              <p>Genetic counselors and providers aim to give you information and support without pushing a specific decision. Your values, beliefs, and circumstances guide your choices—not the provider's opinions.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Avoiding bias:</p>
              <p>Ethical care means providers do not express disappointment or preference for one sex over another. They support you regardless of your feelings or reactions to the information.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              <CardTitle className="text-base">Cultural sensitivity</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Attitudes toward prenatal sex determination vary widely across cultures and communities:</p>
            <div>
              <p className="font-medium text-foreground">Diverse perspectives:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Some cultures celebrate learning the sex early and incorporate it into traditions and rituals</li>
                <li>Others prefer to wait until birth, viewing the surprise as meaningful</li>
                <li>In some communities, there may be strong preferences for one sex, which can create pressure or disappointment</li>
                <li>Gender-affirming families may view chromosomal sex as separate from gender identity</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">Provider awareness:</p>
              <p>Culturally competent providers recognize and respect these differences. They ask about your preferences, avoid assumptions, and create a space where you feel comfortable expressing your values.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">International context:</p>
              <p>In some countries, revealing fetal sex is restricted or banned due to concerns about sex-selective practices. In the U.S., there are no such restrictions, but providers are trained to be aware of cultural dynamics and to support equitable, respectful care.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-base">Shared decision-making</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Modern prenatal care emphasizes collaboration between patients and providers:</p>
            <div>
              <p className="font-medium text-foreground">What this looks like:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Providers explain options, risks, benefits, and uncertainties clearly</li>
                <li>You share your values, concerns, and preferences</li>
                <li>Together, you make decisions that align with your goals and circumstances</li>
                <li>There is no "one-size-fits-all" approach—care is tailored to you</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">Your role:</p>
              <p>Don't hesitate to ask questions, request clarification, or take time to think. You can bring a partner, family member, or support person to appointments. You can seek second opinions. Good providers welcome engaged, informed patients.</p>
            </div>
            <p className="font-medium text-foreground mt-3">Remember:</p>
            <p>You are the expert on your own life and values. Your provider is the expert on medicine. Together, you make the best decisions for your pregnancy and your family.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
