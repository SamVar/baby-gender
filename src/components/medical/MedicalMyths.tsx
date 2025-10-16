import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";

export default function MedicalMyths() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-br from-amber-500/10 to-red-500/10 border border-amber-500/20 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <XCircle className="h-5 w-5 text-red-600" />
          Debunking Common Myths
        </h3>
        <p className="text-sm text-muted-foreground">
          These "predictors" are fun to guess with, but they have no scientific validity. Only medical tests can reliably determine fetal sex.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Heartbeat rate</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded p-3">
              <p className="font-semibold text-red-900 dark:text-red-100">❌ The claim:</p>
              <p className="text-red-800 dark:text-red-200">A faster fetal heart rate (&gt;140 bpm) means girl; slower means boy.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded p-3">
              <p className="font-semibold text-green-900 dark:text-green-100">✓ The science:</p>
              <p className="text-green-800 dark:text-green-200">Fetal heart rate varies with gestational age and activity. Multiple studies show no correlation with fetal sex.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Belly shape or carrying high/low</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded p-3">
              <p className="font-semibold text-red-900 dark:text-red-100">❌ The claim:</p>
              <p className="text-red-800 dark:text-red-200">Carrying high means girl; low means boy. Round belly means girl; pointed means boy.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded p-3">
              <p className="font-semibold text-green-900 dark:text-green-100">✓ The science:</p>
              <p className="text-green-800 dark:text-green-200">Belly shape is influenced by maternal anatomy, muscle tone, and fetal position—not sex. No medical evidence supports this.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Morning sickness severity</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded p-3">
              <p className="font-semibold text-red-900 dark:text-red-100">❌ The claim:</p>
              <p className="text-red-800 dark:text-red-200">Severe morning sickness means you're having a girl.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded p-3">
              <p className="font-semibold text-green-900 dark:text-green-100">✓ The science:</p>
              <p className="text-green-800 dark:text-green-200">While some studies show slightly higher severe nausea rates with female fetuses, overlap is substantial. Cannot reliably predict sex.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Food cravings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded p-3">
              <p className="font-semibold text-red-900 dark:text-red-100">❌ The claim:</p>
              <p className="text-red-800 dark:text-red-200">Craving sweets means girl; craving salty or savory foods means boy.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded p-3">
              <p className="font-semibold text-green-900 dark:text-green-100">✓ The science:</p>
              <p className="text-green-800 dark:text-green-200">Cravings are influenced by hormones, nutrition, and preferences. No evidence links specific cravings to fetal sex.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Chinese gender chart and lunar calendars</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded p-3">
              <p className="font-semibold text-red-900 dark:text-red-100">❌ The claim:</p>
              <p className="text-red-800 dark:text-red-200">Ancient charts based on lunar age and conception month can predict baby's sex.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded p-3">
              <p className="font-semibold text-green-900 dark:text-green-100">✓ The science:</p>
              <p className="text-green-800 dark:text-green-200">No scientific basis. Studies show ~50% accuracy—same as random chance. Sex is determined by which sperm fertilizes the egg.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <CardTitle className="text-base">Ring test and pendulum methods</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded p-3">
              <p className="font-semibold text-red-900 dark:text-red-100">❌ The claim:</p>
              <p className="text-red-800 dark:text-red-200">Dangling a ring on a string over the belly will swing in circles for girl, back-and-forth for boy.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded p-3">
              <p className="font-semibold text-green-900 dark:text-green-100">✓ The science:</p>
              <p className="text-green-800 dark:text-green-200">This is ideomotor response—unconscious hand movements. No connection to fetal sex. Accuracy is random chance.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-l-amber-500 rounded-r-lg p-6">
        <p className="font-semibold text-foreground mb-2">💡 Bottom line:</p>
        <p className="text-sm text-muted-foreground">These methods can be fun for entertainment, but they have no scientific validity. If you want to know your baby's sex reliably, ultrasound (18-22 weeks), NIPT (10+ weeks), or diagnostic testing are your only proven options.</p>
      </div>
    </div>
  );
}
