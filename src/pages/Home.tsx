import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import babyBoyImg from "@/assets/baby-boy-full.png";
import babyGirlImg from "@/assets/baby-girl-full.png";
import { Calendar, Baby, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <header className="container mx-auto px-4 py-8 pt-24 relative">
        <Button variant="ghost" size="icon" asChild className="absolute top-8 right-4">
          <Link to="/about" aria-label="About">
            <Info className="h-5 w-5" />
          </Link>
        </Button>

        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary from-5% via-primary/50 via-30% to-accent bg-clip-text text-transparent drop-shadow-lg">
            Baby Gender Planner
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your conception dates or predict your future baby's gender
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-0 pb-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-3 mb-12">
            <span className="text-base font-bold tracking-wider uppercase bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">
              Choose Your Method
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="group shadow-xl border-2 border-primary/40 bg-gradient-to-br from-card via-card to-primary/5 md:hover:shadow-2xl md:hover:border-primary/70 md:hover:-translate-y-3 transition-all duration-500 md:hover:scale-[1.03] rounded-2xl">
              <CardHeader>
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-4 md:group-hover:scale-110 transition-transform shadow-lg">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  Plan
                </CardTitle>
                <CardDescription className="text-base">
                  Not pregnant yet? Find the best dates to try for your desired baby gender.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Calendar heatmap of optimal months
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Top 6 recommended dates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Detailed cycle analysis
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground transition-all duration-500 md:hover:scale-105 md:hover:shadow-2xl md:hover:from-primary/90 md:hover:to-primary shadow-lg rounded-xl"
                  size="lg"
                >
                  <Link to="/plan">Start Planning</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group shadow-xl border-2 border-accent/40 bg-gradient-to-br from-card via-card to-accent/5 md:hover:shadow-2xl md:hover:border-accent/70 md:hover:-translate-y-3 transition-all duration-500 md:hover:scale-[1.03] rounded-2xl">
              <CardHeader>
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center mb-4 md:group-hover:scale-110 transition-transform shadow-lg">
                  <Baby className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-2xl text-accent">
                  Predict
                </CardTitle>
                <CardDescription className="text-base">
                  Already pregnant? Estimate the probability of boy vs girl based on conception date.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                    Use conception or due date
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                    Probability breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                    Conception window analysis
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground transition-all duration-500 md:hover:scale-105 md:hover:shadow-2xl md:hover:from-accent/90 md:hover:to-accent shadow-lg rounded-xl"
                  size="lg"
                >
                  <Link to="/predict">Get Prediction</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <section className="pt-32">
            <div className="flex items-center justify-center gap-12 mb-16">
              <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
                <div className="p-4 bg-gradient-to-br from-boy/20 to-boy/5 rounded-3xl shadow-sm">
                  <img src={babyBoyImg} alt="Baby Boy" className="w-56 h-56 md:w-72 md:h-72 object-contain rounded-2xl" />
                </div>
                <span className="text-xl font-bold text-boy mt-4">Boy</span>
              </div>
              <span className="text-3xl font-bold text-accent">vs</span>
              <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
                <div className="p-4 bg-gradient-to-br from-girl/20 to-girl/5 rounded-3xl shadow-sm">
                  <img src={babyGirlImg} alt="Baby Girl" className="w-56 h-56 md:w-72 md:h-72 object-contain rounded-2xl" />
                </div>
                <span className="text-xl font-bold text-girl mt-4">Girl</span>
              </div>
            </div>
          </section>

          <div className="text-center pb-24">
            <Button variant="ghost" asChild>
              <Link to="/about" className="text-muted-foreground md:hover:text-primary-foreground">
                Learn how it works →
              </Link>
            </Button>
          </div>

        </div>
      </main>
      <footer className="mt-auto container mx-auto px-4 pb-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-muted-foreground/20 bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-sm mb-2">Important Disclaimer</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This tool is based on traditional folklore methods. Even though this tool can produce correct results, 
                it is not scientifically validated and should not be used for medical decisions or family planning. 
                Always consult healthcare professionals for medical advice.
              </p>
            </CardContent>
          </Card>
        </div>
      </footer>
    </div>
  );
}
