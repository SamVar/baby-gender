import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Myths() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 animate-fade-in">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-primary" />
              Gender Myths & Tales 🔮
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore traditional folklore and old wives' tales about predicting baby gender. From ancient beliefs to modern myths, discover the fascinating stories behind these predictions.
            </p>
          </div>

          {/* Disclaimer */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important Disclaimer:</strong> These are traditional beliefs, cultural folklore, and old wives' tales. They are not scientifically proven and should be treated as entertainment only. For accurate gender determination, always consult your healthcare provider and use medical methods like ultrasound or NIPT testing.
            </AlertDescription>
          </Alert>

          {/* Physical Signs Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Physical Signs During Pregnancy 🤰</CardTitle>
              <CardDescription>Traditional beliefs about pregnancy symptoms, body changes, and baby gender</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Belly Shape */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Belly Shape & Position</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you're carrying high and your belly is round like a basketball, it's a girl. If you're carrying low and your belly is pointed or torpedo-shaped, it's a boy. Some also say that if your belly "sticks out" prominently, it's a boy, while a belly that spreads around your sides means a girl.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief dates back centuries across multiple cultures. In medieval Europe, midwives would observe belly shape as one of many indicators. Similar beliefs exist in Asian, African, and Latin American cultures.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">People believe different hormone levels produced by male vs. female fetuses affect how the baby positions itself in the womb, causing different belly shapes. Another theory suggests boys are more active and position themselves differently than girls.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Random Chance)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe to Observe</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">92% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Belly shape depends on several factors: mother's muscle tone, whether it's a first pregnancy (abdominal muscles are tighter the first time), baby's position in the womb, mother's body type and bone structure, and how the baby is lying at any given moment. These factors have nothing to do with the baby's gender.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> A 1999 study published in Birth journal tested 104 pregnant women who predicted their baby's gender based on belly shape. The accuracy rate was 50%—exactly the same as flipping a coin!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Morning Sickness */}
              <Card className="border-l-4 border-l-girl">
                <CardHeader>
                  <CardTitle className="text-lg">Morning Sickness Severity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">Severe morning sickness, constant nausea, and frequent vomiting mean you're carrying a girl. If you have little to no morning sickness, it's a boy. The saying goes: "Girls make you sick because they steal your beauty."</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief is found across many cultures and has been documented for at least 300 years. It may stem from observations that severe hyperemesis gravidarum (extreme morning sickness) occurs in some girl pregnancies, though this isn't a reliable pattern.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory suggests that female fetuses produce higher levels of hormones, particularly hCG (human chorionic gonadotropin) and estrogen, which cause more severe nausea and vomiting in the mother. Some also believe girls produce more pregnancy hormones in general.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~55% Accuracy (Slight Correlation)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe to Observe</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">85% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Some studies have found a slight correlation between severe morning sickness (hyperemesis gravidarum) and girl babies, with affected women being about 55% likely to have girls. However, this is a small effect and many women with severe nausea have boys, while many women with mild symptoms have girls. Morning sickness severity is primarily caused by hormone levels, which vary greatly between individuals regardless of fetal gender.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Morning sickness is actually a good sign—it indicates healthy hormone production! It typically peaks between 8-11 weeks and improves by the second trimester.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Skin & Hair */}
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-lg">Skin & Hair Changes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you develop acne, dull skin, or your hair becomes dry and brittle, it's a girl—she's "stealing your beauty." If you have clear, glowing skin, lustrous hair that grows quickly, and you look radiant, it's a boy. The pregnancy "glow" supposedly means boy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">The "stealing beauty" belief appears in European, Middle Eastern, and Asian folklore, dating back at least to the 1600s. It was considered one of the most reliable signs by traditional midwives.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">Different hormone levels from male vs female babies supposedly affect the mother's appearance. Girl babies allegedly produce more estrogen, causing skin issues, while boy babies produce more testosterone, leading to better skin and hair.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Evidence)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe to Observe</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">78% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Skin and hair changes during pregnancy are caused by the mother's own hormone fluctuations—not the baby's gender. Increased blood volume, progesterone, estrogen, and other pregnancy hormones affect oil production, skin texture, and hair growth. Some women experience the "glow" (increased blood flow), while others get acne (increased oil production). These changes are highly individual and unrelated to whether you're carrying a boy or girl.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> The pregnancy glow is real—it's caused by 50% more blood circulating through your body, giving your skin a flushed, radiant appearance. But it has nothing to do with baby's gender!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Heart Rate */}
              <Card className="border-l-4 border-l-boy">
                <CardHeader>
                  <CardTitle className="text-lg">Baby's Heart Rate</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If the baby's heart rate is above 140 beats per minute (bpm), it's a girl. If it's below 140 bpm, it's a boy. Some versions say the threshold is 150 bpm, and others claim you can tell by how "fast" or "slow" the heartbeat sounds.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This is a relatively modern myth, becoming popular in the 1970s-1980s when fetal heart rate monitoring became routine during prenatal care. Before this technology, the myth couldn't exist!</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The belief is that female hearts naturally beat faster than male hearts, and this difference exists even in the womb. People think they can hear the difference during doppler checks or ultrasounds.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Scientifically Debunked)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe (Medical Monitoring)</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">88% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Multiple scientific studies have thoroughly debunked this myth. A 2006 study in Fetal Diagnosis and Therapy analyzed 966 births and found no significant difference between male and female fetal heart rates. Another study in 2018 confirmed the same. Fetal heart rate varies throughout pregnancy (120-160 bpm is normal) and changes based on the baby's activity level, gestational age, and time of day—not gender.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> A baby's heart rate can change by 20-30 bpm within minutes based on whether they're sleeping or active. It's one of the most dynamic vital signs!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Breast Changes */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Breast Size Differences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If your left breast is larger than your right during pregnancy, you're having a girl. If your right breast is larger, it's a boy. Some versions also involve nipple darkness—darker left nipple means girl, darker right means boy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief appears in various forms across cultures, though its exact origin is unclear. It may be related to ancient beliefs about body symmetry and gender determination.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory suggests that different hormones from male or female fetuses affect breast tissue growth on different sides of the body. No actual mechanism is ever explained.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Scientific Basis)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe to Observe</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">45% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> It's completely normal for one breast to be slightly larger than the other—this is true for about 65% of women, pregnant or not! During pregnancy, breasts grow due to hormonal changes preparing for breastfeeding. Slight size differences are natural variations in breast tissue and have nothing to do with baby gender.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Breasts can grow 1-3 cup sizes during pregnancy as milk ducts expand and breast tissue increases. This happens regardless of baby's gender!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Linea Nigra */}
              <Card className="border-l-4 border-l-girl">
                <CardHeader>
                  <CardTitle className="text-lg">Linea Nigra (Dark Line)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If the dark line running down your belly (linea nigra) extends from your pubic bone all the way up past your belly button to your ribs, it's a boy. If the line only goes to your belly button or is very faint, it's a girl. Some also say a very dark line means boy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief has been documented in various cultures for centuries. The linea nigra itself is caused by pregnancy hormones and appears in about 90% of pregnancies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">People believe male fetuses produce hormones that make the line darker and longer, while female fetuses produce hormones that keep it lighter and shorter.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Evidence)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe - Normal Pregnancy Change</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">65% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> The linea nigra is caused by increased melanin production due to pregnancy hormones (estrogen and progesterone), which stimulate pigment cells. Its darkness and length depend on your skin tone (darker skin tones get darker lines), genetics, and individual hormone levels—not baby gender. It typically appears in the second trimester and fades within months after birth.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> The linea nigra actually exists before pregnancy as the "linea alba" (white line), but it's barely visible. Pregnancy hormones just make it darken and become noticeable!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Face Changes */}
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-lg">Face Shape Changes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If your face becomes rounder, fuller, or puffy during pregnancy—especially in the cheeks—you're carrying a girl. If your face stays relatively the same or becomes more angular, it's a boy. This ties into the "girl steals your beauty" myth.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief is common in European and North American folklore and has been passed down for generations among women in families.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory is that female fetuses cause more water retention and hormonal changes that affect facial structure, particularly causing swelling in the cheeks and under the eyes.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Folklore)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe to Observe</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">70% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Facial changes during pregnancy are caused by water retention (edema), increased blood volume, and weight gain—all normal parts of pregnancy regardless of baby gender. Some women retain more water than others due to diet, activity level, genetics, and individual hormone responses. Your face shape has nothing to do with whether you're carrying a boy or girl.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Pregnancy increases blood volume by 40-50%, which can cause slight swelling throughout the body, including the face. It's temporary and goes away after delivery!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Cold Feet */}
              <Card className="border-l-4 border-l-boy">
                <CardHeader>
                  <CardTitle className="text-lg">Cold Feet Myth</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If your feet are always cold during pregnancy, even in warm weather or with socks on, you're having a boy. If your feet are warm or normal temperature, it's a girl. Some versions also involve cold hands.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief appears in various folk traditions but became more popularized in recent decades through pregnancy forums and social media.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory suggests that male fetuses affect the mother's circulation differently, drawing more blood to the core and leaving extremities colder.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Evidence)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe to Observe</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">55% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> During pregnancy, your cardiovascular system undergoes major changes. Blood volume increases dramatically, but circulation patterns can change, sometimes leading to cold extremities. This can be caused by anemia (common in pregnancy), hormonal changes affecting blood vessels, or the growing uterus putting pressure on blood vessels. It has nothing to do with baby gender and can be improved with iron supplements, exercise, and staying hydrated.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> About 30% of pregnant women experience cold feet due to circulatory changes. It's one of the lesser-known but common pregnancy symptoms!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Clumsiness */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Clumsiness vs Gracefulness</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you become clumsy during pregnancy—dropping things, bumping into furniture, tripping more often—it's a boy. If you maintain your grace and coordination, it's a girl. Boys allegedly make you more awkward.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This is a more modern myth without deep historical roots, likely emerging from pregnancy experiences shared in modern times.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory is that male fetuses cause different hormone production that affects balance and coordination, or that boys move more in the womb, throwing off the mother's center of gravity.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Scientific Basis)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe (Be Careful!)</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">40% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Pregnancy clumsiness is real and experienced by many women regardless of baby gender! It's caused by: 1) Your shifting center of gravity as your belly grows, 2) Loosened joints and ligaments (due to the hormone relaxin), 3) Fluid retention causing swollen fingers (affecting grip), 4) Pregnancy brain/fatigue affecting concentration. These are normal physiological changes that happen to all pregnant women, not indicators of gender.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> The hormone relaxin loosens your joints to prepare for childbirth, but it also makes you less stable and more prone to trips and falls. Wearing supportive shoes helps!</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Cravings & Diet Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cravings & Food Preferences 🍕</CardTitle>
              <CardDescription>What you eat, crave, and avoid during pregnancy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Sweet vs Salty */}
              <Card className="border-l-4 border-l-girl">
                <CardHeader>
                  <CardTitle className="text-lg">Sweet vs Salty Cravings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you crave sweets like chocolate, candy, ice cream, cookies, and fruit, you're having a girl. If you crave salty or savory foods like chips, pickles, pretzels, and meat, you're having a boy. This is one of the most popular gender prediction myths.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief appears across many cultures and has existed for centuries. It's mentioned in 19th-century medical texts and traditional midwifery guides.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory suggests that babies of different genders require different nutrients for development, influencing the mother's cravings. Girl babies supposedly need more sugar/calcium, while boy babies need more salt/protein.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Evidence)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe (In Moderation)</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">95% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Pregnancy cravings are complex and influenced by hormonal changes, nutritional needs, emotional factors, cultural conditioning, and personal food preferences—not baby gender. A study of 2,450 pregnant women found no correlation between food cravings and baby gender. Many women crave both sweet AND salty foods during the same pregnancy!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> About 50-90% of pregnant women experience food cravings, typically starting in the first trimester and peaking in the second trimester. The most common cravings are sweets, followed by salty/savory foods.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Meat & Protein */}
              <Card className="border-l-4 border-l-boy">
                <CardHeader>
                  <CardTitle className="text-lg">Meat & Protein Cravings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you constantly crave meat, cheese, nuts, and high-protein foods—or if you suddenly love meat despite being a vegetarian—you're having a boy. If you're avoiding meat or find it unappealing, it's a girl.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief may stem from traditional gender roles associating meat and protein with masculinity and strength.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">Male babies supposedly need more protein for muscle development and growth, causing the mother to crave protein-rich foods. Higher testosterone production allegedly drives meat cravings.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Folklore)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe - Good Nutrition</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">72% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Protein cravings during pregnancy often indicate your body needs more protein for fetal development and increased blood volume—this happens with both boy and girl babies! All fetuses need protein for growth. Conversely, meat aversions are common in early pregnancy due to heightened sense of smell and nausea, affecting women carrying both genders equally.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Pregnant women need about 70-100 grams of protein daily (25-30 grams more than non-pregnant women) to support baby's growth and maternal tissue expansion.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Dairy & Calcium */}
              <Card className="border-l-4 border-l-girl">
                <CardHeader>
                  <CardTitle className="text-lg">Dairy & Calcium Cravings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you crave milk, cheese, yogurt, ice cream, and other dairy products—especially if you drink multiple glasses of milk per day—you're having a girl. The belief is that girls need more calcium for their bone development.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief has cultural roots in societies where dairy was abundant and associated with feminine nurturing and softness.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory is that female fetuses require more calcium for their smaller, more delicate bone structure, triggering calcium cravings in the mother.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Unproven)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe - Nutritious Choice</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">68% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> All babies—boys and girls—need substantial calcium for skeletal development. Pregnant women need about 1,000mg of calcium daily. Dairy cravings may indicate your body needs more calcium, which is a common nutritional need in pregnancy regardless of baby gender. The baby takes what it needs from your body, so calcium intake is important for YOUR bone health too!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Your body's calcium absorption increases by 50-60% during pregnancy, allowing you to meet your baby's needs without depleting your own bones—nature's amazing adaptation!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Citrus & Sour */}
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-lg">Citrus & Sour Foods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you crave citrus fruits (oranges, lemons, grapefruit), sour candies, pickles, or anything tangy and acidic, you're having a girl. The saying goes "sour for a daughter, sweet for a son."</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief appears in various forms across different cultures, particularly in Eastern European and Asian folklore.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">People theorize that female fetuses alter the mother's pH balance or vitamin C needs, creating sour cravings.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Scientific Basis)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe - Good Vitamin C</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">63% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Citrus cravings often indicate your body needs more vitamin C, which is important for immune function, collagen production, and iron absorption during pregnancy. Sour/tangy foods can also help with nausea, which is why pickles and lemons are popular choices. These cravings have nothing to do with baby gender and everything to do with nutritional needs and nausea relief.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Pregnant women need 85mg of vitamin C daily (15mg more than non-pregnant women). One medium orange provides about 70mg!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Spicy Foods */}
              <Card className="border-l-4 border-l-boy">
                <CardHeader>
                  <CardTitle className="text-lg">Spicy Food Tolerance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you suddenly crave or can tolerate very spicy foods—hot sauce, peppers, curry, spicy Mexican food—it's a boy. If you develop an aversion to spicy foods or they give you heartburn, it's a girl.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This myth may connect to traditional associations between heat/fire and masculinity in various cultures.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory suggests that male fetuses produce hormones that increase the mother's tolerance for spicy, intense flavors.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Evidence)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">⚠️ May Worsen Heartburn</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">52% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Food preferences during pregnancy are highly individual. Many women develop heartburn (regardless of baby gender) because the hormone progesterone relaxes the valve between stomach and esophagus, allowing acid to escape. This makes spicy foods uncomfortable for many pregnant women. Others continue enjoying spicy foods throughout pregnancy. It's about your digestive system, not baby gender!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> About 50-80% of pregnant women experience heartburn, especially in the third trimester when the growing baby pushes the stomach up. Eating smaller meals helps!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Garlic */}
              <Card className="border-l-4 border-l-girl">
                <CardHeader>
                  <CardTitle className="text-lg">Garlic Consumption</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you suddenly dislike garlic, develop an aversion to its smell, or can't eat foods with garlic, you're having a girl. If you love garlic and crave it, it's a boy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief appears in Mediterranean and Eastern European folklore, where garlic is a dietary staple.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">No scientific mechanism is even proposed for this myth—it's pure folklore.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Folklore)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe - Healthy Food</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">35% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Pregnant women often develop heightened sense of smell (hyperosmia) due to estrogen, making strong odors like garlic overwhelming. This happens to women carrying both boys and girls. Food aversions typically develop in the first trimester as a protective mechanism against potentially harmful substances.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Your sense of smell can become up to 11 times more sensitive during pregnancy! This hypersensitivity usually improves in the second trimester.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Orange Juice */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Orange Juice Cravings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you drink orange juice constantly, especially multiple glasses per day or straight from the carton, you're having a girl. Some versions specify that craving oranges (but not juice) means boy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This is a more modern myth that emerged as orange juice became a common household beverage in the 20th century.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">People believe female fetuses require more vitamin C or that the acidity indicates girl babies.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Basis)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe (Watch Sugar Content)</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">48% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Orange juice cravings likely indicate vitamin C needs or simply taste preference. All pregnancies need vitamin C. However, orange juice is high in sugar, so it's better to eat whole oranges for the fiber!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> One cup of orange juice contains about 21 grams of sugar (naturally occurring fructose), which is similar to some sodas. Whole fruit is healthier!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Carbs */}
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-lg">Bread & Carbohydrate Cravings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Tale</h4>
                    <p className="text-muted-foreground">If you crave bread, pasta, potatoes, rice, and other carbs, you're having a boy. Boys allegedly require more energy, driving carb cravings.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This belief may connect to traditional ideas about carbohydrates providing energy and sustenance for "active" male babies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory is that male fetuses have higher energy demands, causing mothers to crave energy-dense carbohydrates.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Evidence)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe - Choose Whole Grains</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">76% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Carbohydrate cravings during pregnancy are extremely common because your body needs more calories (about 300-500 extra per day). Carbs provide quick energy and can help with nausea. This happens with both male and female pregnancies. Carb cravings have nothing to do with baby gender—your body is just working harder!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Growing a baby requires an extra 50,000-80,000 calories over the course of pregnancy! That's only about 300 calories/day in the second trimester, increasing to 450/day in the third.</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Traditional Tests Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Traditional Tests 🧪</CardTitle>
              <CardDescription>Folk methods people have tried at home for generations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Ring Test */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Ring Test (Pendulum Method)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Method</h4>
                    <p className="text-muted-foreground">Thread a ring (traditionally a wedding ring) on a string, chain, or strand of hair. Hold it steady over your pregnant belly or your hand. If it swings in circles (clockwise or counterclockwise), it's a girl. If it swings back and forth in a straight line, it's a boy. Some say the test also predicts future children if you continue holding it.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This ancient method dates back centuries and appears in European, Asian, and Middle Eastern cultures. It's related to dowsing and pendulum divination practices. In some traditions, grandmothers perform this test at baby showers.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">Believers think subtle magnetic fields, energy, or spiritual forces from the baby influence how the pendulum moves. Some claim the baby's heartbeat or electromagnetic field causes the ring to swing in gender-specific patterns.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Evidence)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Completely Safe</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">89% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> The ring moves due to small, unconscious hand movements called the "ideomotor effect"—the same phenomenon behind Ouija boards and dowsing rods. Your muscles make tiny movements based on your expectations or hopes, causing the ring to swing. It has nothing to do with the baby's gender, energy fields, or magnetism. It's a fun party trick but not a prediction tool!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> The ideomotor effect is so powerful that even people who know about it can't consciously prevent the movements! Your subconscious controls these micro-movements.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Baking Soda Test */}
              <Card className="border-l-4 border-l-boy">
                <CardHeader>
                  <CardTitle className="text-lg">Baking Soda Test</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Method</h4>
                    <p className="text-muted-foreground">Mix a tablespoon of baking soda with your first morning urine in a clear cup. If it fizzes and bubbles vigorously (like soda), it's a boy. If there's no reaction or very little fizzing, it's a girl. The test should be done with first morning urine for "most accurate" results.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This is a relatively modern test that became popular through social media and pregnancy forums in the 2000s-2010s. It doesn't have deep historical roots like many other myths.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory claims that male and female pregnancies create different urine pH levels. Baking soda is a base (pH 9), so it reacts with acids. The idea is that boy pregnancies make urine more acidic (causing fizzing), while girl pregnancies make it more alkaline (no fizzing).</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Scientific Validity)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe (External Use Only)</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">81% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> Urine pH varies constantly based on your diet, hydration level, time of day, vitamins you take, and even exercise—not baby gender. Normal urine pH ranges from 4.5-8.0. Acidic urine (from high-protein diets or dehydration) will fizz with baking soda regardless of whether you're carrying a boy or girl. Alkaline urine (from vegetarian diets or certain medications) won't fizz. The baby's gender doesn't affect maternal urine chemistry in any predictable way.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Your urine pH can change from morning to evening and from day to day based on what you eat. Coffee and meat make it more acidic, while vegetables make it more alkaline!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Red Cabbage Test */}
              <Card className="border-l-4 border-l-girl">
                <CardHeader>
                  <CardTitle className="text-lg">Red Cabbage Test</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Method</h4>
                    <p className="text-muted-foreground">Boil chopped red cabbage in water for about 10 minutes until the water turns dark purple. Let it cool, then mix equal parts cabbage water with your urine. If the mixture turns pink, red, or purplish-red, it's a boy. If it stays purple or turns purplish-blue, it's a girl. Some versions use different color interpretations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">Red cabbage has been used as a natural pH indicator in science education for decades. Its application to gender prediction is a modern adaptation of this scientific property, popularized online.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">Red cabbage water contains anthocyanins, which are natural pH indicators. These compounds turn red/pink in acidic solutions and blue/green in alkaline solutions. The theory is that boy pregnancies produce more acidic urine (turning the water pink) while girl pregnancies produce more alkaline urine (staying purple/blue).</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Debunked)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe - Natural Ingredients</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">62% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> While red cabbage water IS a legitimate pH indicator used in chemistry education, pregnancy doesn't create gender-specific pH levels. Your urine pH fluctuates based on diet, hydration, and other factors unrelated to baby gender. The cabbage water is accurately showing your urine's pH—it's just that this pH has nothing to do with whether you're carrying a boy or girl. It's a cool science experiment but not a gender predictor!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Red cabbage contains anthocyanins that change color across a wide pH range: red (pH 2), purple (pH 4), violet (pH 6), blue (pH 8), and green (pH 10-12). It's used to teach chemistry to kids!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Test */}
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-lg">Key Test</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Method</h4>
                    <p className="text-muted-foreground">Place a key on a table or other flat surface. Ask the pregnant woman to pick it up without thinking about it. If she picks it up by the round end (the end you hold), it's a girl. If she picks it up by the long end (the part that goes in the lock), it's a boy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This test appears in various European folklore traditions, where keys were symbols of unlocking mysteries and secrets. It's related to other object-based prediction methods.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">Believers think that pregnancy hormones or the baby's influence affect subconscious choices and behaviors, causing pregnant women to instinctively reach for objects in gender-specific ways.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Random Chance)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Completely Safe</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">38% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> How you pick up a key is based on habit, hand dominance, the key's position, and random chance—not baby gender. Most people have a preferred way they pick up keys based on years of muscle memory. There's no biological mechanism by which fetal gender would influence how you grasp objects!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Right-handed people tend to approach and grab objects differently than left-handed people. This is about motor patterns, not pregnancy!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Wedding Ring Hand Test */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Wedding Ring Over Hand Test</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Method</h4>
                    <p className="text-muted-foreground">Hold your wedding ring on a string over your open palm (not your belly). If it swings in circles, you're having a girl. If it swings back and forth in a straight line, it's a boy. Some versions say to do this over each hand and compare results.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This is a variation of the traditional ring test, modified to be done over the hand instead of the belly. It's popular in some cultural traditions as an alternative to the belly method.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory is similar to the belly ring test—believers think pregnancy changes your body's energy or magnetic field, which is reflected in your hands.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (Ideomotor Effect)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe & Harmless</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">67% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> This test also relies on the ideomotor effect—unconscious hand movements cause the ring to swing. Your expectations, hopes, or even which hand you're holding the string with can influence the direction. There's no energy field or pregnancy-related change that would cause the ring to move in a specific pattern. It's a fun tradition but not predictive!</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Even professional dowsers and pendulum practitioners will get different results if they repeat the same test multiple times—showing it's random, not predictive!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Garlic Test */}
              <Card className="border-l-4 border-l-boy">
                <CardHeader>
                  <CardTitle className="text-lg">Garlic Test</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Method</h4>
                    <p className="text-muted-foreground">Eat a clove of raw garlic or a very garlicky meal. Wait an hour. If your body emits a strong garlic smell (noticeable on your skin and breath), you're having a boy. If you don't smell strongly of garlic despite eating it, you're having a girl.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Historical Origin</h4>
                    <p className="text-muted-foreground">This test appears in Mediterranean folklore where garlic is a common ingredient. It may be related to beliefs about body chemistry and gender.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The "Science"</h4>
                    <p className="text-muted-foreground">The theory suggests that male pregnancies alter metabolism or body chemistry in ways that make garlic compounds more easily excreted through skin and breath.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">~50% Accuracy (No Scientific Basis)</Badge>
                    <Badge variant="secondary" className="px-3 py-1">✓ Safe (Natural Food)</Badge>
                    <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1">28% Popularity</Badge>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 Scientific Reality:</strong> How strongly you smell after eating garlic depends on genetics, metabolism, skin type, and how much garlic you consumed—not baby gender. The compound allicin in garlic is processed by your liver and excreted through breath and skin. This process is highly individual and has nothing to do with pregnancy or fetal gender.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><strong>Fun Fact:</strong> Some people have a genetic variation that makes them smell stronger after eating garlic, while others barely smell at all. It's determined by your genes, not your baby!</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-primary/5 via-girl/5 to-boy/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Want to Know the Real Science?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These myths are entertaining, but for accurate information about gender determination and prediction, explore the science-backed facts.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild size="lg">
                    <Link to="/science">Read the Science →</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/predict">Try Prediction Tool</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}