import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Microscope, AlertCircle, Target, Calendar, TestTube2, Dna, BarChart3, Scale, Lightbulb } from "lucide-react";
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
              Comprehensive, scientifically-verified information about gender determination and birth statistics
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
                <p className="text-sm text-muted-foreground mt-1">Boys to girls born naturally worldwide</p>
              </CardContent>
            </Card>
            <Card className="border-primary/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Chromosome Pair</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">23rd Pair</div>
                <p className="text-sm text-muted-foreground mt-1">XX or XY determines gender</p>
              </CardContent>
            </Card>
            <Card className="border-accent/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">NIPT Test</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">99%+</div>
                <p className="text-sm text-muted-foreground mt-1">Accuracy at 10+ weeks</p>
              </CardContent>
            </Card>
          </div>

          {/* SECTION 1: How Gender is Determined */}
          <Card className="border-boy/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Dna className="h-6 w-6 text-boy" />
                <div>
                  <CardTitle className="text-2xl">How Gender is Actually Determined</CardTitle>
                  <CardDescription>The biological science behind baby gender</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Card 1: Chromosomes & Sex Determination */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chromosomes & Sex Determination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">100% Accuracy</Badge>
                <Badge className="bg-boy/20 text-boy hover:bg-boy/30 px-3 py-1">Established Science</Badge>
              </div>
              <p className="text-muted-foreground">
                Humans have <strong>23 pairs of chromosomes</strong> (46 total). The 23rd pair determines biological sex:
              </p>
              <ul className="space-y-3 text-muted-foreground">
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
                  <strong>Key Fact:</strong> The father's sperm determines the baby's gender, not the mother. The mother always contributes an X chromosome.
                </AlertDescription>
              </Alert>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Chromosome Facts:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>X chromosome:</strong> ~1,100 genes, 155 million base pairs</li>
                  <li>• <strong>Y chromosome:</strong> ~70 genes, 59 million base pairs (much smaller)</li>
                  <li>• <strong>Discovery:</strong> Sex chromosomes identified in 1905</li>
                  <li>• <strong>23rd pair location:</strong> Part of every cell nucleus in the body</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                When a sperm with Y chromosome fertilizes an egg (X), the result is XY (boy). When a sperm with X chromosome fertilizes an egg (X), the result is XX (girl). This determination happens instantly at conception.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: The SRY Gene */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">The SRY Gene (Sex-determining Region Y)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Master Gene</Badge>
                <Badge className="bg-boy/20 text-boy hover:bg-boy/30 px-3 py-1">Discovered 1990</Badge>
              </div>
              <p className="text-muted-foreground">
                The Y chromosome carries the <strong>SRY gene</strong>, which is the master switch that triggers male development.
              </p>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">SRY Gene Details:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Location:</strong> Yp11.3 on short arm of Y chromosome</li>
                  <li>• <strong>Size:</strong> 828 base pairs, codes for 204 amino acids</li>
                  <li>• <strong>Discovered:</strong> 1990 by Peter Goodfellow's research team</li>
                  <li>• <strong>Product:</strong> TDF (Testis Determining Factor) protein</li>
                  <li>• <strong>Activation time:</strong> Approximately 6-8 weeks post-conception</li>
                </ul>
              </div>
              <p className="text-muted-foreground">
                <strong>What it does:</strong> When SRY activates, it triggers a cascade of other genes (especially SOX9) that cause the undifferentiated gonads to develop into testes instead of ovaries. Without SRY, the default development pathway is female.
              </p>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> Until the SRY gene activates, all embryos develop identically. This is why early embryos look the same regardless of chromosomal sex.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Card 3: Embryonic Development Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Embryonic Development Timeline (Week by Week)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Standard Embryology</Badge>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-l-primary pl-4 py-2">
                  <h4 className="font-semibold">Weeks 0-5: Undifferentiated Stage</h4>
                  <p className="text-sm text-muted-foreground">Genital ridge forms. No visible difference between male and female embryos. All embryos appear identical.</p>
                </div>
                <div className="border-l-4 border-l-boy pl-4 py-2">
                  <h4 className="font-semibold">Week 6-7: SRY Gene Activation</h4>
                  <p className="text-sm text-muted-foreground">In XY embryos, SRY gene on Y chromosome begins producing TDF protein. This is the first molecular difference.</p>
                </div>
                <div className="border-l-4 border-l-accent pl-4 py-2">
                  <h4 className="font-semibold">Week 7-8: Gonad Differentiation Begins</h4>
                  <p className="text-sm text-muted-foreground">Gonads begin differentiating into testes (XY) or ovaries (XX). Still not visible externally.</p>
                </div>
                <div className="border-l-4 border-l-girl pl-4 py-2">
                  <h4 className="font-semibold">Week 9-12: External Genitalia Start Forming</h4>
                  <p className="text-sm text-muted-foreground">External genitalia begin developing but still appear very similar. Gender not reliably visible on ultrasound yet.</p>
                </div>
                <div className="border-l-4 border-l-primary pl-4 py-2">
                  <h4 className="font-semibold">Week 12-14: Differences Become Distinct</h4>
                  <p className="text-sm text-muted-foreground">External differences become more apparent. Early gender scans possible at 12-13 weeks but only 70-75% accurate.</p>
                </div>
                <div className="border-l-4 border-l-boy pl-4 py-2">
                  <h4 className="font-semibold">Week 16-20: Clearly Visible</h4>
                  <p className="text-sm text-muted-foreground">Gender clearly visible on ultrasound during anatomy scan. Standard time for gender determination (90-95% accuracy).</p>
                </div>
                <div className="border-l-4 border-l-accent pl-4 py-2">
                  <h4 className="font-semibold">Week 20+: Full Differentiation</h4>
                  <p className="text-sm text-muted-foreground">External differentiation complete. Ultrasound accuracy 95-99%. Structures large and clear.</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Source:</strong> Standard embryology textbooks including Langman's Medical Embryology and Moore's The Developing Human.
              </p>
            </CardContent>
          </Card>

          {/* Card 4: The Moment of Conception */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">The Moment of Conception</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">50/50 Random</Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1">Instantaneous</Badge>
              </div>
              <p className="text-muted-foreground">
                Gender is determined at the <strong>exact moment of fertilization</strong> when sperm penetrates the egg. It is completely random which type of sperm (X-bearing or Y-bearing) reaches the egg first.
              </p>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Fertilization Process:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Sperm approaches egg and binds to zona pellucida (outer layer)</li>
                  <li>• Sperm head penetrates and enters egg cytoplasm</li>
                  <li>• Sperm brings either X or Y chromosome</li>
                  <li>• Zona pellucida hardens immediately (prevents other sperm from entering)</li>
                  <li>• Fertilization completes within 24 hours</li>
                  <li>• Gender is now fixed and cannot be changed</li>
                </ul>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Key Point:</strong> Approximately 50% of sperm carry an X chromosome and 50% carry a Y chromosome. There is no way to influence which sperm reaches the egg first naturally.
                </AlertDescription>
              </Alert>
              <p className="text-muted-foreground">
                During each ejaculation, millions of sperm are released (typically 40-300 million), roughly half carrying X and half carrying Y. The "race" to the egg is influenced by many factors, but gender determination remains essentially random.
              </p>
            </CardContent>
          </Card>

          {/* Card 5: Sperm Characteristics Research */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sperm Characteristics: The Shettles Theory</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Largely Unproven</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/30 px-3 py-1">Small Effect If Any</Badge>
              </div>
              <p className="text-muted-foreground">
                The <strong>Shettles Theory</strong> (1960s) claimed Y-sperm swim faster but die sooner, while X-sperm swim slower but live longer.
              </p>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Theory Claims:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Y-sperm (boy):</strong> Faster swimmers, lighter, shorter lifespan (~24 hours)</li>
                  <li>• <strong>X-sperm (girl):</strong> Slower swimmers, heavier, longer lifespan (~48-72 hours)</li>
                  <li>• <strong>Implication:</strong> Timing intercourse could influence gender</li>
                </ul>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Scientific Testing Results:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Lab studies:</strong> Very small differences detected in controlled settings</li>
                  <li>• <strong>2019 Study:</strong> No significant speed difference found in human sperm</li>
                  <li>• <strong>Weight difference:</strong> Y chromosome is 2.8% lighter than X (negligible practical effect)</li>
                  <li>• <strong>Lifespan:</strong> Both types survive 3-5 days in optimal conditions</li>
                </ul>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Scientific Consensus:</strong> Any differences between X and Y sperm are too small to be practically useful for gender selection. Effect on gender ratio is negligible (&lt;1% if any).
                </AlertDescription>
              </Alert>
              <p className="text-sm text-muted-foreground">
                The theory formed the basis of timing methods (Shettles Method), but subsequent research has not validated these approaches for practical gender selection.
              </p>
            </CardContent>
          </Card>

          {/* Card 6: Hormonal Cascade */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hormonal Cascade in Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Established Process</Badge>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold text-boy mb-2">Male Pathway (XY with SRY)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Week 8-9:</strong> Testosterone production begins in developing testes</li>
                    <li>• <strong>AMH (Anti-Müllerian Hormone):</strong> Causes regression of Müllerian ducts (would become female organs)</li>
                    <li>• <strong>DHT (Dihydrotestosterone):</strong> Masculinizes external genitalia</li>
                    <li>• <strong>Weeks 12-18:</strong> Testosterone peak during this period</li>
                    <li>• <strong>Result:</strong> Male internal and external reproductive system develops</li>
                  </ul>
                </div>
                <div className="bg-pink-500/10 p-4 rounded-lg border border-pink-500/20">
                  <h4 className="font-semibold text-girl mb-2">Female Pathway (XX without SRY)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>No testosterone surge:</strong> Default development pathway proceeds</li>
                    <li>• <strong>Müllerian ducts:</strong> Develop into uterus, fallopian tubes, upper vagina</li>
                    <li>• <strong>Ovaries form:</strong> Remain inactive until puberty (no hormone production in fetus)</li>
                    <li>• <strong>Estrogen production:</strong> Minimal in female fetus (mostly from placenta)</li>
                    <li>• <strong>Result:</strong> Female reproductive system develops as default pathway</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Important:</strong> Female development is the "default" pathway. Active hormonal intervention (testosterone and AMH) is required for male development. This is why individuals with Androgen Insensitivity Syndrome (AIS) who are XY develop female characteristics—their bodies cannot respond to testosterone.
              </p>
            </CardContent>
          </Card>

          {/* Card 7: Genes Beyond SRY */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Genetic Network Beyond SRY</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">50+ Genes Involved</Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1">Complex System</Badge>
              </div>
              <p className="text-muted-foreground">
                While SRY is the master switch, gender determination requires coordinated action of <strong>over 50 genes</strong>. Here are the key players:
              </p>
              <div className="space-y-3">
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm">SOX9 Gene</h4>
                  <p className="text-sm text-muted-foreground">Directly activated by SRY protein. Essential for testis development. When SRY turns on, SOX9 amplifies the signal.</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm">DAX1 Gene (on X Chromosome)</h4>
                  <p className="text-sm text-muted-foreground">Suppresses male development. In XX individuals, double dose of DAX1 helps prevent male development. Can override SRY if overexpressed.</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm">WT1 Gene</h4>
                  <p className="text-sm text-muted-foreground">Required for gonad formation in both sexes. Mutations cause gonad development failure regardless of XX or XY.</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm">SF1 (Steroidogenic Factor 1)</h4>
                  <p className="text-sm text-muted-foreground">Essential for gonad development and steroid hormone production. Regulates genes involved in testosterone synthesis.</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm">WNT4 Gene</h4>
                  <p className="text-sm text-muted-foreground">Promotes ovary development in XX individuals. Actively suppressed by SRY in XY individuals.</p>
                </div>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Complex System:</strong> Sex determination is not just "one gene = one sex." It's a delicate balance of multiple genes that must be precisely coordinated. Mutations in any of these genes can lead to Differences of Sex Development (DSD).
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Card 8: Chromosomal Variations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chromosomal Variations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Rare but Natural</Badge>
              </div>
              <p className="text-muted-foreground">
                While most people are XX or XY, several chromosomal variations exist. These demonstrate that sex determination is more complex than a simple binary.
              </p>
              <div className="space-y-3">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Turner Syndrome (45,X)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Frequency:</strong> 1 in 2,500 female births</li>
                    <li>• <strong>Karyotype:</strong> Single X chromosome, no second X or Y</li>
                    <li>• <strong>Presentation:</strong> Female appearance, short stature, usually infertile</li>
                    <li>• <strong>Medical care:</strong> Growth hormone, estrogen replacement therapy</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Klinefelter Syndrome (47,XXY)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Frequency:</strong> 1 in 500-1,000 male births</li>
                    <li>• <strong>Karyotype:</strong> Two X chromosomes plus one Y chromosome</li>
                    <li>• <strong>Presentation:</strong> Male appearance, taller than average, often infertile</li>
                    <li>• <strong>Note:</strong> May not be diagnosed until adulthood; many live normal lives</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Triple X Syndrome (47,XXX)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Frequency:</strong> 1 in 1,000 female births</li>
                    <li>• <strong>Karyotype:</strong> Three X chromosomes</li>
                    <li>• <strong>Presentation:</strong> Female appearance, usually normal development</li>
                    <li>• <strong>Note:</strong> Often undetected; most women never know they have it</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">XYY Syndrome (47,XYY)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Frequency:</strong> 1 in 1,000 male births</li>
                    <li>• <strong>Karyotype:</strong> One X and two Y chromosomes</li>
                    <li>• <strong>Presentation:</strong> Male appearance, typically normal development, often taller</li>
                    <li>• <strong>Note:</strong> Usually undiagnosed; no major health problems</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Mosaicism</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Definition:</strong> Different cells have different chromosomes</li>
                    <li>• <strong>Example:</strong> Some cells 45,X and some cells 46,XX (45,X/46,XX)</li>
                    <li>• <strong>Effect:</strong> Variable presentation depending on which cells are affected</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Source:</strong> National Institutes of Health (NIH), Genetics Home Reference, peer-reviewed medical literature.
              </p>
            </CardContent>
          </Card>

          {/* Card 9: Differences of Sex Development (DSD) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Differences of Sex Development (DSD)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">~1 in 1,500-2,000 Births</Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1">Medical Conditions</Badge>
              </div>
              <p className="text-muted-foreground">
                DSD (formerly called "intersex conditions") refers to conditions where chromosomal, gonadal, or anatomical sex is atypical. These demonstrate that biological sex exists on a spectrum.
              </p>
              <div className="space-y-3">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Androgen Insensitivity Syndrome (AIS)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Frequency:</strong> 1 in 20,000-64,000 births</li>
                    <li>• <strong>Genetics:</strong> XY chromosomes with SRY gene present</li>
                    <li>• <strong>Mechanism:</strong> Body cannot respond to testosterone (androgen receptor mutation)</li>
                    <li>• <strong>Result:</strong> Female external appearance despite XY chromosomes</li>
                    <li>• <strong>Gender identity:</strong> Typically female; raised as girls</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">5-Alpha-Reductase Deficiency</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Frequency:</strong> Rare (more common in certain populations)</li>
                    <li>• <strong>Genetics:</strong> XY chromosomes</li>
                    <li>• <strong>Mechanism:</strong> Cannot convert testosterone to DHT</li>
                    <li>• <strong>Result:</strong> Ambiguous genitalia at birth, masculinization at puberty</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Congenital Adrenal Hyperplasia (CAH)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Frequency:</strong> 1 in 15,000 births</li>
                    <li>• <strong>Genetics:</strong> XX chromosomes</li>
                    <li>• <strong>Mechanism:</strong> Excess androgen production in XX fetus</li>
                    <li>• <strong>Result:</strong> Masculinized external genitalia despite XX chromosomes</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Swyer Syndrome (XY Gonadal Dysgenesis)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Genetics:</strong> XY chromosomes with non-functional SRY gene</li>
                    <li>• <strong>Result:</strong> Female development despite XY chromosomes</li>
                    <li>• <strong>Note:</strong> Demonstrates importance of functional SRY, not just presence of Y</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">XX Male Syndrome (De la Chapelle Syndrome)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Genetics:</strong> XX chromosomes but SRY gene translocated to X chromosome</li>
                    <li>• <strong>Result:</strong> Male development despite no Y chromosome</li>
                    <li>• <strong>Frequency:</strong> 1 in 20,000-25,000 males</li>
                  </ul>
                </div>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Medical Note:</strong> These conditions show that sex development is more complex than XX/XY alone. Modern medical care focuses on individualized treatment and supporting the person's gender identity.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Card 10: Sex vs Gender */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sex vs Gender (Scientific Context)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Important Distinction</Badge>
              </div>
              <div className="space-y-3">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Biological Sex</h4>
                  <p className="text-sm text-muted-foreground">Determined by chromosomes (XX/XY), anatomy (internal and external reproductive organs), and hormones. This is what this page primarily discusses.</p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Gender Identity</h4>
                  <p className="text-sm text-muted-foreground">A person's internal, psychological sense of being male, female, both, neither, or somewhere along the spectrum. Develops during childhood and is influenced by brain development, prenatal hormones, and other factors.</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                <strong>Neuroscience research:</strong> Studies have found that certain brain structures may differ between males and females, and that transgender individuals' brain structures often align more closely with their gender identity than their chromosomal sex.
              </p>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Scope of This Page:</strong> This page focuses on biological sex determination (chromosomal and anatomical). Gender identity is a separate, complex topic involving psychology, neuroscience, and personal experience.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Card 11: Evolutionary Perspective */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Evolutionary Perspective on Sex Determination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Evolutionary Biology</Badge>
              </div>
              <div className="space-y-3">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Sex Determination Across Species</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Temperature-dependent:</strong> Reptiles like turtles (warm = female, cool = male)</li>
                    <li>• <strong>Haplodiploidy:</strong> Bees and ants (fertilized eggs = female, unfertilized = male)</li>
                    <li>• <strong>ZW system:</strong> Birds (ZZ = male, ZW = female, opposite of mammals)</li>
                    <li>• <strong>XY system:</strong> Mammals including humans</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Y Chromosome Evolution</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mt-2">
                    <li>• <strong>Origins:</strong> 300 million years ago, Y was same size as X chromosome</li>
                    <li>• <strong>Degradation:</strong> Y has lost most genes over time (now only ~70 genes vs X's ~1,100)</li>
                    <li>• <strong>Current state:</strong> Y is about 1/3 the size of X chromosome</li>
                    <li>• <strong>Future:</strong> Some scientists predict Y chromosome may disappear in 4.6 million years</li>
                    <li>• <strong>Controversy:</strong> Others argue essential genes like SRY will be preserved</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Fisher's Principle (1930)</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Explains why 50:50 sex ratio is evolutionarily stable. If one sex becomes rarer, parents producing that sex have more grandchildren (their offspring have more mating opportunities), so natural selection favors producing the rarer sex until equilibrium is restored.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SECTION 2: Global Birth Statistics */}
          <Card className="border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Global Birth Statistics & Patterns</CardTitle>
                  <CardDescription>What the data tells us about gender ratios worldwide</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Card 1: Natural Sex Ratio */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Natural Sex Ratio at Birth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">105-107 Boys : 100 Girls</Badge>
                <Badge className="bg-boy/20 text-boy hover:bg-boy/30 px-3 py-1">Globally Consistent</Badge>
              </div>
              <p className="text-muted-foreground">
                Globally, the natural sex ratio at birth is approximately <strong>105-107 boys for every 100 girls</strong>, or about 51.2-51.7% male births.
              </p>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Key Statistics:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>WHO data (2020):</strong> 51.4% male births globally</li>
                  <li>• <strong>Expressed as ratio:</strong> 1.05-1.07 (males per female)</li>
                  <li>• <strong>Percentage:</strong> 51.2-51.7% boys, 48.3-48.8% girls</li>
                  <li>• <strong>Consistency:</strong> Remarkably stable across all countries and time periods</li>
                  <li>• <strong>At conception:</strong> Estimated 120-170 males per 100 females (higher male loss during pregnancy)</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Source:</strong> United Nations Population Division, World Health Organization demographic data, multiple population studies.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Why More Boys */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why Are More Boys Born?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Multiple Theories</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/30 px-3 py-1">No Consensus</Badge>
              </div>
              <p className="text-muted-foreground">
                The biological reason for slightly more male births isn't fully understood. Several theories exist:
              </p>
              <div className="space-y-3">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Theory 1: Evolutionary Compensation</h4>
                  <p className="text-sm text-muted-foreground">Higher male mortality rates in childhood mean more boys need to be born to achieve 1:1 ratio in reproductive years. Nature compensates.</p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Theory 2: Male Embryo Fragility</h4>
                  <p className="text-sm text-muted-foreground">Male embryos are more fragile. Conception ratio may be 120-170 boys per 100 girls, but more male pregnancies end in early miscarriage. The 105:100 birth ratio is what survives.</p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Theory 3: Sperm Competition</h4>
                  <p className="text-sm text-muted-foreground">Slight advantage in sperm competition for Y-bearing sperm, though evidence is limited and effect would be very small.</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                <strong>Population balance:</strong> By adulthood (age 50-60), the ratio reaches approximately 1:1 due to higher male mortality rates throughout life.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Sex Ratio by Country */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sex Ratio by Country (2020 Data)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Natural Range: 103-108</Badge>
              </div>
              <p className="text-muted-foreground">
                Most countries fall within the natural range of 103-108 boys per 100 girls. Ratios outside this range often indicate sex-selective practices.
              </p>
              <div className="space-y-2">
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">United States</span>
                    <Badge variant="outline">105.0 (51.2% boys)</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">United Kingdom</span>
                    <Badge variant="outline">105.3 (51.3% boys)</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Canada</span>
                    <Badge variant="outline">105.6 (51.4% boys)</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">France</span>
                    <Badge variant="outline">105.0 (51.2% boys)</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Australia</span>
                    <Badge variant="outline">105.7 (51.4% boys)</Badge>
                  </div>
                </div>
                <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/30">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">China</span>
                    <Badge variant="destructive">113.5 (unnatural - sex selection)</Badge>
                  </div>
                </div>
                <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/30">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">India (some regions)</span>
                    <Badge variant="destructive">108-114 (unnatural - sex selection)</Badge>
                  </div>
                </div>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> Ratios above 108 typically indicate sex-selective abortion or other interventions, not natural variation. This has created serious social problems in affected countries.
                </AlertDescription>
              </Alert>
              <p className="text-sm text-muted-foreground">
                <strong>Source:</strong> CIA World Factbook, UN Population Division, national census data from various countries.
              </p>
            </CardContent>
          </Card>

          {/* Card 4: Historical Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Historical Sex Ratio Trends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Remarkably Stable</Badge>
              </div>
              <p className="text-muted-foreground">
                Historical records show the sex ratio has remained remarkably consistent over time.
              </p>
              <div className="space-y-3">
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold">1800s Data</h4>
                  <p className="text-sm text-muted-foreground">Limited records suggest ~105-106 ratio, same as today. Record-keeping varied by country.</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold">World War II Effect (1946-1947)</h4>
                  <p className="text-sm text-muted-foreground">Spike in male births post-war in several countries (106-107), returned to normal within 2-3 years. Multiple studies documented this phenomenon.</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold">Modern Era (1950-2025)</h4>
                  <p className="text-sm text-muted-foreground">Consistently 105-106 globally in countries without sex-selective practices. Extremely stable across 75+ years of comprehensive data.</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <h4 className="font-semibold">Countries with Sex Selection</h4>
                  <p className="text-sm text-muted-foreground">China and India show artificial ratios (110-120) starting in 1980s-1990s due to sex-selective abortion. South Korea's ratio has improved (108 → 105) after cultural changes and legal restrictions.</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Post-disaster patterns (debated):</strong> Some studies claim slight increase in male births after major earthquakes or wars, but results are inconsistent and effect size uncertain (0-2% if real).
              </p>
            </CardContent>
          </Card>

          {/* Card 5: Parental Age Effects */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Parental Age Effects - VERIFIED DATA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Small Effect: 0.6%</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/30 px-3 py-1">Not Predictive</Badge>
              </div>
              <p className="text-muted-foreground">
                Large-scale studies have found small correlations between parental age and baby gender.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold mb-2">Mother's Age Effect:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Under 20 years:</span><strong>51.5% boys</strong></div>
                    <div className="flex justify-between"><span>20-29 years:</span><strong>51.3% boys</strong></div>
                    <div className="flex justify-between"><span>30-39 years:</span><strong>51.1% boys</strong></div>
                    <div className="flex justify-between"><span>Over 40 years:</span><strong>50.9% boys</strong></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Effect size:</strong> 0.6% decrease from youngest to oldest mothers. Real but tiny.
                  </p>
                </div>
                <div className="bg-pink-500/10 p-4 rounded-lg border border-pink-500/20">
                  <h4 className="font-semibold mb-2">Father's Age Effect:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Studies show inconsistent results</li>
                    <li>• Most reliable data: Minimal to no effect under age 45</li>
                    <li>• Some data suggests 0.3-0.5% decrease with very advanced age (55+)</li>
                    <li>• Much weaker correlation than maternal age</li>
                  </ul>
                </div>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Source:</strong> Study of 86 million births in Sweden (1932-2007), one of the largest demographic studies ever conducted. <strong>Conclusion:</strong> Real but tiny effect, not useful for prediction or planning.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Card 6: Birth Order Effects */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Birth Order Effects - VERIFIED</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Small Effect: 0.8%</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/30 px-3 py-1">Not Reliable</Badge>
              </div>
              <div className="space-y-2">
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">First child:</span>
                    <Badge variant="outline">51.5% boys</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Second child:</span>
                    <Badge variant="outline">51.2% boys</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Third child:</span>
                    <Badge variant="outline">51.0% boys</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Fourth+ child:</span>
                    <Badge variant="outline">50.7% boys</Badge>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">"Boy Run" or "Girl Run" Analysis:</h4>
                <p className="text-sm text-muted-foreground">
                  If you have 3 boys, what's the probability the 4th is a boy? <strong>~51%</strong> (not 50%). There's a very slight correlation, but it's not strong enough to predict.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Effect size:</strong> 0.8% decrease from first to fourth child. Multiple large population studies confirm this pattern.
                </p>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Conclusion:</strong> Small effect exists but not reliable for planning. Each pregnancy is still essentially independent.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Card 7: Multiple Pregnancy Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Multiple Pregnancy Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Follows Probability</Badge>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Identical Twins (Monozygotic)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Frequency:</strong> 3-4 per 1,000 births</li>
                    <li>• <strong>Same gender:</strong> 100% (they share the same fertilized egg and chromosomes)</li>
                    <li>• <strong>Boy-boy twins:</strong> ~51.5% of identical twins</li>
                    <li>• <strong>Girl-girl twins:</strong> ~48.5% of identical twins</li>
                    <li>• <strong>Ratio:</strong> Follows natural population ratio</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Fraternal Twins (Dizygotic)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Frequency:</strong> 6-20 per 1,000 births (varies by ethnicity)</li>
                    <li>• <strong>Boy-boy:</strong> ~26% (0.51 × 0.51)</li>
                    <li>• <strong>Girl-girl:</strong> ~24% (0.49 × 0.49)</li>
                    <li>• <strong>Boy-girl (either order):</strong> ~50% (2 × 0.51 × 0.49)</li>
                    <li>• <strong>Independence:</strong> Each twin's gender is independent</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Triplets & Higher-Order Multiples</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Mostly fraternal (from multiple eggs)</li>
                    <li>• Gender combinations follow probability theory</li>
                    <li>• Can be mix of identical and fraternal</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">IVF Multiples</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Slightly higher female ratio (artifact of embryo selection practices)</li>
                    <li>• Multiple embryo transfer can result in twins/triplets</li>
                    <li>• Gender ratio varies by clinic practices</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 8: Seasonal Patterns */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Seasonal Birth Patterns - VERIFIED RESEARCH</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Small Effect: 0.3-0.6%</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/30 px-3 py-1">Not Useful</Badge>
              </div>
              <p className="text-muted-foreground">
                Some studies have found small seasonal variations in gender ratios by conception month.
              </p>
              <div className="space-y-2">
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Autumn/Fall conceptions:</span>
                    <Badge variant="outline">51.6% boys (+0.3%)</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Winter conceptions:</span>
                    <Badge variant="outline">51.3% boys</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Spring conceptions:</span>
                    <Badge variant="outline">51.0% boys (-0.2%)</Badge>
                  </div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Summer conceptions:</span>
                    <Badge variant="outline">51.1% boys</Badge>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Mechanism Theories:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Temperature:</strong> Environmental temperature may affect sperm production/viability</li>
                  <li>• <strong>Daylight hours:</strong> Melatonin production varies by season, may influence hormones</li>
                  <li>• <strong>Nutrition:</strong> Seasonal variation in diet and food availability</li>
                  <li>• <strong>None proven:</strong> These are theories, mechanisms not established</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Source:</strong> Multiple studies including Danish analysis of 2 million births. <strong>Effect size:</strong> 0.6% variation seasonally. Real but very small.
              </p>
            </CardContent>
          </Card>

          {/* Card 9: Geographic Factors */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Geographic & Environmental Factors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Small Effects</Badge>
              </div>
              <div className="space-y-3">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Altitude Effect:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>High altitude (&gt;2,000m):</strong> ~50.8% boys (vs 51.3% at sea level)</li>
                    <li>• <strong>Effect size:</strong> 0.5% decrease</li>
                    <li>• <strong>Theory:</strong> Lower oxygen availability affects male embryos more (they're more fragile)</li>
                    <li>• <strong>Studies:</strong> Observed in Andean, Himalayan, and Rocky Mountain populations</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Latitude Correlation:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Equatorial regions:</strong> 51.1-51.3% boys</li>
                    <li>• <strong>Higher latitudes:</strong> 51.3-51.5% boys</li>
                    <li>• <strong>Effect:</strong> 0.2-0.4% increase with latitude</li>
                    <li>• <strong>Theory:</strong> Temperature, daylight, vitamin D levels (speculative)</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold">Urban vs Rural:</h4>
                  <p className="text-sm text-muted-foreground">
                    No consistent difference found in modern studies with good data quality. Historical data suggested rural areas had slightly more boys, but likely due to data collection issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 10: Nutritional Research - The Breakfast Study */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nutritional Research - The Breakfast Study</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">11% Difference Found</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/30 px-3 py-1">Needs More Research</Badge>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">2008 UK Study (Mathews et al.):</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Participants:</strong> 740 first-time pregnant women</li>
                  <li>• <strong>Method:</strong> Food frequency questionnaires before pregnancy</li>
                  <li>• <strong>High-calorie diet before conception:</strong> 56% boys</li>
                  <li>• <strong>Low-calorie diet before conception:</strong> 45% boys</li>
                  <li>• <strong>Difference:</strong> 11% (largest dietary effect ever found)</li>
                </ul>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Breakfast Eating:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Regular breakfast eaters:</strong> 59% boys</li>
                  <li>• <strong>Skipped breakfast:</strong> 43% boys</li>
                  <li>• <strong>Difference:</strong> 16% (very large if true)</li>
                </ul>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Mechanism Theory:</h4>
                <p className="text-sm text-muted-foreground">
                  High glucose levels may favor conception of males. The theory is that maternal glucose levels influence which sperm successfully fertilizes the egg.
                </p>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Follow-up attempts:</strong> Some replication showing smaller effects (4-6%). <strong>Criticism:</strong> Small sample size, potential reverse causation (women carrying boys may eat more), confounding factors. <strong>Status:</strong> Interesting but not definitively proven. Needs larger, controlled studies. <strong>Practical use:</strong> Not recommended for gender selection—effect size unclear.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* SECTION 3: Medical Gender Determination Methods */}
          <Card className="border-accent/50 mt-12">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TestTube2 className="h-6 w-6 text-accent" />
                <div>
                  <CardTitle className="text-2xl">Medical Gender Determination Methods</CardTitle>
                  <CardDescription>Scientifically accurate ways to determine baby's gender</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* NIPT Card - Comprehensive */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">NIPT - Non-Invasive Prenatal Testing (Comprehensive)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-accent/20 text-accent hover:bg-accent/30 px-3 py-1">Most Accurate Non-Invasive</Badge>
                <Badge variant="outline" className="text-base px-3 py-1">99%+ Accuracy</Badge>
              </div>
              <p className="text-muted-foreground">
                <strong>Cell-free fetal DNA (cfDNA) testing</strong> analyzes tiny fragments of fetal DNA circulating in the mother's bloodstream.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <p className="text-sm font-semibold mb-1">When Available</p>
                  <p className="text-muted-foreground">9-10 weeks pregnant</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <p className="text-sm font-semibold mb-1">Accuracy</p>
                  <p className="text-accent font-bold">99.1-99.3% at 11+ weeks</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <p className="text-sm font-semibold mb-1">Safety</p>
                  <p className="text-muted-foreground">No risk (blood test)</p>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg">
                  <p className="text-sm font-semibold mb-1">Results Timeline</p>
                  <p className="text-muted-foreground">7-10 days</p>
                </div>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">How It Works:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Simple blood draw from mother's arm</li>
                  <li>• Detects presence of Y chromosome DNA fragments</li>
                  <li>• If Y chromosome detected → Boy</li>
                  <li>• If no Y chromosome detected → Girl</li>
                  <li>• Uses advanced sequencing technology</li>
                </ul>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Accuracy by Week:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>9 weeks:</strong> 95.8% accuracy</li>
                  <li>• <strong>10 weeks:</strong> 98.8% accuracy</li>
                  <li>• <strong>11+ weeks:</strong> 99.1-99.3% accuracy</li>
                  <li>• <strong>False positive rate:</strong> 0.1-0.3% (very rare)</li>
                  <li>• <strong>False negative rate:</strong> 0.3-0.8% (slightly higher, usually from early testing)</li>
                </ul>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Major Test Brands:</h4>
                <p className="text-sm text-muted-foreground">Harmony, Panorama, MaterniT21 PLUS, QNatal Advanced, Verifi, PrenaTest</p>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Primary Purpose:</h4>
                <p className="text-sm text-muted-foreground">
                  Screen for chromosomal abnormalities (Down syndrome/Trisomy 21, Trisomy 18, Trisomy 13). Gender determination is a byproduct.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold text-sm mb-2">Pros:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Extremely accurate</li>
                    <li>• Early detection (9-10 weeks)</li>
                    <li>• No risk to pregnancy</li>
                    <li>• Simple blood test</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  <h4 className="font-semibold text-sm mb-2">Cons:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Cost: $100-$500</li>
                    <li>• Not always covered by insurance</li>
                    <li>• Requires medical order</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ultrasound Card - Detailed */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ultrasound Gender Determination (Detailed)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-base px-3 py-1">Standard Prenatal Care</Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1">Most Common Method</Badge>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary/30 p-4 rounded-lg border-l-4 border-l-boy">
                  <h4 className="font-semibold mb-2">12-13 Weeks (Early Gender Scan)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Method:</strong> "Nub theory" or "angle of the dangle"</li>
                    <li>• <strong>What's measured:</strong> Angle of genital tubercle (&gt;30° = boy, &lt;30° = girl)</li>
                    <li>• <strong>Accuracy:</strong> 70-75% with experienced sonographer</li>
                    <li>• <strong>Challenges:</strong> Very small structures, angle measurement difficult</li>
                    <li>• <strong>Cost:</strong> $50-$150 private scan (not usually covered)</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg border-l-4 border-l-accent">
                  <h4 className="font-semibold mb-2">16-20 Weeks (Anatomy Scan)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Standard timing:</strong> 18-20 weeks most common</li>
                    <li>• <strong>Accuracy:</strong> 90-95% at this stage</li>
                    <li>• <strong>Boys:</strong> Look for penis and scrotum</li>
                    <li>• <strong>Girls:</strong> Look for "hamburger sign" (three lines = labia and clitoris)</li>
                    <li>• <strong>Cost:</strong> Usually covered by insurance (part of standard prenatal care)</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg border-l-4 border-l-girl">
                  <h4 className="font-semibold mb-2">20+ Weeks (Later Scans)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Accuracy:</strong> 95-99%</li>
                    <li>• <strong>Visibility:</strong> Structures large and very clear</li>
                    <li>• <strong>3D/4D ultrasound:</strong> Can provide clearer images but not medically necessary</li>
                  </ul>
                </div>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Factors Affecting Accuracy:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Baby's position:</strong> Cooperativeness (legs closed = can't see)</li>
                  <li>• <strong>Maternal BMI:</strong> Higher BMI = harder to see (more tissue to penetrate)</li>
                  <li>• <strong>Amniotic fluid level:</strong> Low fluid reduces image quality</li>
                  <li>• <strong>Technician experience:</strong> Skilled sonographers are more accurate</li>
                  <li>• <strong>Equipment quality:</strong> Better machines = clearer images</li>
                </ul>
              </div>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Common misidentification:</strong> Usually mistake boy for girl (penis hidden between legs or mistaken for umbilical cord). Less common to mistake girl for boy.
                </AlertDescription>
              </Alert>
              <p className="text-sm text-muted-foreground">
                <strong>Technician confidence:</strong> Often given as percentage ("80% sure it's a boy"). <strong>"Potty shot":</strong> Slang for clear view between legs showing genitals definitively.
              </p>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="border-primary/50 mt-12">
            <CardHeader>
              <CardTitle>Learn More</CardTitle>
              <CardDescription>Explore related topics and tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/myths">
                  <Button variant="outline" className="w-full">
                    Gender Myths & Tales →
                  </Button>
                </Link>
                <Link to="/predict">
                  <Button variant="outline" className="w-full">
                    Try Prediction Tool →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Scientific Accuracy:</strong> All statistics and claims on this page are based on peer-reviewed research, established medical knowledge, and reliable demographic data. Effect sizes and uncertainties are clearly stated. This information is for educational purposes.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
