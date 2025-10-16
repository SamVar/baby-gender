import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 animate-fade-in">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center justify-center gap-3">
              <HelpCircle className="h-10 w-10 md:h-12 md:w-12 text-primary" />
              Frequently Asked Questions ❓
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about gender prediction and planning
            </p>
          </div>

          {/* About This Tool */}
          <Card>
            <CardHeader>
              <CardTitle>About This Tool 🔧</CardTitle>
              <CardDescription>Questions about our prediction and planning features</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="how-works">
                  <AccordionTrigger>How does the blood freshness method work?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      The blood freshness (or blood renewal) method is based on the theory that men's blood renews every 4 years and women's blood renews every 3 years. The gender of the parent with "fresher" blood at conception supposedly determines the baby's gender.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">How We Calculate:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Mother's age ÷ 3 = mother's blood renewal cycle</li>
                        <li>• Father's age ÷ 4 = father's blood renewal cycle</li>
                        <li>• The parent with the smaller remainder has "fresher" blood</li>
                        <li>• Account for major blood loss events (surgery, donation, childbirth)</li>
                      </ul>
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> This is a folk method with no scientific validation. Use it for fun and entertainment, not as a reliable prediction tool.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accuracy">
                  <AccordionTrigger>Is this scientifically accurate?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>No, the blood freshness method is not scientifically validated.</strong> There are no peer-reviewed studies supporting this theory.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">What IS Scientific:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Gender is determined by X and Y chromosomes at conception</li>
                          <li>• NIPT blood test: 99%+ accuracy at 10 weeks</li>
                          <li>• Ultrasound: 90-95% accuracy at 16-20 weeks</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">This Tool's Purpose:</h4>
                        <p className="text-sm text-muted-foreground">
                          We provide this calculator because many people find traditional prediction methods fun and interesting during pregnancy. It should be treated as entertainment, not medical advice.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planning">
                  <AccordionTrigger>Can I use this for family planning?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      The planning tool shows theoretical "optimal" conception dates based on the blood freshness theory, but <strong>this should not be relied upon for actual family planning.</strong>
                    </p>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Reality:</strong> Gender at conception is random (approximately 51% boys, 49% girls). The timing of conception does not reliably influence baby gender in a predictable way.
                      </AlertDescription>
                    </Alert>
                    <p className="text-sm text-muted-foreground">
                      Natural gender selection methods (like timing intercourse based on ovulation) have very low success rates and are not endorsed by medical professionals. The only reliable way to choose baby gender is through IVF with PGD (preimplantation genetic diagnosis), which is expensive and raises ethical considerations.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="blood-loss">
                  <AccordionTrigger>Why do you ask about blood loss events?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      According to the blood freshness theory, significant blood loss events "reset" your blood renewal cycle. Events that may affect the calculation include:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Surgery:</strong> Major operations with significant blood loss</li>
                      <li>• <strong>Blood donation:</strong> Donating a pint of blood</li>
                      <li>• <strong>Childbirth:</strong> Average blood loss of 500ml</li>
                      <li>• <strong>Miscarriage:</strong> Depending on timing and circumstances</li>
                      <li>• <strong>Injury/Trauma:</strong> Accidents causing major blood loss</li>
                      <li>• <strong>Blood transfusion:</strong> Receiving donated blood</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      The theory suggests that after these events, your blood renewal cycle starts over from that date rather than your birth date.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* General Gender Prediction */}
          <Card>
            <CardHeader>
              <CardTitle>Gender Prediction General 🔮</CardTitle>
              <CardDescription>Common questions about finding out baby's gender</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="when-find-out">
                  <AccordionTrigger>When can I find out my baby's gender?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <div className="space-y-3">
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">10 Weeks - NIPT Test</h4>
                          <Badge>99%+ accurate</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Non-invasive blood test. Highly accurate but can be expensive ($100-$500).
                        </p>
                      </div>

                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">12-13 Weeks - Early Ultrasound</h4>
                          <Badge variant="outline">70-75% accurate</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Some technicians can make early predictions, but reliability is lower.
                        </p>
                      </div>

                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">16-20 Weeks - Anatomy Scan</h4>
                          <Badge>90-95% accurate</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Most common time. Part of routine prenatal care and usually covered by insurance.
                        </p>
                      </div>

                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">20+ Weeks - Later Scans</h4>
                          <Badge>95-99% accurate</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Accuracy increases with gestation. Gender is very obvious by this stage.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="old-wives-tales">
                  <AccordionTrigger>How accurate are old wives' tales and folklore methods?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Most old wives' tales perform at <strong>approximately 50% accuracy</strong>—the same as random chance. This means they're essentially guessing.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                        <span className="text-sm">Heart rate prediction</span>
                        <Badge variant="outline">~50%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                        <span className="text-sm">Belly shape</span>
                        <Badge variant="outline">~50%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                        <span className="text-sm">Chinese Gender Chart</span>
                        <Badge variant="outline">~50%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                        <span className="text-sm">Cravings (sweet vs salty)</span>
                        <Badge variant="outline">~50%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                        <span className="text-sm">Ring test / pendulum</span>
                        <Badge variant="outline">~50%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                        <span className="text-sm">Morning sickness severity</span>
                        <Badge variant="outline">~50-55%</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      💡 These methods are fun to try but should not be relied upon for actual predictions. Many people remember when they worked and forget when they didn't (confirmation bias).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="most-accurate">
                  <AccordionTrigger>What's the most accurate prediction method?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground mb-3">
                      In order of accuracy before birth:
                    </p>
                    <ol className="space-y-3">
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">1.</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <strong>Genetic Testing (Amnio/CVS)</strong>
                            <Badge>100%</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Invasive procedures only done for medical reasons due to miscarriage risk.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">2.</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <strong>NIPT Blood Test</strong>
                            <Badge>99%+</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Non-invasive, available at 10 weeks. Best early option.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">3.</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <strong>Ultrasound (20+ weeks)</strong>
                            <Badge>95-99%</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Standard method, covered by insurance, good accuracy.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">4.</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <strong>Ultrasound (16-20 weeks)</strong>
                            <Badge variant="outline">90-95%</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Most common timing, quite reliable.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">5.</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <strong>Everything Else</strong>
                            <Badge variant="outline">~50%</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Folklore, prediction methods, old wives' tales—random chance.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ultrasound-wrong">
                  <AccordionTrigger>Can ultrasound be wrong about gender?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>Yes, but it's rare.</strong> Ultrasound accuracy improves with gestational age.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold">Common Reasons for Errors:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Baby's position:</strong> Legs crossed or baby facing wrong direction</li>
                        <li>• <strong>Early timing:</strong> Before 16 weeks, anatomy is less developed</li>
                        <li>• <strong>Umbilical cord:</strong> Can be mistaken for male anatomy</li>
                        <li>• <strong>Swelling:</strong> Female anatomy can appear swollen and be misidentified</li>
                        <li>• <strong>Image quality:</strong> Mother's weight, amniotic fluid levels, equipment quality</li>
                        <li>• <strong>Technician skill:</strong> Experience level matters</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      💡 "It's a girl" is less certain than "It's a boy" because absence of male anatomy doesn't always mean female—it might just be hidden.
                    </p>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Most errors occur when predicting girls (saying girl when it's actually a boy) because male anatomy can be hidden or not yet visible.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Medical Questions */}
          <Card>
            <CardHeader>
              <CardTitle>Medical Questions 🏥</CardTitle>
              <CardDescription>Questions about prenatal tests and medical procedures</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="nipt-cost">
                  <AccordionTrigger>How much does NIPT testing cost?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      NIPT (Non-Invasive Prenatal Testing) costs vary widely:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Out of pocket:</strong> $100-$500 on average</li>
                      <li>• <strong>With insurance (high risk):</strong> Often fully covered</li>
                      <li>• <strong>With insurance (low risk):</strong> May not be covered</li>
                      <li>• <strong>Self-pay programs:</strong> Some labs offer $99-$249 options</li>
                    </ul>
                    <div className="bg-secondary/30 p-4 rounded-lg mt-3">
                      <h4 className="font-semibold mb-2">Insurance Coverage:</h4>
                      <p className="text-sm text-muted-foreground">
                        NIPT is typically covered for women over 35, those with high-risk pregnancies, or abnormal screening results. If you're low-risk and under 35, it may not be covered. Always check with your insurance provider first.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="amnio-risk">
                  <AccordionTrigger>Is amniocentesis safe? What are the risks?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Amniocentesis is generally safe but carries small risks because it's an invasive procedure.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Primary Risk:</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm">Miscarriage:</span>
                          <Badge variant="outline">0.1-0.3% (1 in 300-1000)</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Modern techniques have significantly reduced this risk from historic rates of 0.5-1%.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Other Rare Risks:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Leaking amniotic fluid (usually resolves)</li>
                          <li>• Infection (very rare)</li>
                          <li>• Needle injury to baby (extremely rare)</li>
                          <li>• Cramping or spotting (common, usually minor)</li>
                        </ul>
                      </div>
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Amniocentesis is only performed when there's a medical need for genetic information. It is never done solely to determine baby's gender.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="3d-ultrasound">
                  <AccordionTrigger>Are 3D/4D ultrasounds more accurate for gender?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>Not necessarily.</strong> Standard 2D ultrasound is actually better for gender determination in most cases.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">2D Ultrasound (Standard):</h4>
                        <p className="text-sm text-muted-foreground">
                          Better for seeing internal anatomy clearly. Technicians are specifically trained to identify gender markers on 2D scans.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">3D/4D Ultrasound:</h4>
                        <p className="text-sm text-muted-foreground">
                          Shows external surface features and facial details. Great for bonding and photos, but external genitalia can be obscured by position, limbs, or umbilical cord.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      💡 3D/4D scans are wonderful for seeing baby's face and features, but standard 2D is the medical standard for gender determination.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="should-find-out">
                  <AccordionTrigger>Should I find out the gender or wait for a surprise?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      This is a deeply personal decision with no right answer. Here are perspectives to consider:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Reasons to Find Out:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Helps with planning and preparation</li>
                          <li>• More time to adjust if you have gender preference</li>
                          <li>• Can involve family and friends in excitement</li>
                          <li>• Reduces anxiety for some people</li>
                          <li>• Easier to shop and decorate</li>
                          <li>• Helps with name selection</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Reasons to Wait:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• One of life's true surprises</li>
                          <li>• Extra motivation during labor for some</li>
                          <li>• Avoid gender stereotyping before birth</li>
                          <li>• Special moment at delivery</li>
                          <li>• Less potential for gender disappointment beforehand</li>
                          <li>• Receive more variety of gifts</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      💡 You can also do a hybrid approach: find out but keep it private, or have your doctor put it in a sealed envelope for later.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Planning Questions */}
          <Card>
            <CardHeader>
              <CardTitle>Gender Planning 📅</CardTitle>
              <CardDescription>Questions about trying to influence baby's gender</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="can-choose">
                  <AccordionTrigger>Can I really choose my baby's gender?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>Naturally conceived: No reliable method exists.</strong> Gender is essentially random (51% boys, 49% girls).
                    </p>
                    <div className="space-y-3">
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">IVF with PGD (Preimplantation Genetic Diagnosis):</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>Nearly 100% Effective</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          The ONLY scientifically proven method. Embryos are tested before implantation, and only desired gender is transferred.
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• <strong>Cost:</strong> $15,000-$25,000+ per cycle</li>
                          <li>• <strong>Process:</strong> Full IVF required</li>
                          <li>• <strong>Legal:</strong> Allowed in some countries, restricted in others</li>
                          <li>• <strong>Ethical:</strong> Controversial for non-medical reasons</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Sperm Sorting (MicroSort):</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">70-90% (Limited availability)</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Separates X and Y sperm before insemination. Not FDA-approved in the US. Available in some other countries.
                        </p>
                      </div>
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        All "natural" methods (timing, diet, positions) have success rates around 50-55%—barely better than chance and not reliable.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shettles-method">
                  <AccordionTrigger>Does the Shettles Method work?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      The Shettles Method claims 75-80% success, but scientific studies show much lower rates (around 50-55%).
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold mb-2">The Theory:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>For a boy:</strong> Have sex on ovulation day or after. Y-sperm are faster but die sooner.</li>
                        <li>• <strong>For a girl:</strong> Have sex 2-4 days before ovulation. X-sperm live longer and will still be there when egg arrives.</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold mb-2">The Reality:</h4>
                      <p className="text-sm text-muted-foreground">
                        While sperm do have different characteristics, timing alone doesn't reliably control which sperm fertilizes the egg. Multiple scientific studies found no significant improvement over chance.
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      💡 It's not harmful to try, and precise ovulation tracking is good for conception regardless. Just don't expect reliable results.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="diet-method">
                  <AccordionTrigger>Can diet influence baby's gender?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Some studies suggest diet might have a <strong>very small</strong> effect, but results are inconsistent and not reliable for planning.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">For a Boy (Theory):</h4>
                        <p className="text-sm text-muted-foreground mb-2">High sodium, potassium diet:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Red meat, salty foods</li>
                          <li>• Bananas, potatoes</li>
                          <li>• Avoid dairy and calcium-rich foods</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">For a Girl (Theory):</h4>
                        <p className="text-sm text-muted-foreground mb-2">High calcium, magnesium diet:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Dairy products, leafy greens</li>
                          <li>• Nuts, whole grains</li>
                          <li>• Avoid salt and potassium-rich foods</li>
                        </ul>
                      </div>
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Warning:</strong> Extreme diets can affect your health and fertility. Never try restrictive diets without doctor supervision. Any effect on gender is minimal at best.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gender-disappointment">
                  <AccordionTrigger>What if I'm disappointed by the gender?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Gender disappointment is <strong>completely normal</strong> and more common than people think. Many parents experience it but feel ashamed to talk about it.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold mb-2">Normal Feelings:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Grief for the imagined child of the other gender</li>
                        <li>• Worry about relating to a child of that gender</li>
                        <li>• Concern about family dynamics (all boys, all girls)</li>
                        <li>• Pressure from partner or family</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold mb-2">What Helps:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Acknowledge your feelings without guilt</li>
                        <li>• Give yourself time—feelings often change</li>
                        <li>• Talk to your partner or a therapist</li>
                        <li>• Join support groups (online or in-person)</li>
                        <li>• Focus on your baby as an individual, not a gender</li>
                        <li>• Connect with your baby through movement and bonding</li>
                      </ul>
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Most parents who experience gender disappointment report that their feelings completely resolve after birth when they meet their baby. The love for your child is not diminished by initial disappointment.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle>Still Have Questions?</CardTitle>
              <CardDescription>Explore more information or try our tools</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link to="/science">Read the Science</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/predict">Try Prediction Tool</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
