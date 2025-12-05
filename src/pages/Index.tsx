import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import TruckTypesSection from "@/components/TruckTypesSection";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import heroMainImage from "@/assets/hero-main.jpeg";
import supportImage from "@/assets/hero-main-3.webp";
import driversForDriversImage from "@/assets/drivers-for-drivers.jpeg";
import contactUsImage from "@/assets/contact-us.jpg";
import whyChooseUs1 from "@/assets/why-choose-us-1.jpg";
import whyChooseUs2 from "@/assets/why-choose-us-2.jpg";
import whyChooseUs3 from "@/assets/why-choose-us-3.jpg";
import whyChooseUs4 from "@/assets/why-choose-us-4.jpg";
import whyChooseUs5 from "@/assets/why-choose-us-5.png";
const Index = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
      description: "We'll be in touch shortly."
    });
    console.log("Contact form:", formData);
  };
  return <div className="min-h-screen flex flex-col">
      <SEOHead title="CDL Network - Connecting CDL-A Drivers with Carriers" description="Connect with quality trucking jobs or find pre-screened CDL-A drivers. Free for drivers. Fast placement. U.S. nationwide coverage." canonicalUrl="https://www.cdlnetworkllc.com/" />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh+8rem)] flex items-center px-4 overflow-hidden">
          {/* Video background - desktop only */}
          <video autoPlay loop muted playsInline className="hidden md:block absolute inset-0 w-full h-full object-cover">
            <source src="/videos/truck_1080p_loop.mp4" type="video/mp4" />
          </video>
          
          {/* Static background - mobile only */}
          <div className="md:hidden absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${heroMainImage})`
        }}></div>
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(135deg, rgba(11, 31, 59, 0.80) 0%, rgba(11, 31, 59, 0.45) 100%)'
        }}></div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connecting CDL-A Drivers with the Right Carriers
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              We help drivers and carriers find the fit that makes both succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/drivers')} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Apply as a driver <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary" onClick={() => navigate('/carriers')} className="bg-white hover:bg-white/90 text-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Hire drivers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Bottom curved edge for smooth transition */}
          <div className="absolute -bottom-1 left-0 right-0 h-12 overflow-hidden">
            <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 48h1440V24c-240 16-480 24-720 24S240 40 0 24v24z" fill="hsl(var(--secondary))" />
            </svg>
          </div>
        </section>

        {/* Why Choose Us - Modern Mobile Hero Slider */}
        <section className="py-6 md:py-16 px-0 md:px-4 bg-secondary/30" role="region" aria-label="Why choose us carousel">
          <div className="container mx-auto max-w-7xl px-0 md:px-4">
            <h2 className="text-3xl font-bold text-foreground mb-4 md:mb-12 text-center px-4 md:px-0">Why choose us</h2>
            
            <div className="relative">
              <Carousel setApi={setCarouselApi} opts={{
              align: "center",
              loop: true
            }} className="w-full">
                <CarouselContent className="ml-0 md:-ml-6">
                  {[{
                  title: "Personalized approach",
                  text: "Each driver and carrier pairing is handled individually, not through automation or a script. You tell us your requirements, and we deliver!",
                  image: whyChooseUs1,
                  alt: "Two professionals shaking hands near a red truck"
                }, {
                  title: "Dedication",
                  text: "Every driver and every carrier get their own recruiter who follows through until onboarding. We won't give up on challenging tasks and niche placements.",
                  image: whyChooseUs2,
                  alt: "Recruiter and driver reviewing documents together"
                }, {
                  title: "Drivers testimonials",
                  text: "92% of placed drivers say they'd work with us again. Here are their testimonials (coming soon).",
                  image: whyChooseUs3,
                  alt: "Happy truck driver in the cab of their truck"
                }, {
                  title: "Carriers feedback",
                  text: "Most of our carrier-partners work with us on multiple occasions. Here's what they say about us (coming soon).",
                  image: whyChooseUs4,
                  alt: "Carrier representative on a call in their office"
                }, {
                  title: "U.S. coverage",
                  text: "We are working for every type of need — OTR, local, regional, lanes, spot-bid, day cabs. You name it, and we will find a driver to do it!",
                  image: whyChooseUs5,
                  alt: "Map of the United States showing nationwide coverage"
                }].map((card, index) => <CarouselItem key={index} className="pl-0 md:pl-6 basis-full sm:basis-[calc(50%-16px)] lg:basis-[calc(33.333%-24px)]" role="group" aria-roledescription="slide" aria-label={`${index + 1} of 5`}>
                      {/* Mobile: Full-width modern hero slider */}
                      <div className="relative md:hidden overflow-hidden">
                        <div className="relative w-full aspect-[4/5]">
                          <OptimizedImage src={card.image} alt={card.alt} className="w-full h-full" sizes="100vw" />
                          {/* Gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                          
                          {/* Text overlay on bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                              {card.title}
                            </h3>
                            <p className="text-[15px] text-white/95 leading-relaxed">
                              {card.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop: Traditional card layout */}
                      <div className="hidden md:flex flex-col rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                            {card.title}
                          </h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {card.text}
                          </p>
                        </div>
                        <div className="w-full h-[200px] overflow-hidden">
                          <OptimizedImage src={card.image} alt={card.alt} className="w-full h-full" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        </div>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>

                {/* Navigation Arrows */}
                <Button variant="outline" size="icon" className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-8 md:w-8 bg-white/95 hover:bg-white text-foreground border-0 md:border md:border-border shadow-lg backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" onClick={() => carouselApi?.scrollPrev()} aria-label="Previous slide">
                  <ChevronLeft className="h-5 w-5 md:h-4 md:w-4" />
                </Button>
                <Button variant="outline" size="icon" className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-8 md:w-8 bg-white/95 hover:bg-white text-foreground border-0 md:border md:border-border shadow-lg backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" onClick={() => carouselApi?.scrollNext()} aria-label="Next slide">
                  <ChevronRight className="h-5 w-5 md:h-4 md:w-4" />
                </Button>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-5 md:mt-8 px-4">
                  {Array.from({
                  length: count
                }).map((_, index) => <button key={index} onClick={() => carouselApi?.scrollTo(index)} className={`h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${index === current ? 'w-8 bg-primary' : 'w-2 bg-foreground/30 hover:bg-foreground/50'}`} aria-label={`Go to slide ${index + 1}`} aria-current={index === current ? 'true' : 'false'} />)}
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Who We Serve */}
        <section className="py-6 md:py-16 px-0 md:px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-0 md:px-4">
            <h2 className="text-3xl font-bold text-foreground mb-4 md:mb-12 text-center px-4 md:px-0">We proudly serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
              {/* Drivers Card */}
              <div className="h-full">
                {/* Mobile: Full-width modern hero style */}
                <div className="relative md:hidden overflow-hidden">
                  <div className="relative w-full aspect-[4/5]">
                    <OptimizedImage src={driversForDriversImage} alt="Professional driver standing by their truck" className="w-full h-full" sizes="100vw" />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    
                    {/* Text overlay on bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        Drivers
                      </h3>
                      <p className="text-[15px] text-white/95 leading-relaxed mb-4">
                        CDL-A drivers seeking better opportunities with companies that value their skills and respect their preferences.
                      </p>
                      <Button onClick={() => navigate('/drivers')} variant="accent" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Desktop: Traditional card */}
                <div className="hidden md:flex md:flex-col h-full bg-card border border-border rounded-[var(--radius)] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: "url(\"/lovable-uploads/ee464e99-c0cc-4379-a964-44d212271d33.webp\")"
                }}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">Drivers</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      CDL-A drivers seeking better opportunities with companies that value their skills and respect their preferences.
                    </p>
                    <Button onClick={() => navigate('/drivers')} variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Carriers Card */}
              <div className="h-full">
                {/* Mobile: Full-width modern hero style */}
                <div className="relative md:hidden overflow-hidden">
                  <div className="relative w-full aspect-[4/5]">
                    <OptimizedImage src={supportImage} alt="Carrier team discussing logistics" className="w-full h-full" sizes="100vw" />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    
                    {/* Text overlay on bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        Carriers
                      </h3>
                      <p className="text-[15px] text-white/95 leading-relaxed mb-4">
                        U.S. carriers looking for reliable, pre-screened CDL-A drivers who fit their operation and culture.
                      </p>
                      <Button onClick={() => navigate('/carriers')} variant="accent" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Desktop: Traditional card */}
                <div className="hidden md:flex md:flex-col h-full bg-card border border-border rounded-[var(--radius)] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url(${supportImage})`
                }}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">Carriers</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      U.S. carriers looking for reliable, pre-screened CDL-A drivers who fit their operation and culture.
                    </p>
                    <Button onClick={() => navigate('/carriers')} variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Our Drivers and Carriers Run */}
        <TruckTypesSection />

        {/* Contact Form */}
        <section className="py-6 md:py-16 px-0 md:px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-0 md:px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center px-4 md:px-0">Get in touch</h2>
            <p className="text-center text-muted-foreground mb-6 md:mb-12 px-4 md:px-0">
              We reply within 24 hours.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 items-start">
              {/* Mobile: Image First with Modern Styling */}
              <div className="lg:hidden order-first mb-0">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <OptimizedImage src={contactUsImage} alt="Truck driver talking to a worker beside the rig" className="w-full h-full" sizes="100vw" />
                  {/* Gradient overlay for cohesion */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
              </div>

              {/* Contact Form - Mobile: Full-width modern style, Desktop: Traditional card */}
              <form onSubmit={handleSubmit} className="space-y-5 bg-card border-0 md:border md:border-border rounded-none md:rounded-lg p-6 md:p-8 shadow-none md:shadow-sm">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" required placeholder="Your message..." value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} rows={4} className="resize-none" />
                </div>

                <Button type="submit" variant="accent" className="w-full h-12 transition-all hover:scale-[1.02]">
                  Send Message
                </Button>

                <div className="pt-3 border-t border-border/50 mt-3">
                  <p className="text-xs text-muted-foreground leading-relaxed" aria-live="off">
                    By submitting this form, you consent to the processing and secure storage of your information in accordance with our privacy policy. Your details will only be used to respond to your inquiry.
                  </p>
                </div>
              </form>

              {/* Desktop: Contact Image */}
              <div className="hidden lg:block lg:order-last">
                <OptimizedImage alt="Truck driver talking to a worker beside the rig" className="w-full h-full rounded-lg shadow-md aspect-[4/5]" sizes="50vw" src="/lovable-uploads/0420a0db-72f8-459a-8b57-1a0b27616bed.webp" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;