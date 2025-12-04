import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import cdlSampleImage from "@/assets/cdl-sample.png";
import driversHeroImage from "@/assets/drivers-hero.jpg";
import DriverApplicationQuiz from "@/components/DriverApplicationQuiz";
import DriverFAQ from "@/components/DriverFAQ";
import SEOHead from "@/components/SEOHead";

const Drivers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="CDL Network – Apply for Trucking Jobs"
        description="Apply for CDL-A trucking jobs free. Get matched with vetted U.S. carriers. Fast placement, no spam, route-matched positions."
        canonicalUrl="https://www.cdlnetworkllc.com/drivers"
      />
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
                  <path d="M0 30 Q100 15 200 30 T400 30" fill="none" stroke="#d1d9e0" strokeWidth="1" opacity="0.6" />
                  <path d="M0 45 Q100 30 200 45 T400 45" fill="none" stroke="#d1d9e0" strokeWidth="0.8" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#subtle-waves)" />
            </svg>
          </div>

          {/* CDL License Card - Bottom Left */}
          {/* Desktop: ~300px wide, higher opacity */}
          <OptimizedImage
            src={cdlSampleImage}
            alt=""
            aria-hidden={true}
            className="absolute bottom-2 left-4 w-[300px] opacity-75 blur-[0.5px] pointer-events-none hidden lg:block select-none"
            style={{ zIndex: 1 }}
          />
          {/* Mobile/Tablet: smaller (~140px) */}
          <OptimizedImage
            src={cdlSampleImage}
            alt=""
            aria-hidden={true}
            className="absolute bottom-2 left-2 w-[140px] opacity-[0.45] pointer-events-none block lg:hidden select-none"
            style={{ zIndex: 1 }}
          />

          {/* Hand-drawn curved arrow with loop - Desktop */}
          <svg
            className="absolute bottom-[160px] left-[200px] w-[180px] h-[280px] pointer-events-none hidden lg:block select-none"
            viewBox="0 0 180 280"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 2, opacity: 0.45 }}
          >
            {/* Curved path starting from dot, sweeping up with a loop */}
            <path
              d="M25 265 
                 Q 30 220, 40 180 
                 Q 50 140, 70 105 
                 Q 85 75, 95 60 
                 Q 105 45, 100 35 
                 Q 95 25, 85 30 
                 Q 75 35, 80 45 
                 Q 85 55, 100 50 
                 Q 115 45, 130 38 
                 Q 145 31, 160 25"
              fill="none"
              stroke="#374151"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrow head pointing toward quiz card */}
            <path
              d="M150 18 L163 25 L152 35"
              fill="none"
              stroke="#374151"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Starting dot at bottom */}
            <circle cx="25" cy="268" r="4" fill="#374151" />
          </svg>

          {/* Hand-drawn curved arrow - Mobile/Tablet (scaled down) */}
          <svg
            className="absolute bottom-[100px] left-[100px] w-[100px] h-[160px] pointer-events-none block lg:hidden select-none"
            viewBox="0 0 180 280"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 2, opacity: 0.3 }}
          >
            <path
              d="M25 265 
                 Q 30 220, 40 180 
                 Q 50 140, 70 105 
                 Q 85 75, 95 60 
                 Q 105 45, 100 35 
                 Q 95 25, 85 30 
                 Q 75 35, 80 45 
                 Q 85 55, 100 50 
                 Q 115 45, 130 38 
                 Q 145 31, 160 25"
              fill="none"
              stroke="#374151"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M150 18 L163 25 L152 35"
              fill="none"
              stroke="#374151"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="25" cy="268" r="5" fill="#374151" />
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
