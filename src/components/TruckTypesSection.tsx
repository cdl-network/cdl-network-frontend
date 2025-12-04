import { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import OptimizedImage from "@/components/OptimizedImage";
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

// Subtle logistics network SVG background
const LogisticsBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
    viewBox="0 0 1200 400"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M150 180 Q200 140 280 150 Q350 130 420 145 Q500 120 580 140 Q650 125 720 150 Q800 135 880 160 Q950 145 1020 170 L1050 200 Q1020 240 950 250 Q880 270 800 255 Q720 280 640 260 Q560 285 480 265 Q400 290 320 270 Q240 295 180 275 Q120 260 100 220 Q130 195 150 180Z"
      stroke="currentColor"
      strokeWidth="1"
      className="text-foreground"
      strokeDasharray="4 6"
    />
    {[
      { cx: 200, cy: 200 }, { cx: 350, cy: 180 }, { cx: 500, cy: 190 },
      { cx: 650, cy: 175 }, { cx: 800, cy: 195 }, { cx: 950, cy: 185 },
      { cx: 280, cy: 240 }, { cx: 450, cy: 250 }, { cx: 600, cy: 235 },
      { cx: 750, cy: 245 }, { cx: 900, cy: 230 },
    ].map((dot, i) => (
      <circle key={i} cx={dot.cx} cy={dot.cy} r="3" fill="currentColor" className="text-foreground" />
    ))}
    <path d="M200 200 Q275 190 350 180 Q425 185 500 190 Q575 182 650 175 Q725 185 800 195 Q875 190 950 185" stroke="currentColor" strokeWidth="1" className="text-foreground" strokeDasharray="2 8" />
    <path d="M280 240 Q365 245 450 250 Q525 242 600 235 Q675 240 750 245 Q825 237 900 230" stroke="currentColor" strokeWidth="1" className="text-foreground" strokeDasharray="2 8" />
    <path d="M350 180 L280 240" stroke="currentColor" strokeWidth="0.5" className="text-foreground" strokeDasharray="3 6" />
    <path d="M500 190 L450 250" stroke="currentColor" strokeWidth="0.5" className="text-foreground" strokeDasharray="3 6" />
    <path d="M650 175 L600 235" stroke="currentColor" strokeWidth="0.5" className="text-foreground" strokeDasharray="3 6" />
    <path d="M800 195 L750 245" stroke="currentColor" strokeWidth="0.5" className="text-foreground" strokeDasharray="3 6" />
    <path d="M950 185 L900 230" stroke="currentColor" strokeWidth="0.5" className="text-foreground" strokeDasharray="3 6" />
  </svg>
);

const TruckTypesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Desktop carousel with auto-scroll
  const [desktopRef, desktopApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      dragFree: true,
      containScroll: false,
    },
    [
      AutoScroll({ 
        speed: 1,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  // Mobile carousel - swipeable only
  const [mobileRef] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true,
  });

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

  // Duplicate items for seamless infinite loop
  const duplicatedTrucks = [...truckTypes, ...truckTypes, ...truckTypes];

  return (
    <section 
      ref={sectionRef}
      className={`relative py-8 md:py-16 overflow-hidden transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <LogisticsBackground />
      
      <div className="mx-auto max-w-[100vw]">
        <h2 
          className={`text-3xl font-bold text-foreground mb-6 md:mb-10 text-center px-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          What our drivers and carriers run
        </h2>

        {/* Desktop: Auto-scrolling carousel */}
        <div className="hidden md:block">
          <div className="overflow-hidden" ref={desktopRef}>
            <div className="flex">
              {duplicatedTrucks.map((truck, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_340px] min-w-0 pl-6"
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md shadow-black/8 hover:shadow-xl hover:shadow-black/12 transition-all duration-300 group h-full">
                    <div className="h-56 overflow-hidden relative">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${truck.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
                    </div>
                    <div className="p-6 pt-5">
                      <h3 className="text-[1.35rem] font-bold mb-3 text-foreground">{truck.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{truck.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Swipeable carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={mobileRef}>
            <div className="flex">
              {truckTypes.map((truck, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_85%] min-w-0 pl-4"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                      <OptimizedImage 
                        src={truck.image} 
                        alt={truck.alt}
                        className="w-full h-full"
                        sizes="85vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{truck.title}</h3>
                        <p className="text-sm text-white/90 leading-relaxed">{truck.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckTypesSection;
