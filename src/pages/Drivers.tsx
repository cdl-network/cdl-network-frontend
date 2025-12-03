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
        <section id="application-form" className="relative py-16 px-4 overflow-hidden bg-[#e8eef4]">
          {/* Wavy background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wavy-lines" x="0" y="0" width="100%" height="50" patternUnits="userSpaceOnUse">
                  <path d="M0 25 Q250 10 500 25 T1000 25 T1500 25 T2000 25" fill="none" stroke="#c5d3e0" strokeWidth="1.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wavy-lines)" />
            </svg>
          </div>

          {/* Gold accent in top right corner */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-30 hidden md:block">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M200 0 L200 100 Q150 80 100 100 L0 0 Z" fill="#F5A623" opacity="0.4" />
            </svg>
          </div>

          {/* Small gold star accent - bottom right */}
          <svg className="absolute bottom-20 right-[15%] w-6 h-6 opacity-30 hidden md:block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12,2 14,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 10,9" fill="#F5A623"/>
          </svg>

          {/* CDL License Card - Bottom Left */}
          <div className="absolute bottom-8 left-8 hidden lg:block">
            <img 
              src={cdlSampleImage} 
              alt="CDL License Example" 
              className="w-64 rounded-lg shadow-lg border-2 border-white/50 opacity-90"
            />
          </div>

          {/* Curly Arrow pointing from license to form */}
          <svg 
            className="absolute bottom-48 left-72 w-32 h-48 hidden lg:block" 
            viewBox="0 0 100 150" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 140 Q15 100 30 80 Q50 50 45 30 Q42 15 55 10" 
              fill="none" 
              stroke="#4a5568" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {/* Arrow head */}
            <polygon points="55,0 65,12 52,15" fill="#4a5568" />
            {/* Loop in the arrow */}
            <circle cx="38" cy="55" r="8" fill="none" stroke="#4a5568" strokeWidth="3" />
          </svg>

          {/* CDL Badge - very bottom left corner */}
          <div className="absolute bottom-4 left-4 hidden md:block lg:hidden">
            <svg className="w-24 h-16 opacity-40" viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="116" height="66" rx="8" fill="none" stroke="#4a5568" strokeWidth="2"/>
              <rect x="8" y="8" width="104" height="54" rx="5" fill="none" stroke="#4a5568" strokeWidth="1" strokeDasharray="4 2"/>
              <text x="60" y="45" fontSize="24" fontWeight="bold" fill="#4a5568" textAnchor="middle" fontFamily="Arial, sans-serif">CDL</text>
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
