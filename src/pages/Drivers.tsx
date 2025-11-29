import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, MapPin, Heart, Phone } from "lucide-react";
import driversHeroImage from "@/assets/drivers-hero.jpg";
import DriverApplicationQuiz from "@/components/DriverApplicationQuiz";

const Drivers = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[70vh] flex items-center justify-center px-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${driversHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(11,31,59,0.85)] via-[rgba(11,31,59,0.75)] to-[rgba(11,31,59,0.60)] animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Get CDL Job Matches Today — Free & Fast.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl">
                No BS. No spam. Just real trucking jobs that fit your life.
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Matches
              </Button>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-4">
                <span className="text-white/90 text-sm flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
                  Free for Drivers
                </span>
                <span className="text-white/90 text-sm flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
                  Private & Secure
                </span>
                <span className="text-white/90 text-sm flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
                  Vetted Carriers Only
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-10 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6">
              <div className="flex flex-col items-center text-center space-y-1.5">
                <Clock className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Fast Placement</span>
                <p className="text-xs text-muted-foreground">Get matched quickly</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1.5">
                <DollarSign className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Stronger Pay</span>
                <p className="text-xs text-muted-foreground">Better compensation</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1.5">
                <MapPin className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Route Choice</span>
                <p className="text-xs text-muted-foreground">Pick your lanes</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1.5">
                <Heart className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Free for Drivers</span>
                <p className="text-xs text-muted-foreground">No cost to apply</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1.5 col-span-2 md:col-span-1">
                <Phone className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Human Support</span>
                <p className="text-xs text-muted-foreground">Real people helping</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">Start Your Application</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Answer a few quick questions and we'll connect you with carriers that match your needs.
              </p>
            </div>
            <DriverApplicationQuiz />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Drivers;
