import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Clock, DollarSign, MapPin, Heart, Phone } from "lucide-react";
import driversHeroImage from "@/assets/drivers-hero.jpg";
import driversImage1 from "@/assets/drivers-1.jpg";

const Drivers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    cdl_class: "",
    state: "",
    years_exp: "",
    preferred_region: "",
    availability: "",
    truck_type_preference: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        lead_type: "driver",
        full_name: formData.full_name,
        phone: formData.phone,
        email: formData.email,
        cdl_class: formData.cdl_class,
        state: formData.state,
        years_exp: formData.years_exp ? parseInt(formData.years_exp) : 0,
        availability: formData.availability,
        preferred_region: formData.preferred_region,
        truck_type_preference: formData.truck_type_preference,
        notes: formData.notes,
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
          full_name: "",
          phone: "",
          email: "",
          cdl_class: "",
          state: "",
          years_exp: "",
          preferred_region: "",
          availability: "",
          truck_type_preference: "",
          notes: "",
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
        <section
          className="relative min-h-[70vh] flex items-center justify-center px-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${driversHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(11,31,59,0.85)] via-[rgba(11,31,59,0.75)] to-[rgba(11,31,59,0.60)] animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Get CDL Job Matches Today — Free & Fast.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl">
                No BS. No spam. Just real trucking jobs that fit your life.
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Matches
              </Button>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-4">
                <span className="text-white/90 text-sm flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
                  Free for Drivers
                </span>
                <span className="text-white/90 text-sm flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
                  Private & Secure
                </span>
                <span className="text-white/90 text-sm flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
                  Vetted Carriers Only
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-10 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6">
              <div className="flex flex-col items-center text-center space-y-1.5">
                <Clock className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Fast Placement</span>
                <p className="text-xs text-muted-foreground">Get matched quickly</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1.5">
                <DollarSign className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Stronger Pay</span>
                <p className="text-xs text-muted-foreground">Better compensation</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1.5">
                <MapPin className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Route Choice</span>
                <p className="text-xs text-muted-foreground">Pick your lanes</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1.5">
                <Heart className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Free for Drivers</span>
                <p className="text-xs text-muted-foreground">No cost to apply</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1.5 col-span-2 md:col-span-1">
                <Phone className="w-7 h-7 text-accent" strokeWidth={1.5} />
                <span className="font-semibold text-foreground text-sm">Human Support</span>
                <p className="text-xs text-muted-foreground">Real people helping</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <img
                  src={driversImage1}
                  alt="Professional CDL-A driver"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Network</h2>
                <p className="text-muted-foreground">
                  Complete the application form to get started. We'll review your information and connect you with
                  carriers that match your experience, preferences, and career goals.
                </p>
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
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    placeholder="+1 312 555 8899"
                    title="Use a US-style number, e.g. +1 312 555 8899"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="space-y-2">
                  <Label htmlFor="cdla">CDL-A License *</Label>
                  <Select
                    name="cdl_class"
                    value={formData.cdl_class}
                    onValueChange={(value) => setFormData({ ...formData, cdl_class: value })}
                    required
                  >
                    <SelectTrigger id="cdla">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    required
                    placeholder="e.g., CA, TX, FL"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input
                    id="experience"
                    name="years_exp"
                    type="number"
                    required
                    min="0"
                    value={formData.years_exp}
                    onChange={(e) => setFormData({ ...formData, years_exp: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="region">Preferred Region</Label>
                <Input
                  id="region"
                  name="preferred_region"
                  placeholder="e.g., West Coast, Midwest, National"
                  value={formData.preferred_region}
                  onChange={(e) => setFormData({ ...formData, preferred_region: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select
                    name="availability"
                    value={formData.availability}
                    onValueChange={(value) => setFormData({ ...formData, availability: value })}
                  >
                    <SelectTrigger id="availability">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="2_weeks">2 Weeks</SelectItem>
                      <SelectItem value="1_month">1 Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="truckType">Truck Type Preference</Label>
                  <Input
                    id="truckType"
                    name="truck_type_preference"
                    placeholder="e.g., Dry van, Flatbed, Reefer"
                    value={formData.truck_type_preference}
                    onChange={(e) => setFormData({ ...formData, truck_type_preference: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional notes or special requirements</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="e.g., home every weekend, I'm in SAP, team driver, specific regions, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isSubmitting ? "Submitting..." : "Apply"}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Drivers;
