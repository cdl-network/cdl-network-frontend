import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import cdlSampleImage from "@/assets/cdl-sample.png";
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
        <section id="application-form" className="relative py-16 px-4 overflow-hidden bg-[#f0f4f8]">
          {/* Subtle wavy-line pattern - very low contrast */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="subtle-waves" x="0" y="0" width="400" height="60" patternUnits="userSpaceOnUse">
                  <path d="M0 30 Q100 15 200 30 T400 30" fill="none" stroke="#d1d9e0" strokeWidth="1" opacity="0.6"/>
                  <path d="M0 45 Q100 30 200 45 T400 45" fill="none" stroke="#d1d9e0" strokeWidth="0.8" opacity="0.4"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#subtle-waves)" />
            </svg>
          </div>

          {/* CDL License Card - Bottom Left, fixed position */}
          {/* Desktop: ~280px wide, 35% opacity */}
          <img 
            src={cdlSampleImage} 
            alt="" 
            aria-hidden="true"
            className="absolute bottom-8 left-6 w-[280px] opacity-[0.35] pointer-events-none hidden lg:block"
          />
          {/* Mobile/Tablet: smaller (~160px), more faded (20% opacity) */}
          <img 
            src={cdlSampleImage} 
            alt="" 
            aria-hidden="true"
            className="absolute bottom-4 left-4 w-[160px] opacity-[0.20] pointer-events-none block lg:hidden"
          />

          {/* Hand-drawn curved arrow - matching reference with loop */}
          <svg 
            className="absolute bottom-[180px] left-[220px] w-[140px] h-[220px] pointer-events-none hidden lg:block" 
            viewBox="0 0 140 220" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Smooth curved path with loop - matching reference */}
            <path 
              d="M20 210 
                 C 20 180, 25 150, 35 120 
                 C 45 90, 55 70, 65 55 
                 C 75 40, 82 35, 82 45 
                 C 82 55, 72 55, 72 45 
                 C 72 35, 85 30, 95 28 
                 C 105 26, 115 25, 125 24" 
              fill="none" 
              stroke="#1f2937" 
              strokeWidth="3.5" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrow head - angular style matching reference */}
            <path 
              d="M115 16 L128 24 L118 34" 
              fill="none" 
              stroke="#1f2937" 
              strokeWidth="3.5" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Starting dot */}
            <circle cx="20" cy="212" r="5" fill="#1f2937" />
          </svg>
          
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
