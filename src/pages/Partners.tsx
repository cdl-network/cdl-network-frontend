import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import PartnersLogoSection from "@/components/PartnersLogoSection";
import {
  Truck,
  Users,
  GraduationCap,
  Megaphone,
  Briefcase,
  UserCheck,
  ClipboardList,
  Search,
  DollarSign,
} from "lucide-react";
import heroImage from "@/assets/partners-hero.webp";

// Partner logos
import pixelfreightIcon from "@/assets/partners/pixelfreight-icon.png";
import proDriverSchoolLogo from "@/assets/partners/pro-driver-school.jpg";
import commercialRigsLogo from "@/assets/partners/commercial-rigs.jpg";
import eagleLineHaulLogo from "@/assets/partners/eagle-line-haul.jpg";
import redMechanicLogo from "@/assets/partners/red-mechanic.jpg";

const Partners = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    console.log("Partner form:", formData);
  };

  const scrollToForm = () => {
    document.getElementById("partner-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const partnerTypes = [
    {
      icon: Truck,
      title: "Owner-Operators",
      description: "Know drivers looking for better runs.",
    },
    {
      icon: UserCheck,
      title: "CDL-A Drivers",
      description: "Refer friends from your network.",
    },
    {
      icon: Users,
      title: "Fleet Dispatchers",
      description: "Share leads from your daily driver conversations.",
    },
    {
      icon: GraduationCap,
      title: "CDL Schools & Trainers",
      description: "Send new grads who want real opportunities.",
    },
    {
      icon: Megaphone,
      title: "Logistics Influencers",
      description: "Monetize your audience without pushing random offers.",
    },
    {
      icon: Briefcase,
      title: "Recruiting Agencies",
      description: "Add extra revenue with minimal effort.",
    },
  ];

  const steps = [
    {
      number: "1",
      icon: ClipboardList,
      title: "Submit a driver referral",
      description: "Leave their name and contact info — takes under a minute.",
    },
    {
      number: "2",
      icon: Search,
      title: "We screen & match them",
      description: "We handle the conversations, paperwork, and placement.",
    },
    {
      number: "3",
      icon: DollarSign,
      title: "You get paid after 3 months",
      description: "If the driver stays for 90 days, you receive your $100 bonus.",
    },
  ];

  const partners = [
    {
      name: "Pixelfreight",
      logo: pixelfreightIcon,
      url: "https://pixelfreight.com",
      isIconWithText: true,
    },
    {
      name: "Pro Driver School",
      logo: proDriverSchoolLogo,
      url: "https://prodriverschool.com",
      isCompact: false,
    },
    {
      name: "Commercial Rigs",
      logo: commercialRigsLogo,
      url: "https://commercialrigs.com",
      isCompact: false,
    },
    {
      name: "Eagle Line Haul",
      logo: eagleLineHaulLogo,
      url: "https://eaglelinehaul.com",
      isCompact: false,
    },
    {
      name: "Red Mechanic",
      logo: redMechanicLogo,
      url: "https://redmechanic.app/",
      isCompact: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="CDL Network – Partner With Us"
        description="Refer qualified CDL-A drivers and earn $100 per successful placement. Join CDL Network's partner program today."
        canonicalUrl="https://www.cdlnetworkllc.com/partners"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(11, 31, 59, 0.92) 0%, rgba(11, 31, 59, 0.75) 50%, rgba(11, 31, 59, 0.85) 100%)",
            }}
          />

          <div className="relative z-10 container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Partner With CDL Network
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
              Refer qualified CDL-A drivers. Earn payouts. Zero complexity.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold px-8 py-6 text-lg transition-all hover:-translate-y-1 hover:shadow-lg animate-fade-in"
            >
              Become a Partner
            </Button>
          </div>

          {/* Bottom curved edge for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg
              viewBox="0 0 1440 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path d="M0 64h1440V32c-240 20-480 32-720 32S240 52 0 32v32z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Who Can Become a Partner */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Who Can Become a Partner
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerTypes.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "hsl(var(--brand-orange) / 0.1)" }}
                  >
                    <partner.icon className="w-6 h-6" style={{ color: "hsl(var(--brand-orange))" }} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{partner.title}</h3>
                  <p className="text-muted-foreground">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Connector line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange))/0.3]" />
                  )}

                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    style={{ backgroundColor: "hsl(var(--brand-orange) / 0.1)" }}
                  >
                    <span
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: "hsl(var(--brand-orange))" }}
                    >
                      {step.number}
                    </span>
                    <step.icon className="w-10 h-10" style={{ color: "hsl(var(--brand-orange))" }} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Representation */}
        <PartnersLogoSection partners={partners} onPartnerClick={scrollToForm} />

        {/* Form Section */}
        <section id="partner-form" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Ready to become a partner? Leave us a message and we'll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell us briefly who you are and how you’d like to partner with us"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
