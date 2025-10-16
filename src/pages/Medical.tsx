import { Navigation } from "@/components/Navigation";
import Header from "@/components/medical/Header";
import SectionHeader from "@/components/medical/SectionHeader";
import DevelopmentTimeline from "@/components/medical/DevelopmentTimeline";
import TestingMethods from "@/components/medical/TestingMethods";
import TestComparison from "@/components/medical/TestComparison";
import QuestionsForProvider from "@/components/medical/QuestionsForProvider";
import ConditionsAndVariations from "@/components/medical/ConditionsAndVariations";
import InterpretingResults from "@/components/medical/InterpretingResults";
import MedicalMyths from "@/components/medical/MedicalMyths";
import ClinicalPerspective from "@/components/medical/ClinicalPerspective";
import CareTimeline from "@/components/medical/CareTimeline";
import WhenToCall from "@/components/medical/WhenToCall";
import Resources from "@/components/medical/Resources";
import Disclaimer from "@/components/medical/Disclaimer";
import { Seo } from "@/components/Seo";
import { Activity, FileSearch, MessageSquare, AlertTriangle, Stethoscope, Calendar, Heart, BookOpen } from "lucide-react";

export default function Medical() {
  const canonical = `${window.location.origin}/medical`;
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Seo
        title="Medical Information | Prenatal Sex Determination"
        description="Evidence-based overview of ultrasound, NIPT, and diagnostic tests for fetal sex determination, with timelines and questions for your provider."
        canonical={canonical}
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "Medical Information | Prenatal Sex Determination",
          about: "Prenatal sex determination methods and timing",
        }}
      />

      <Navigation />
      <main>
        {/* Introduction */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <Header />
            </div>
          </div>
        </section>

        {/* Section 1: Development Timeline */}
        <section className="bg-secondary/10">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Prenatal Development Timeline"
                description="How and when sex characteristics develop and become visible during pregnancy."
                icon={Activity}
                sectionNumber={1}
              />
              <DevelopmentTimeline />
            </div>
          </div>
        </section>

        {/* Section 2: Testing Methods */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Testing Methods"
                description="Comprehensive overview of screening and diagnostic approaches with accuracy, timing, and clinical context."
                icon={FileSearch}
                sectionNumber={2}
              />
              <TestingMethods />
            </div>
          </div>
        </section>

        {/* Section 3: Test Comparison */}
        <section className="bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Test Comparison"
                description="Side-by-side comparison to help you understand your options at a glance."
                sectionNumber={3}
              />
              <TestComparison />
            </div>
          </div>
        </section>

        {/* Section 4: Understanding Results */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Understanding Your Results"
                description="How results are communicated, what they mean, and your next steps."
                icon={Heart}
                sectionNumber={4}
              />
              <InterpretingResults />
            </div>
          </div>
        </section>

        {/* Section 5: Questions for Provider */}
        <section className="bg-secondary/10">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Questions for Your Provider"
                description="Prepare for your appointments with these thoughtful questions about prenatal testing."
                icon={MessageSquare}
                sectionNumber={5}
              />
              <QuestionsForProvider />
            </div>
          </div>
        </section>

        {/* Section 6: Special Situations */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Special Situations & Variations"
                description="Understanding differences in sex development, chromosomal variations, and when standard determination is challenging."
                icon={AlertTriangle}
                sectionNumber={6}
              />
              <ConditionsAndVariations />
            </div>
          </div>
        </section>

        {/* Section 7: Common Myths */}
        <section className="bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Common Myths"
                description="Fun to guess, but not medically reliable—here's what the science says."
                sectionNumber={7}
              />
              <MedicalMyths />
            </div>
          </div>
        </section>

        {/* Section 8: Clinical Perspective */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Clinical Perspective"
                description="Understanding how and why healthcare providers approach prenatal sex determination."
                icon={Stethoscope}
                sectionNumber={8}
              />
              <ClinicalPerspective />
            </div>
          </div>
        </section>

        {/* Section 9: Care Timeline */}
        <section className="bg-secondary/10">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Pregnancy Care Timeline"
                description="Typical milestones throughout your pregnancy; schedules vary by clinic."
                icon={Calendar}
                sectionNumber={9}
              />
              <CareTimeline />
            </div>
          </div>
        </section>

        {/* Section 10: When to Call & Resources */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <SectionHeader 
                title="Support & Resources"
                description="When to contact your provider and trusted resources for further reading."
                icon={BookOpen}
                sectionNumber={10}
              />
              <div className="space-y-12">
                <WhenToCall />
                <Resources />
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-muted/30">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <Disclaimer />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
