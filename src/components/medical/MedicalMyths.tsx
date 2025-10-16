import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";

export default function MedicalMyths() {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Heartbeat rate</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">The claim:</p>
            <p>A faster fetal heart rate (&gt;140 bpm) means girl; slower means boy.</p>
            <p className="font-medium text-foreground mt-2">The science:</p>
            <p>Fetal heart rate varies with gestational age, fetal activity, and time of day. Multiple studies show no correlation between heart rate and fetal sex. Both male and female fetuses have overlapping heart rate ranges.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Belly shape or carrying high/low</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">The claim:</p>
            <p>Carrying high means girl; carrying low means boy. Or a round belly means girl; pointed means boy.</p>
            <p className="font-medium text-foreground mt-2">The science:</p>
            <p>Belly shape is influenced by maternal anatomy (abdominal muscle tone, body type), fetal position, and number of prior pregnancies—not fetal sex. No medical evidence supports this myth.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Morning sickness severity</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">The claim:</p>
            <p>Severe morning sickness means you're having a girl.</p>
            <p className="font-medium text-foreground mt-2">The science:</p>
            <p>While some studies suggest slightly higher rates of severe nausea (hyperemesis gravidarum) in pregnancies with female fetuses, the overlap is substantial and individual variation is enormous. Morning sickness cannot reliably predict sex.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Food cravings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">The claim:</p>
            <p>Craving sweets means girl; craving salty or savory foods means boy.</p>
            <p className="font-medium text-foreground mt-2">The science:</p>
            <p>Cravings are influenced by hormonal changes, nutritional needs, cultural factors, and individual preferences. No scientific evidence links specific cravings to fetal sex.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Chinese gender chart and lunar calendars</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">The claim:</p>
            <p>Ancient charts based on lunar age and conception month can predict baby's sex.</p>
            <p className="font-medium text-foreground mt-2">The science:</p>
            <p>No scientific basis. Studies testing these charts show accuracy around 50%—the same as random chance. Sex is determined by which sperm fertilizes the egg, not by dates or maternal age.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Ring test and pendulum methods</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">The claim:</p>
            <p>Dangling a ring on a string over the belly will swing in circles for girl, back-and-forth for boy.</p>
            <p className="font-medium text-foreground mt-2">The science:</p>
            <p>This is a form of ideomotor response—unconscious hand movements cause the pendulum motion. No physiological connection to fetal sex. Accuracy is random chance.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-sm text-muted-foreground space-y-2 border-l-4 border-l-amber-500 pl-4 py-2">
        <p className="font-medium text-foreground">Bottom line:</p>
        <p>These methods can be fun to try for entertainment, but they have no scientific validity. If you want to know your baby's sex, ultrasound, NIPT, or diagnostic testing are the only reliable options.</p>
      </div>
    </div>
  );
}
