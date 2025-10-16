import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Microscope, AlertCircle, Target, Calendar, TestTube2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Science() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-boy/10 mb-4">
              <Microscope className="h-8 w-8 text-boy" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-boy to-primary bg-clip-text text-transparent">
              Science & Statistics 🔬
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What research actually tells us about gender determination
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-boy/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Natural Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-boy">105:100</div>
                <p className="text-sm text-muted-foreground mt-1">Boys to girls born naturally</p>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Chromosome</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">23rd Pair</div>
                <p className="text-sm text-muted-foreground mt-1">Determines gender (XX or XY)</p>
              </CardContent>
            </Card>
            <Card className="border-accent/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">NIPT Test</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">99%+</div>
                <p className="text-sm text-muted-foreground mt-1">Accuracy at 10 weeks</p>
              </CardContent>
            </Card>
          </div>

          {/* How Gender is Determined */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TestTube2 className="h-5 w-5 text-boy" />
                <CardTitle>How Gender is Actually Determined</CardTitle>
              </div>
              <CardDescription>The biological science behind baby gender</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="chromosomes">
                  <AccordionTrigger>X and Y Chromosomes</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Humans have 23 pairs of chromosomes (46 total). The 23rd pair determines biological sex:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-girl font-semibold min-w-[40px]">XX =</span>
                        <span>Female. All eggs carry an X chromosome.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-boy font-semibold min-w-[40px]">XY =</span>
                        <span>Male. Sperm carry either an X or Y chromosome.</span>
                      </li>
                    </ul>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Key Point:</strong> The father's sperm determines the baby's gender, not the mother's egg. The mother always contributes an X chromosome.
                      </AlertDescription>
                    </Alert>
                    <p className="text-muted-foreground">
                      When a sperm with a Y chromosome fertilizes an egg, the result is XY (boy). When a sperm with an X chromosome fertilizes an egg, the result is XX (girl).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="conception">
                  <AccordionTrigger>The Moment of Conception</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Gender is determined at the exact moment of fertilization when sperm meets egg. It's completely random which type of sperm (X or Y) reaches the egg first.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Sperm Characteristics (Theories):</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Y-sperm (boy):</strong> Faster swimmers, shorter lifespan (~24 hours)</li>
                        <li>• <strong>X-sperm (girl):</strong> Slower swimmers, longer lifespan (~48-72 hours)</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">
                        Note: These differences are theoretical and form the basis of timing methods, but their practical significance is debated.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sry-gene">
                  <AccordionTrigger>The SRY Gene</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      The Y chromosome carries the SRY gene (Sex-determining Region Y), which triggers male development around 6-7 weeks of pregnancy.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>With SRY gene (XY):</strong> Undifferentiated gonads develop into testes, producing testosterone</li>
                      <li>• <strong>Without SRY gene (XX):</strong> Gonads develop into ovaries, producing estrogen</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      💡 Until about 9 weeks, all embryos develop identically. The SRY gene is what triggers the male developmental pathway.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Global Statistics */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <CardTitle>Global Birth Statistics</CardTitle>
              </div>
              <CardDescription>Natural gender ratios and patterns worldwide</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="natural-ratio">
                  <AccordionTrigger>Natural Gender Ratio</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Globally, the natural sex ratio at birth is approximately <strong>105 boys for every 100 girls</strong> (or 51.2% male).
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Why More Boys?</h4>
                      <p className="text-sm text-muted-foreground">
                        The biological reason isn't fully understood, but theories include:
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Higher male fetal mortality rates (nature's compensation)</li>
                        <li>• Slightly higher male conception rates</li>
                        <li>• Evolutionary adaptations for population balance</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      By adulthood, the ratio evens out to approximately 1:1 due to higher male infant and childhood mortality rates.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="parental-age">
                  <AccordionTrigger>Parental Age Effects</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Research has found small correlations between parental age and baby gender:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Mother's Age</h4>
                        <p className="text-sm text-muted-foreground">
                          Slight increase in girl births as mothers age (very small effect). Women over 40 may have marginally higher girl ratios.
                        </p>
                      </div>
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Father's Age</h4>
                        <p className="text-sm text-muted-foreground">
                          Some studies suggest older fathers (45+) have slightly more girls, but results are inconsistent.
                        </p>
                      </div>
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        These effects are <strong>very small</strong> (1-2% shifts) and not reliable for prediction or planning.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="twins">
                  <AccordionTrigger>Multiple Pregnancy Statistics</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Identical Twins (Monozygotic)</h4>
                        <p className="text-sm text-muted-foreground">
                          Always the same gender because they come from one fertilized egg that splits. Gender ratio follows normal population ratio (slightly more boys).
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Fraternal Twins (Dizygotic)</h4>
                        <p className="text-sm text-muted-foreground">
                          Can be same or different genders. Probability:
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                          <li>• Boy/Boy: ~25%</li>
                          <li>• Girl/Girl: ~25%</li>
                          <li>• Boy/Girl: ~50%</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="seasonal">
                  <AccordionTrigger>Seasonal Birth Patterns</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Some studies have found small seasonal variations in gender ratios:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Slightly more boys conceived in autumn/fall in some regions</li>
                      <li>• Slight variations based on temperature and daylight hours</li>
                      <li>• Effects are small and vary by geographic location</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      💡 These patterns are likely related to environmental factors affecting conception, but the effects are too small for practical use.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Medical Methods */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <CardTitle>Medical Gender Determination Methods</CardTitle>
              </div>
              <CardDescription>Scientifically accurate ways to find out baby's gender</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="nipt">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>NIPT (Non-Invasive Prenatal Testing)</span>
                      <Badge variant="secondary">Most Accurate</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold">When Available</p>
                        <p className="text-muted-foreground">10 weeks pregnant</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Accuracy</p>
                        <p className="text-accent font-bold">99%+</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      A simple blood test that analyzes fetal DNA circulating in mother's blood. Primarily used to screen for genetic conditions, but can also determine gender.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">How It Works:</h4>
                      <p className="text-sm text-muted-foreground">
                        Detects presence of Y chromosome DNA. If Y chromosome is detected, it's a boy. If no Y chromosome is detected, it's a girl.
                      </p>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Pros:</strong> Extremely accurate, early detection, no risk to baby</li>
                      <li>• <strong>Cons:</strong> Can be expensive ($100-$500), not always covered by insurance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ultrasound">
                  <AccordionTrigger>Ultrasound</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="space-y-4">
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">12-13 Weeks</h4>
                        <p className="text-sm text-muted-foreground mb-2">Early gender scan (sometimes called "nub theory")</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">Accuracy:</span>
                          <Badge variant="outline">70-75%</Badge>
                        </div>
                      </div>

                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">16-20 Weeks</h4>
                        <p className="text-sm text-muted-foreground mb-2">Standard anatomy scan (most common time)</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">Accuracy:</span>
                          <Badge variant="outline">90-95%</Badge>
                        </div>
                      </div>

                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">20+ Weeks</h4>
                        <p className="text-sm text-muted-foreground mb-2">Later scans (better visualization)</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">Accuracy:</span>
                          <Badge variant="outline">95-99%</Badge>
                        </div>
                      </div>
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Note:</strong> Accuracy depends on baby's position, technician skill, and equipment quality. Babies can be shy and hide their gender!
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="amniocentesis">
                  <AccordionTrigger>Amniocentesis</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold">When Available</p>
                        <p className="text-muted-foreground">15-20 weeks</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Accuracy</p>
                        <p className="text-accent font-bold">100%</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      A diagnostic test where amniotic fluid is extracted with a needle for genetic testing. Provides definitive gender determination.
                    </p>
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> This is an invasive procedure with small risk of miscarriage (~0.1-0.3%). Only performed for medical reasons, never just for gender determination.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cvs">
                  <AccordionTrigger>CVS (Chorionic Villus Sampling)</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold">When Available</p>
                        <p className="text-muted-foreground">10-13 weeks</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Accuracy</p>
                        <p className="text-accent font-bold">100%</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Similar to amniocentesis but performed earlier. A sample of placental tissue is collected for genetic testing.
                    </p>
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Carries risk of miscarriage (~0.2-0.5%). Only done for medical diagnostic purposes, not for gender determination alone.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Debunked Myths */}
          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="text-destructive">Debunked Gender Myths</CardTitle>
              <CardDescription>What science says doesn't work</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-destructive">❌</span>
                  <div>
                    <p className="font-semibold">Heart rate prediction (above/below 140 bpm)</p>
                    <p className="text-sm text-muted-foreground">Multiple studies found no correlation. Fetal heart rate varies throughout pregnancy regardless of gender.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">❌</span>
                  <div>
                    <p className="font-semibold">Belly shape (high vs low, round vs pointed)</p>
                    <p className="text-sm text-muted-foreground">Determined by mother's body type, muscle tone, and baby's position—not gender.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">❌</span>
                  <div>
                    <p className="font-semibold">Chinese Gender Chart</p>
                    <p className="text-sm text-muted-foreground">Performs at 50% accuracy (random chance) in scientific studies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">❌</span>
                  <div>
                    <p className="font-semibold">Cravings (sweet for girl, salty for boy)</p>
                    <p className="text-sm text-muted-foreground">No scientific basis. Cravings are influenced by hormones and nutritional needs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">❌</span>
                  <div>
                    <p className="font-semibold">Ring test / pendulum methods</p>
                    <p className="text-sm text-muted-foreground">Movement is caused by small hand tremors (ideomotor effect), not baby gender.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-boy/30 bg-gradient-to-br from-card to-boy/5">
            <CardHeader>
              <CardTitle>Learn More</CardTitle>
              <CardDescription>Explore related topics about gender prediction</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link to="/medical">Medical Information</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/myths">Explore Myths & Tales</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
