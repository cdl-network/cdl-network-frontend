import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Users, Target, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroMainImage from "@/assets/hero-main.jpeg";
import supportImage from "@/assets/hero-main-3.webp";
import driversForDriversImage from "@/assets/drivers-for-drivers.jpeg";
import dryVanImage from "@/assets/dry-van.jpg";
import reeferImage from "@/assets/reefer.jpg";
import flatbedImage from "@/assets/flatbed.webp";
import powerOnlyImage from "@/assets/power-only.jpg";
import boxTruckImage from "@/assets/box-truck.jpg";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "We'll be in touch shortly.",
    });
    console.log("Contact form:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative py-32 px-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroMainImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connecting CDL-A Drivers with the Right Carriers
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              We help drivers and carriers find the fit that makes both succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/drivers')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Apply as a driver <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/carriers')}
                className="bg-white hover:bg-white/90 text-primary"
              >
                Hire drivers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Right Fit, Every Time</h3>
                <p className="text-muted-foreground">
                  We match drivers with companies based on compatibility, not just availability.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pre-Screened Quality</h3>
                <p className="text-muted-foreground">
                  Every driver is thoroughly vetted to ensure they meet your standards.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">U.S. Wide Network</h3>
                <p className="text-muted-foreground">
                  Connecting drivers and carriers across all 50 states.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Submit Your Information</h3>
                  <p className="text-muted-foreground">
                    Drivers apply with their experience and preferences. Carriers tell us their hiring needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">We Match & Vet</h3>
                  <p className="text-muted-foreground">
                    Our team analyzes compatibility and verifies qualifications to ensure the right fit.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connect & Succeed</h3>
                  <p className="text-muted-foreground">
                    We facilitate the introduction and support both parties through the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">We proudly serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${driversForDriversImage})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Drivers</h3>
                  <p className="text-muted-foreground mb-4">
                    CDL-A drivers seeking better opportunities with companies that value their skills and respect their preferences.
                  </p>
                  <Button onClick={() => navigate('/drivers')} variant="outline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${supportImage})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Carriers</h3>
                  <p className="text-muted-foreground mb-4">
                    U.S. carriers looking for reliable, pre-screened CDL-A drivers who fit their operation and culture.
                  </p>
                  <Button onClick={() => navigate('/carriers')} variant="outline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Our Drivers and Carriers Run */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What our drivers and carriers run</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dry Van */}
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${dryVanImage})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dry Van</h3>
                  <p className="text-muted-foreground text-sm">
                    Reliable year-round freight for 53′ vans — we hire experienced drivers and partner with carriers who keep America supplied.
                  </p>
                </div>
              </div>

              {/* Reefer */}
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${reeferImage})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Reefer</h3>
                  <p className="text-muted-foreground text-sm">
                    Temperature-controlled freight across the U.S. — connecting reefer carriers and drivers who handle time-sensitive loads.
                  </p>
                </div>
              </div>

              {/* Flatbed */}
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${flatbedImage})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Flatbed</h3>
                  <p className="text-muted-foreground text-sm">
                    Open-deck specialists wanted — from step decks to RGN trailers, we match skilled drivers with dependable flatbed carriers.
                  </p>
                </div>
              </div>

              {/* Power Only */}
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${powerOnlyImage})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Power Only</h3>
                  <p className="text-muted-foreground text-sm">
                    For owner-operators running tractors only — we connect them with carriers and brokers needing power-only coverage.
                  </p>
                </div>
              </div>

              {/* Box Truck */}
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${boxTruckImage})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Box Truck</h3>
                  <p className="text-muted-foreground text-sm">
                    From box trucks to Sprinter and cargo vans — we recruit reliable drivers and partner with carriers running local and regional routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Get in Touch</h2>
            <p className="text-center text-muted-foreground mb-8">
              Have questions? We're here to help.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
