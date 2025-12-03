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
        <section id="application-form" className="relative py-16 px-4 overflow-hidden">
          {/* CDL License Themed Background - Bold & Eye-catching */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Base gradient - inspired by license blue */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B]/5 via-muted/40 to-[#1a4a7a]/10" />
            
            {/* Top decorative band - like license header */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" />
            
            {/* Wavy security lines pattern */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="security-waves" x="0" y="0" width="200" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20 Q50 0 100 20 T200 20" fill="none" stroke="#0B1F3B" strokeWidth="1" opacity="0.08"/>
                  <path d="M0 25 Q50 5 100 25 T200 25" fill="none" stroke="#0B1F3B" strokeWidth="0.5" opacity="0.06"/>
                  <path d="M0 15 Q50 -5 100 15 T200 15" fill="none" stroke="#0B1F3B" strokeWidth="0.5" opacity="0.06"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#security-waves)"/>
            </svg>
            
            {/* Large gold star - top right */}
            <svg className="absolute -top-16 -right-16 w-64 h-64 opacity-[0.12]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" fill="#F5A623"/>
            </svg>
            
            {/* CDL Badge - bottom left */}
            <div className="absolute bottom-8 left-8 hidden md:block">
              <svg className="w-32 h-20 opacity-20" viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="116" height="66" rx="8" fill="none" stroke="#0B1F3B" strokeWidth="3"/>
                <rect x="8" y="8" width="104" height="54" rx="5" fill="none" stroke="#0B1F3B" strokeWidth="1.5" strokeDasharray="4 2"/>
                <text x="60" y="45" fontSize="28" fontWeight="bold" fill="#0B1F3B" textAnchor="middle" fontFamily="Arial Black, sans-serif">CDL</text>
              </svg>
            </div>
            
            {/* License card silhouette - right side */}
            <svg className="absolute top-1/2 -right-20 -translate-y-1/2 w-80 h-52 opacity-[0.08] rotate-6" viewBox="0 0 340 210" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="332" height="202" rx="12" fill="#0B1F3B" fillOpacity="0.3" stroke="#0B1F3B" strokeWidth="2"/>
              {/* Header bar */}
              <rect x="4" y="4" width="332" height="40" rx="12" fill="#0B1F3B" fillOpacity="0.5"/>
              {/* Photo placeholder */}
              <rect x="20" y="55" width="85" height="105" rx="4" fill="#0B1F3B" fillOpacity="0.3"/>
              {/* Text lines */}
              <rect x="120" y="60" width="180" height="8" rx="2" fill="#0B1F3B" fillOpacity="0.4"/>
              <rect x="120" y="80" width="140" height="6" rx="2" fill="#0B1F3B" fillOpacity="0.3"/>
              <rect x="120" y="100" width="160" height="6" rx="2" fill="#0B1F3B" fillOpacity="0.3"/>
              <rect x="120" y="120" width="100" height="6" rx="2" fill="#0B1F3B" fillOpacity="0.3"/>
              {/* Signature line */}
              <path d="M20 180 Q60 170 100 180 T180 175" fill="none" stroke="#0B1F3B" strokeWidth="2" opacity="0.4"/>
              {/* Star */}
              <polygon points="300,25 305,35 316,35 307,42 311,52 300,45 289,52 293,42 284,35 295,35" fill="#F5A623" opacity="0.8"/>
            </svg>
            
            {/* Small floating stars */}
            <svg className="absolute top-20 left-[15%] w-8 h-8 opacity-20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,2 14,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 10,9" fill="#F5A623"/>
            </svg>
            <svg className="absolute bottom-32 right-[25%] w-6 h-6 opacity-15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,2 14,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 10,9" fill="#F5A623"/>
            </svg>
            
            {/* Bottom decorative band */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />
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
