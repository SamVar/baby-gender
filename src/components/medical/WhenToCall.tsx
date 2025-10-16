import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhenToCall() {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="h-5 w-5 text-destructive" />
        <h3 className="text-xl font-semibold">When to contact your provider</h3>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Get medical advice promptly if:</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>A screening test raises concerns and you want to understand next steps</li>
            <li>You feel anxious about results and would like counseling</li>
            <li>You need help coordinating genetic counseling or diagnostic testing</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
