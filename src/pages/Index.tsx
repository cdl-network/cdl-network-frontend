import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import heroMainImage from "@/assets/hero-main.jpeg";
import supportImage from "@/assets/hero-main-3.webp";
import driversForDriversImage from "@/assets/drivers-for-drivers.jpeg";
import dryVanImage from "@/assets/dry-van.jpg";
import reeferImage from "@/assets/reefer.jpg";
import flatbedImage from "@/assets/flatbed.webp";
import powerOnlyImage from "@/assets/power-only.jpg";
import boxTruckImage from "@/assets/box-truck.jpg";
import contactUsImage from "@/assets/contact-us.jpg";
import whyChooseUs1 from "@/assets/why-choose-us-1.jpg";
import whyChooseUs2 from "@/assets/why-choose-us-2.jpg";
import whyChooseUs3 from "@/assets/why-choose-us-3.jpg";
import whyChooseUs4 from "@/assets/why-choose-us-4.jpg";
import whyChooseUs5 from "@/assets/why-choose-us-5.png";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

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
        <section className="py-16 px-4 bg-secondary/30" role="region" aria-label="Why choose us carousel">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why choose us</h2>
            
            <div className="relative isolation-isolate">
              {/* Radial gradient backdrop for center emphasis */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
              </div>

              <Carousel
                setApi={setCarouselApi}
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full relative overflow-y-visible py-[14px]"
              >
                <CarouselContent className="-ml-4 md:-ml-6 overflow-visible">
                  {[
                    {
                      title: "Personalized approach",
                      text: "Each driver and carrier pairing is handled individually, not through automation or a script. You tell us your requirements, and we deliver!",
                      image: whyChooseUs1,
                      alt: "Two professionals shaking hands near a red truck"
                    },
                    {
                      title: "Dedication",
                      text: "Every driver and every carrier get their own recruiter who follows through until onboarding. We won't give up on challenging tasks and niche placements.",
                      image: whyChooseUs2,
                      alt: "Recruiter and driver reviewing documents together"
                    },
                    {
                      title: "Drivers testimonials",
                      text: "92% of placed drivers say they'd work with us again. Here are their testimonials (coming soon).",
                      image: whyChooseUs3,
                      alt: "Happy truck driver in the cab of their truck"
                    },
                    {
                      title: "Carriers feedback",
                      text: "Most of our carrier-partners work with us on multiple occasions. Here's what they say about us (coming soon).",
                      image: whyChooseUs4,
                      alt: "Carrier representative on a call in their office"
                    },
                    {
                      title: "U.S. coverage",
                      text: "We are working for every type of need — OTR, local, regional, lanes, spot-bid, day cabs. You name it, and we will find a driver to do it!",
                      image: whyChooseUs5,
                      alt: "Map of the United States showing nationwide coverage"
                    }
                  ].map((card, index) => (
                    <CarouselItem 
                      key={index} 
                      className="pl-4 md:pl-6 basis-[90%] sm:basis-[calc(50%-16px)] lg:basis-[calc(33.333%-24px)] overflow-visible relative"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${index + 1} of 5`}
                      style={{ zIndex: index === current ? 10 : 0 }}
                    >
                      <div 
                        className={`flex flex-col justify-between rounded-xl bg-card border border-border transition-all duration-[250ms] ease-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] h-full ${
                          index === current 
                            ? 'shadow-[0_16px_32px_rgba(0,0,0,0.12)]' 
                            : 'shadow-md'
                        }`}
                        style={{ 
                          transform: index === current ? 'scale(1.02)' : 'scale(1)',
                          transition: 'transform 250ms ease-out, box-shadow 250ms ease-out'
                        }}
                      >
                        <div className="p-5 md:p-6 flex-1 flex flex-col">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                            {card.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {card.text}
                          </p>
                        </div>
                        <div className="w-full overflow-hidden rounded-b-xl max-h-[180px] md:max-h-[200px]" style={{ aspectRatio: '16/9' }}>
                          <img 
                            src={card.image} 
                            alt={card.alt}
                            className="w-full h-full object-cover block"
                            style={{ borderRadius: '12px' }}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Navigation Arrows - Fixed hover bug */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                  onClick={() => carouselApi?.scrollPrev()}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                  onClick={() => carouselApi?.scrollNext()}
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </Button>


                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => carouselApi?.scrollTo(index)}
                      className={`h-2.5 md:h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        index === current 
                          ? 'w-8 md:w-8 bg-primary' 
                          : 'w-2.5 md:w-2 bg-primary/30 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={index === current ? 'true' : 'false'}
                    />
                  ))}
                </div>
              </Carousel>
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
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Get in touch</h2>
            <p className="text-center text-muted-foreground mb-12">
              We reply within 24 hours.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8 shadow-sm">
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

                <Button type="submit" className="w-full transition-all hover:scale-[1.02]">
                  Send Message
                </Button>

                <div className="pt-3 border-t border-border/50 mt-3">
                  <p className="text-xs text-muted-foreground leading-relaxed" aria-live="off">
                    By submitting this form, you consent to the processing and secure storage of your information in accordance with our privacy policy. Your details will only be used to respond to your inquiry.
                  </p>
                </div>
              </form>

              {/* Contact Image */}
              <div className="lg:order-last order-first">
                <img 
                  src={contactUsImage} 
                  alt="Truck driver talking to a worker beside the rig"
                  className="w-full h-full object-cover rounded-lg shadow-md aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
