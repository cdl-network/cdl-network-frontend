import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, MapPin, Package, Headset } from "lucide-react";
import driversHeroImage from "@/assets/drivers-hero.jpg";
import DriverApplicationQuiz from "@/components/DriverApplicationQuiz";
import DriverFAQ from "@/components/DriverFAQ";

const Drivers = () => {
  useEffect(() => {
    document.title = "CDL Network – Drivers";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${driversHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(11,31,59,0.85)] via-[rgba(11,31,59,0.75)] to-[rgba(11,31,59,0.60)]"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Get CDL Job Matches Today.
              </h1>

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Apply
              </Button>
            </div>
          </div>

          {/* Bottom curved edge for smooth transition */}
          <div className="absolute -bottom-1 left-0 right-0 h-12 overflow-hidden">
            <svg
              viewBox="0 0 1440 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path d="M0 48h1440V24c-240 16-480 24-720 24S240 40 0 24v24z" fill="hsl(var(--muted))" />
            </svg>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="relative py-16 px-4 bg-muted/30 overflow-hidden">
          {/* CDL License Themed Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Security guilloche pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="guilloche" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0 50 Q25 0 50 50 T100 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                  <path d="M0 60 Q25 10 50 60 T100 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                  <path d="M0 40 Q25 -10 50 40 T100 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#guilloche)"/>
            </svg>
            
            {/* License card outline - top right */}
            <svg className="absolute -top-10 -right-10 w-80 h-52 opacity-[0.06] rotate-12" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="312" height="192" rx="12" stroke="currentColor" strokeWidth="2" className="text-primary"/>
              <rect x="20" y="20" width="80" height="100" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
              <line x1="120" y1="30" x2="280" y2="30" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              <line x1="120" y1="50" x2="260" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              <line x1="120" y1="70" x2="240" y2="70" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              <line x1="120" y1="90" x2="200" y2="90" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              <rect x="20" y="140" width="280" height="8" rx="2" fill="currentColor" className="text-primary"/>
              <rect x="20" y="160" width="200" height="6" rx="2" fill="currentColor" className="text-primary"/>
              <text x="220" y="170" fontSize="24" fontWeight="bold" fill="currentColor" className="text-primary">CDL</text>
            </svg>
            
            {/* License card outline - bottom left */}
            <svg className="absolute -bottom-10 -left-10 w-72 h-44 opacity-[0.05] -rotate-6" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="312" height="192" rx="12" stroke="currentColor" strokeWidth="2" className="text-primary"/>
              <rect x="20" y="20" width="80" height="100" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
              <line x1="120" y1="30" x2="280" y2="30" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              <line x1="120" y1="50" x2="260" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              <line x1="120" y1="70" x2="240" y2="70" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              <text x="220" y="170" fontSize="24" fontWeight="bold" fill="currentColor" className="text-primary">CDL</text>
            </svg>

            {/* Subtle star watermark */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.02]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" fill="currentColor" className="text-primary"/>
            </svg>
          </div>
          
          <div className="container mx-auto relative z-10">
            <DriverApplicationQuiz />
          </div>
        </section>

        {/* FAQ Section */}
        <DriverFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Drivers;
