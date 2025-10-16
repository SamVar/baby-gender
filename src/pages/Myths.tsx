import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Myths() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gender Myths & Tales 🔮
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore traditional folklore and old wives' tales about predicting baby gender
            </p>
          </div>

          {/* Disclaimer */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              These are traditional beliefs and folklore methods. They are not scientifically proven and should be treated as entertainment only. For accurate gender determination, consult your healthcare provider.
            </AlertDescription>
          </Alert>

          {/* Physical Signs Section */}
          <Card>
            <CardHeader>
              <CardTitle>Physical Signs During Pregnancy 🤰</CardTitle>
              <CardDescription>Traditional beliefs about pregnancy symptoms and baby gender</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="belly-shape">
                  <AccordionTrigger>Belly Shape & Position</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Tale</h4>
                      <p className="text-muted-foreground">If you're carrying high, it's a girl. If you're carrying low, it's a boy. A round belly means girl, while a pointed belly means boy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">People believe different hormones affect how the baby sits in the womb, causing different belly shapes.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (Random Chance)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Belly shape depends on muscle tone, baby's position, mother's body type, and whether it's a first pregnancy.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="morning-sickness">
                  <AccordionTrigger>Morning Sickness Severity</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Tale</h4>
                      <p className="text-muted-foreground">Severe morning sickness and nausea means you're having a girl. Less nausea means a boy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">The theory suggests that girl babies produce more hormones, causing worse morning sickness.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~55% (Slight Correlation)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Some studies show a slight correlation between severe nausea (hyperemesis gravidarum) and girl babies, but it's not reliable for prediction.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="skin-hair">
                  <AccordionTrigger>Skin & Hair Changes</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Tale</h4>
                      <p className="text-muted-foreground">If you have acne and dull skin, it's a girl (she's "stealing your beauty"). Clear, glowing skin means a boy. Fast-growing hair means boy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">Different hormone levels from male vs female babies supposedly affect mother's appearance.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (No Evidence)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Skin and hair changes are caused by pregnancy hormones, not baby gender.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="heart-rate">
                  <AccordionTrigger>Baby's Heart Rate</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Tale</h4>
                      <p className="text-muted-foreground">Heart rate above 140 bpm means a girl. Below 140 bpm means a boy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">The belief is that female hearts beat faster than male hearts.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (Debunked)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Multiple studies found no correlation between fetal heart rate and gender. Heart rate varies throughout pregnancy.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Cravings & Diet Section */}
          <Card>
            <CardHeader>
              <CardTitle>Cravings & Food Preferences 🍕</CardTitle>
              <CardDescription>What you eat and crave during pregnancy</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="sweet-salty">
                  <AccordionTrigger>Sweet vs Salty Cravings</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Tale</h4>
                      <p className="text-muted-foreground">Craving sweets, chocolate, and fruit means a girl. Craving salty, savory foods and chips means a boy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">The theory suggests that babies of different genders require different nutrients, influencing cravings.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (No Evidence)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Pregnancy cravings are complex and influenced by hormones, nutritional needs, and personal preferences—not baby gender.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="meat">
                  <AccordionTrigger>Meat & Protein Cravings</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Tale</h4>
                      <p className="text-muted-foreground">Craving meat, cheese, and high-protein foods means you're having a boy. Avoiding meat means a girl.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">Male babies supposedly need more protein for development.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (Folklore)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Protein cravings are based on your body's needs, not baby gender.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dairy">
                  <AccordionTrigger>Dairy & Calcium</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Tale</h4>
                      <p className="text-muted-foreground">Craving milk, ice cream, and dairy products means a girl.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">The belief is that girls require more calcium for bone development.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (Unproven)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> All babies need calcium. Dairy cravings don't indicate gender.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Traditional Tests Section */}
          <Card>
            <CardHeader>
              <CardTitle>Traditional Tests 🧪</CardTitle>
              <CardDescription>Folk methods people have tried at home</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ring-test">
                  <AccordionTrigger>Ring Test (Pendulum Method)</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Method</h4>
                      <p className="text-muted-foreground">Dangle a ring (often a wedding ring) on a string over your pregnant belly. If it swings in circles, it's a girl. If it swings back and forth, it's a boy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">Believers think subtle magnetic or energy fields from the baby influence the pendulum.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (No Evidence)</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Safety:</span>
                      <Badge variant="secondary">✓ Safe</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> The ring moves due to small hand movements (ideomotor effect), not baby gender.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="baking-soda">
                  <AccordionTrigger>Baking Soda Test</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Method</h4>
                      <p className="text-muted-foreground">Mix a tablespoon of baking soda with your urine. If it fizzes, it's a boy. If it doesn't react, it's a girl.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">The theory claims different genders create different urine pH levels, causing different reactions.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (No Evidence)</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Safety:</span>
                      <Badge variant="secondary">✓ Safe (external use)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Urine pH varies based on diet and hydration, not baby gender.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cabbage">
                  <AccordionTrigger>Red Cabbage Test</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Method</h4>
                      <p className="text-muted-foreground">Boil red cabbage, mix the water with your urine. Pink/red means boy, purple means girl.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">Red cabbage water is a pH indicator. The theory is that boy vs girl pregnancies have different urine acidity.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (Debunked)</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Safety:</span>
                      <Badge variant="secondary">✓ Safe</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> While cabbage water does change color with pH, pregnancy doesn't create gender-specific pH levels.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="drano">
                  <AccordionTrigger>Drano Test ⚠️</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Method</h4>
                      <p className="text-muted-foreground">Mix Drano crystal drain cleaner with urine. Different color changes supposedly indicate different genders.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (No Evidence)</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Safety:</span>
                      <Badge variant="destructive">⚠️ DANGEROUS - DO NOT TRY</Badge>
                    </div>
                    <div>
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>WARNING:</strong> This test is dangerous. Drano releases toxic fumes and can cause burns. Never attempt this test. There is no scientific validity.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Chinese & Cultural Methods Section */}
          <Card>
            <CardHeader>
              <CardTitle>Chinese & Cultural Methods 🌏</CardTitle>
              <CardDescription>Traditional methods from various cultures</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="chinese-chart">
                  <AccordionTrigger>Chinese Gender Chart</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Method</h4>
                      <p className="text-muted-foreground">Uses mother's lunar age at conception and lunar month of conception on a 700-year-old chart to predict gender.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The History</h4>
                      <p className="text-muted-foreground">Supposedly discovered in a royal tomb and used by Chinese royalty. Based on lunar calendar calculations.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (Not scientifically proven)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Studies testing the chart found it performs no better than chance. It remains popular as a cultural tradition.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mayan">
                  <AccordionTrigger>Mayan Calendar Method</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Method</h4>
                      <p className="text-muted-foreground">If both mother's age at conception and year of conception are even or both odd, it's a girl. If one is even and one is odd, it's a boy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The History</h4>
                      <p className="text-muted-foreground">Based on ancient Mayan beliefs about numerical significance and cosmic cycles.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~50% (Mathematical coincidence)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> Pure numerology with no biological basis. Performs at random chance level.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ramzi">
                  <AccordionTrigger>Ramzi Theory</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Method</h4>
                      <p className="text-muted-foreground">Based on placenta position in early ultrasound (6-8 weeks). Right side = boy, left side = girl.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">Dr. Ramzi Ismail published a study claiming 97% accuracy based on placental location.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~54% (Controversial)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> The original study was not peer-reviewed and had methodological issues. Subsequent studies found no significant correlation. Placenta position is random.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nub-theory">
                  <AccordionTrigger>Nub Theory (Angle of the Dangle)</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">The Method</h4>
                      <p className="text-muted-foreground">At 12-week scan, if the genital tubercle (nub) points up more than 30°, it's a boy. If parallel or down, it's a girl.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">The "Science"</h4>
                      <p className="text-muted-foreground">At 11-13 weeks, male and female genitals look similar but angle differently before full development.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Accuracy:</span>
                      <Badge variant="outline">~70-75% (Requires expertise)</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">💡 <strong>Reality:</strong> This has some scientific basis but requires perfect image angle and trained interpretation. Not reliable for general public.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle>Want to Learn the Science?</CardTitle>
              <CardDescription>
                Discover what actually determines baby gender and which methods are scientifically accurate
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link to="/science">Explore the Science</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/predict">Try Our Prediction Tool</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
