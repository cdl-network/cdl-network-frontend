import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import carriersHeroImage from "@/assets/carriers-2.jpg";
import carriersImage from "@/assets/carriers-1.jpg";

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
          setScrollY(window.scrollY * 0.3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative py-20 md:py-28 px-4 overflow-hidden min-h-[340px] md:min-h-[400px] flex items-center"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out scale-105"
        style={{ 
          backgroundImage: `url(${carriersHeroImage})`,
          transform: `translateY(${scrollY}px) scale(1.05)`
        }}
      />
      
      {/* Gradient Overlay with subtle animation */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ 
          background: 'linear-gradient(135deg, rgba(11, 31, 59, 0.85) 0%, rgba(11, 31, 59, 0.50) 100%)',
          opacity: isVisible ? 1 : 0.7
        }}
      />
      
      {/* Subtle animated particles/dots overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div 
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ top: '20%', left: '15%', animationDelay: '0s', animationDuration: '3s' }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-white rounded-full animate-pulse"
          style={{ top: '60%', left: '80%', animationDelay: '1s', animationDuration: '4s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ top: '75%', left: '25%', animationDelay: '2s', animationDuration: '3.5s' }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-white rounded-full animate-pulse"
          style={{ top: '30%', left: '70%', animationDelay: '0.5s', animationDuration: '4.5s' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Carrier Inquiry
        </h1>
        <p 
          className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Looking for reliable, pre-screened CDL-A drivers? We deliver quality matches — not just resumes. Tell us
          what you need and we'll connect you with drivers who fit.
        </p>
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
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Inquiry Form Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold text-foreground mb-4">Find Your Next Driver</h2>
                <p className="text-muted-foreground">
                  Fill out the inquiry form below. We'll match you with qualified CDL-A drivers who meet your
                  operational needs and company culture.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={carriersImage}
                  alt="Professional truck fleet"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

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