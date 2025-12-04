import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import carriersHeroImage from "@/assets/carriers-2.jpg";
import carriersImage from "@/assets/carriers-1.jpg";

import { HardHat, Clock, MapPin } from "lucide-react";

// Why Carriers Choose Us Section
const WhyCarriersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: HardHat,
      title: "Pre-screened CDL-A drivers",
      description:
        "Every driver is vetted for experience, safety record, and reliability before we make an introduction.",
    },
    {
      icon: Clock,
      title: "Faster onboarding, lower turnover",
      description: "Quality matches mean drivers stay longer. Reduce your hiring cycle and keep seats filled.",
    },
    {
      icon: MapPin,
      title: "Drivers who fit your lanes",
      description: "We match based on preferred routes, home time, and equipment — not just availability.",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 px-4 overflow-hidden bg-background">
      {/* Enhanced logistics background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-foreground" />
            </pattern>
            <pattern id="routeLines" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <path
                d="M0 150 Q 75 100, 150 150 T 300 150"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="text-foreground"
              />
              <path
                d="M0 75 Q 100 50, 200 75 T 300 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="text-foreground"
              />
              <path
                d="M0 225 Q 50 200, 100 225 T 200 210 T 300 230"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeDasharray="3 6"
                className="text-foreground"
              />
              {/* Additional route dots */}
              <circle cx="75" cy="125" r="3" fill="currentColor" className="text-foreground" opacity="0.5" />
              <circle cx="225" cy="175" r="2" fill="currentColor" className="text-foreground" opacity="0.4" />
              <circle cx="150" cy="100" r="2.5" fill="currentColor" className="text-foreground" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
          <rect width="100%" height="100%" fill="url(#routeLines)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2
          className={`text-2xl md:text-3xl font-bold text-foreground text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Why carriers choose us
        </h2>

        {/* Cards container with connector */}
        <div className="relative">
          {/* Connector line between cards - desktop only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0 px-16">
            <svg className="w-full h-8" viewBox="0 0 100 10" preserveAspectRatio="none">
              {/* Main connector line with draw animation */}
              <line
                x1="8"
                y1="5"
                x2="92"
                y2="5"
                stroke="hsl(var(--accent))"
                strokeWidth="0.3"
                strokeDasharray="100"
                strokeDashoffset={isVisible ? "0" : "100"}
                className="transition-all duration-1500 ease-out"
                style={{ transitionDelay: "400ms" }}
              />
              {/* Pulsing nodes */}
              <circle
                cx="8"
                cy="5"
                r="1.2"
                fill="hsl(var(--accent))"
                className={`${isVisible ? "animate-pulse" : "opacity-0"}`}
                style={{ animationDuration: "2s" }}
              />
              <circle
                cx="50"
                cy="5"
                r="1.2"
                fill="hsl(var(--accent))"
                className={`${isVisible ? "animate-pulse" : "opacity-0"}`}
                style={{ animationDuration: "2s", animationDelay: "0.5s" }}
              />
              <circle
                cx="92"
                cy="5"
                r="1.2"
                fill="hsl(var(--accent))"
                className={`${isVisible ? "animate-pulse" : "opacity-0"}`}
                style={{ animationDuration: "2s", animationDelay: "1s" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md shadow-black/5 
                  transition-all duration-500 ease-out cursor-default
                  hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 hover:border-accent/20
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: isVisible ? `${150 + index * 150}ms` : "0ms",
                }}
              >
                {/* Icon with micro-motion */}
                <div
                  className={`mb-5 transition-all duration-700 ease-out ${
                    isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
                  }}
                >
                  <div
                    className={`inline-block ${isVisible ? "animate-float" : ""}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <benefit.icon className="w-10 h-10 text-accent stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-accent">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero Section Component with animations
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY * 0.08);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative px-4 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out scale-110"
        style={{
          backgroundImage: `url(${carriersHeroImage})`,
          transform: `translateY(${scrollY}px) scale(1.1)`,
        }}
      />

      {/* Main Gradient Overlay - stronger for readability */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background:
            "linear-gradient(135deg, rgba(11, 31, 59, 0.92) 0%, rgba(11, 31, 59, 0.75) 50%, rgba(11, 31, 59, 0.85) 100%)",
          opacity: isVisible ? 1 : 0.7,
        }}
      />

      {/* Animated accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -left-20 w-96 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
          style={{ transitionDelay: "600ms" }}
        />
        <div
          className={`absolute top-1/3 -right-20 w-80 h-px bg-gradient-to-l from-transparent via-accent/30 to-transparent transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
          style={{ transitionDelay: "800ms" }}
        />
        <div
          className={`absolute bottom-1/3 -left-10 w-64 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
          style={{ transitionDelay: "1000ms" }}
        />
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/20 rounded-full animate-float ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content - centered with strong presence */}
      <div className="container mx-auto max-w-4xl text-center relative z-10 py-20">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: "200ms",
            textShadow: "0 4px 30px rgba(0,0,0,0.4)",
          }}
        >
          Find Qualified CDL-A Drivers
        </h1>

        <div
          className={`mb-10 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            onClick={() => document.getElementById('carrier-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Drivers
          </Button>
        </div>

        {/* Trust indicators */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-10 text-white/70 text-sm transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <span className="flex items-center gap-2">
            <HardHat className="w-4 h-4 text-accent" />
            Pre-screened drivers
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            Fast placement
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Route-matched
          </span>
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
          <path d="M0 48h1440V24c-240 16-480 24-720 24S240 40 0 24v24z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

// Find Your Next Driver Section with scroll animation
const FindNextDriverSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">Find Your Next Driver</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fill out the inquiry form below. We'll match you with qualified CDL-A drivers who meet your operational
              needs and company culture.
            </p>
          </div>

          {/* Image */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="relative group">
              {/* Decorative background element */}
              <div
                className="absolute -inset-4 bg-accent/10 rounded-3xl -z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ transform: isVisible ? "rotate(-2deg)" : "rotate(0deg)" }}
              />
              <img
                src={carriersImage}
                alt="Professional truck fleet"
                className="w-full h-auto object-cover rounded-2xl shadow-xl shadow-black/15 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Carriers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    contact_name: "",
    company_name: "",
    phone: "",
    email: "",
    fleet_size: "",
    lane_type: "",
    hiring_needs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        lead_type: "carrier",
        contact_name: formData.contact_name,
        company_name: formData.company_name,
        phone: formData.phone,
        email: formData.email,
        fleet_size: formData.fleet_size,
        lane_type: formData.lane_type,
        hiring_needs: formData.hiring_needs,
      };

      const response = await fetch("https://cdlnetworkllc.vercel.app/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Thank you, we'll reach out shortly!" });
        setFormData({
          contact_name: "",
          company_name: "",
          phone: "",
          email: "",
          fleet_size: "",
          lane_type: "",
          hiring_needs: "",
        });
      } else {
        throw new Error("Server returned non-200 response");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({ type: "error", message: "Something went wrong, please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="CDL Network – Find CDL-A Drivers"
        description="Find pre-screened CDL-A drivers for your fleet. Faster onboarding, lower turnover, drivers matched to your lanes and routes."
        canonicalUrl="https://www.cdlnetworkllc.com/carriers"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Why Carriers Choose Us Section */}
        <WhyCarriersSection />

        {/* Find Your Next Driver Section */}
        <FindNextDriverSection />

        {/* Inquiry Form Section */}
        <section id="carrier-form" className="py-16 px-4 pt-0">
          <div className="container mx-auto max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8 shadow-sm">
              {submitStatus && (
                <div
                  className={`p-4 rounded-md ${submitStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Contact Name *</Label>
                  <Input
                    id="name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    placeholder="+1 312 555 8899"
                    title="Use a US-style number such as: +1 312 555 8899"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fleetSize">Fleet Size *</Label>
                  <Select
                    name="fleet_size"
                    value={formData.fleet_size}
                    onValueChange={(value) => setFormData({ ...formData, fleet_size: value })}
                    required
                  >
                    <SelectTrigger id="fleetSize">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1_10_trucks">1-10 trucks</SelectItem>
                      <SelectItem value="11_50_trucks">11-50 trucks</SelectItem>
                      <SelectItem value="51_200_trucks">51-200 trucks</SelectItem>
                      <SelectItem value="200_plus_trucks">200+ trucks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="laneType">Lane Type</Label>
                  <Input
                    id="laneType"
                    name="lane_type"
                    placeholder="e.g., Regional, OTR, Dedicated"
                    value={formData.lane_type}
                    onChange={(e) => setFormData({ ...formData, lane_type: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hiringNeeds">Hiring Needs *</Label>
                <Textarea
                  id="hiringNeeds"
                  name="hiring_needs"
                  required
                  placeholder="Tell us about your current hiring needs, number of drivers, experience requirements, etc."
                  value={formData.hiring_needs}
                  onChange={(e) => setFormData({ ...formData, hiring_needs: e.target.value })}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isSubmitting ? "Submitting..." : "Get Drivers"}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Carriers;
