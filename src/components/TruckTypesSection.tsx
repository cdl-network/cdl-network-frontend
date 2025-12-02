import { useRef, useEffect, useState } from "react";
import dryVanImage from "@/assets/dry-van.jpg";
import reeferImage from "@/assets/reefer.jpg";
import flatbedImage from "@/assets/flatbed.webp";
import powerOnlyImage from "@/assets/power-only.jpg";
import boxTruckImage from "@/assets/box-truck.jpg";

const truckTypes = [
  {
    title: "Dry Van",
    text: "Reliable year-round freight for 53′ vans — we hire experienced drivers and partner with carriers who keep America supplied.",
    image: dryVanImage,
    alt: "53-foot dry van trailer on the highway"
  },
  {
    title: "Reefer",
    text: "Temperature-controlled freight across the U.S. — connecting reefer carriers and drivers who handle time-sensitive loads.",
    image: reeferImage,
    alt: "Refrigerated trailer carrying temperature-sensitive cargo"
  },
  {
    title: "Flatbed",
    text: "Open-deck specialists wanted — from step decks to RGN trailers, we match skilled drivers with dependable flatbed carriers.",
    image: flatbedImage,
    alt: "Flatbed trailer carrying construction materials"
  },
  {
    title: "Power Only",
    text: "For owner-operators running tractors only — we connect them with carriers and brokers needing power-only coverage.",
    image: powerOnlyImage,
    alt: "Truck cab pulling a customer-owned trailer"
  },
  {
    title: "Box Truck",
    text: "From box trucks to Sprinter and cargo vans — we recruit reliable drivers and partner with carriers running local and regional routes.",
    image: boxTruckImage,
    alt: "Box truck making local delivery"
  }
];

const TruckTypesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-6 md:py-16 px-0 md:px-4 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-0 md:px-4">
        <h2 
          className={`text-3xl font-bold text-foreground mb-4 md:mb-12 text-center px-4 md:px-0 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          What our drivers and carriers run
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6">
          {truckTypes.map((truck, index) => (
            <div 
              key={index}
              className={`transition-all duration-600 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-6"
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100 + 150}ms` : "0ms"
              }}
            >
              {/* Mobile: Full-width modern hero style */}
              <div className="relative md:hidden overflow-hidden">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img 
                    src={truck.image} 
                    alt={truck.alt}
                    className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                      isVisible ? "scale-105" : "scale-100"
                    }`}
                    style={{ 
                      transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms"
                    }}
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  
                  {/* Text overlay on bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 
                      className={`text-2xl font-bold text-white mb-3 leading-tight transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                      style={{ 
                        transitionDelay: isVisible ? `${index * 100 + 300}ms` : "0ms"
                      }}
                    >
                      {truck.title}
                    </h3>
                    <p 
                      className={`text-[15px] text-white/95 leading-relaxed transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                      style={{ 
                        transitionDelay: isVisible ? `${index * 100 + 400}ms` : "0ms"
                      }}
                    >
                      {truck.text}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop: Traditional card with animations */}
              <div className="hidden md:block bg-card border border-border rounded-[var(--radius)] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <div 
                    className={`w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-out group-hover:scale-110 ${
                      isVisible ? "scale-105" : "scale-100"
                    }`}
                    style={{ 
                      backgroundImage: `url(${truck.image})`,
                      transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 
                    className={`text-xl font-semibold mb-2 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                    style={{ 
                      transitionDelay: isVisible ? `${index * 100 + 250}ms` : "0ms"
                    }}
                  >
                    {truck.title}
                  </h3>
                  <p 
                    className={`text-muted-foreground text-sm transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                    style={{ 
                      transitionDelay: isVisible ? `${index * 100 + 350}ms` : "0ms"
                    }}
                  >
                    {truck.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TruckTypesSection;
