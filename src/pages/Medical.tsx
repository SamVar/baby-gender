import { Navigation } from "@/components/Navigation";
import Header from "@/components/medical/Header";
import DevelopmentTimeline from "@/components/medical/DevelopmentTimeline";
import TestingMethods from "@/components/medical/TestingMethods";
import QuestionsForProvider from "@/components/medical/QuestionsForProvider";
import ConditionsAndVariations from "@/components/medical/ConditionsAndVariations";
import MedicalMyths from "@/components/medical/MedicalMyths";
import CareTimeline from "@/components/medical/CareTimeline";
import WhenToCall from "@/components/medical/WhenToCall";
import Resources from "@/components/medical/Resources";
import Disclaimer from "@/components/medical/Disclaimer";
import { Seo } from "@/components/Seo";

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
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <Header />
          <DevelopmentTimeline />
          <TestingMethods />
          <QuestionsForProvider />
          <ConditionsAndVariations />
          <MedicalMyths />
          <CareTimeline />
          <WhenToCall />
          <Resources />
          <Disclaimer />
        </div>
      </main>
    </div>
  );
}
