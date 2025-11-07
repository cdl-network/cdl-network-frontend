import { useState } from "react";
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

const Carriers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    fleetSize: "",
    laneType: "",
    hiringNeeds: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "We'll connect you with qualified drivers soon.",
    });
    console.log("Carrier inquiry:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative py-24 px-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${carriersHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80"></div>
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Carrier Inquiry</h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto">
              Looking for reliable, pre-screened CDL-A drivers? We deliver quality matches — not just resumes. 
              Tell us what you need and we'll connect you with drivers who fit.
            </p>
          </div>
        </section>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Contact Name *</Label>
                  <Input 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input 
                    id="company" 
                    required 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fleetSize">Fleet Size *</Label>
                  <Select value={formData.fleetSize} onValueChange={(value) => setFormData({...formData, fleetSize: value})}>
                    <SelectTrigger id="fleetSize">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 trucks</SelectItem>
                      <SelectItem value="11-50">11-50 trucks</SelectItem>
                      <SelectItem value="51-200">51-200 trucks</SelectItem>
                      <SelectItem value="200+">200+ trucks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="laneType">Lane Type</Label>
                  <Input 
                    id="laneType" 
                    placeholder="e.g., Regional, OTR, Dedicated"
                    value={formData.laneType}
                    onChange={(e) => setFormData({...formData, laneType: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hiringNeeds">Hiring Needs *</Label>
                <Textarea 
                  id="hiringNeeds" 
                  required
                  placeholder="Tell us about your current hiring needs, number of drivers, experience requirements, etc."
                  value={formData.hiringNeeds}
                  onChange={(e) => setFormData({...formData, hiringNeeds: e.target.value})}
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Drivers
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
