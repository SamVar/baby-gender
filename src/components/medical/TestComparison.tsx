import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, DollarSign, Shield } from "lucide-react";

export default function TestComparison() {
  return (
    <section className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold">Test comparison at a glance</h2>
        <p className="text-muted-foreground">Side-by-side comparison to help you understand your options.</p>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Test</TableHead>
              <TableHead>Timing</TableHead>
              <TableHead>Primary Purpose</TableHead>
              <TableHead>Sex Accuracy</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead>Results</TableHead>
              <TableHead>Cost Range</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Routine Ultrasound
                <div className="text-xs text-muted-foreground mt-1">18–22 weeks</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span className="text-sm">Second trimester</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">Anatomy scan—assess fetal development</TableCell>
              <TableCell>
                <Badge variant="default" className="bg-blue-500">95–99%</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span className="text-sm">None known</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">Same day</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  <span className="text-sm">Usually covered</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                NIPT / Cell-free DNA
                <div className="text-xs text-muted-foreground mt-1">≥10 weeks</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span className="text-sm">First trimester</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">Screen for chromosomal conditions</TableCell>
              <TableCell>
                <Badge variant="default" className="bg-green-600">&gt;99%</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span className="text-sm">None (blood draw)</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">7–14 days</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  <span className="text-sm">$0–$500+</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                CVS
                <div className="text-xs text-muted-foreground mt-1">10–13 weeks</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span className="text-sm">First trimester</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">Diagnose chromosomal/genetic conditions</TableCell>
              <TableCell>
                <Badge variant="default" className="bg-emerald-600">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Definitive
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-amber-600">~0.2–0.3% loss</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">7–14 days</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  <span className="text-sm">$1,500–$3,000+</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                Amniocentesis
                <div className="text-xs text-muted-foreground mt-1">15–20 weeks</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span className="text-sm">Second trimester</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">Diagnose chromosomal/genetic conditions</TableCell>
              <TableCell>
                <Badge variant="default" className="bg-emerald-600">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Definitive
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-amber-600">~0.1–0.3% loss</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">7–14 days</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  <span className="text-sm">$1,500–$3,500+</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                Commercial Blood Test
                <div className="text-xs text-muted-foreground mt-1">6–10 weeks</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span className="text-sm">Early first</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">Entertainment/curiosity (non-medical)</TableCell>
              <TableCell>
                <Badge variant="outline" className="border-gray-400">Variable</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span className="text-sm">None (blood draw)</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">5–10 days</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  <span className="text-sm">$50–$200</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                3D/4D Ultrasound
                <div className="text-xs text-muted-foreground mt-1">24–34 weeks</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span className="text-sm">Late second/third</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">Keepsake photos/videos (non-medical)</TableCell>
              <TableCell>
                <Badge variant="outline" className="border-gray-400">Same as 2D</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span className="text-sm">Low risk</span>
                </div>
              </TableCell>
              <TableCell className="text-sm">Same day</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  <span className="text-sm">$100–$300+</span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div className="text-sm text-muted-foreground space-y-2 border-l-4 border-l-blue-500 pl-4 py-2">
        <p className="font-medium text-foreground">How to use this table:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Screening tests</strong> (ultrasound, NIPT) provide information about likelihood—they are not diagnostic.</li>
          <li><strong>Diagnostic tests</strong> (CVS, amniocentesis) provide definitive chromosomal information but carry small procedural risks.</li>
          <li><strong>Commercial/elective tests</strong> are not intended for medical decisions and have variable accuracy.</li>
          <li>Discuss timing, costs, and risks with your provider to make informed choices for your pregnancy.</li>
        </ul>
      </div>
    </section>
  );
}
