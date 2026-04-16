import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import cdlSampleImage from "@/assets/cdl-sample.png";
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
        {/* ================= HERO SECTION ================= */}
        <section
          className="relative min-h-[calc(100vh-80px)] flex items-center px-4 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              'url("/lovable-uploads/d1b5c35d-044c-41f0-a459-6f757fb38537.webp")'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(11,31,59,0.85)] via-[rgba(11,31,59,0.75)] to-[rgba(11,31,59,0.60)]"></div>

          <div className="container mx-auto max-w-7xl relative z-10 py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* LEFT: CALLRAIL FORM */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="max-w-[420px] mx-auto lg:mx-0">
                  <div id="cr-form-FOR019d90ea28ff78689699f68080fe28fa"></div>
                </div>
              </div>

              {/* RIGHT: COPY (UNCHANGED) */}
              <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
                <div className="max-w-3xl mx-auto lg:mx-0">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Get CDL Job Matches Today.
                  </h1>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom curved edge */}
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg
              viewBox="0 0 1440 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 64h1440V32c-240 20-480 32-720 32S240 52 0 32v32z"
                fill="hsl(var(--muted))"
              />
            </svg>
          </div>
        </section>

        {/* ================= APPLICATION SECTION ================= */}
        <section id="application-form" className="relative py-16 px-4 overflow-hidden bg-[#f0f4f8]">

          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="subtle-waves" width="400" height="60" patternUnits="userSpaceOnUse">
                  <path d="M0 30 Q100 15 200 30 T400 30" fill="none" stroke="#d1d9e0" strokeWidth="1" opacity="0.6"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#subtle-waves)" />
            </svg>
          </div>

          <OptimizedImage
            src={cdlSampleImage}
            alt=""
            aria-hidden={true}
            className="absolute bottom-2 left-4 w-[300px] opacity-75 pointer-events-none hidden lg:block"
          />

          <div className="container mx-auto relative z-10">
            <DriverApplicationQuiz />
          </div>
        </section>

        {/* FAQ */}
        <DriverFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Drivers;
