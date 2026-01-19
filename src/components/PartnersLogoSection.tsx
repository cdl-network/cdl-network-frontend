import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

interface Partner {
  name: string;
  logo: string;
  url: string;
  isIconWithText?: boolean;
  isLarge?: boolean;
}

interface PartnersLogoSectionProps {
  partners: Partner[];
  onPartnerClick?: () => void;
}

const PartnersLogoSection = ({ partners, onPartnerClick }: PartnersLogoSectionProps) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    align: "start",
  });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Strategic Partnerships
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          We partner with selected companies across driver services, CDL schools, digital consultants, value-added apps, and anybody who can create value to carriers and drivers.
        </p>

        {/* Desktop: Equal-sized cards in a grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-5 lg:gap-6 max-w-6xl mx-auto mb-12">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white rounded-2xl p-4 aspect-[4/3] transition-all duration-300"
            >
              {partner.isIconWithText ? (
                <div className="flex items-center gap-2.5">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 lg:h-12 w-auto object-contain"
                  />
                  <span className="text-[#172B4D] font-semibold text-lg lg:text-xl tracking-tight">
                    {partner.name}
                  </span>
                </div>
              ) : (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={partner.isLarge 
                    ? "max-h-full max-w-full object-contain scale-[1.8]" 
                    : "max-h-[85%] max-w-[90%] object-contain"
                  }
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile: Swipeable carousel with equal cards */}
        <div className="md:hidden overflow-hidden mb-10" ref={emblaRef}>
          <div className="flex items-stretch gap-4 px-1">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-2xl p-3 w-44 h-36"
              >
                {partner.isIconWithText ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-[#172B4D] font-semibold text-sm tracking-tight">
                      {partner.name}
                    </span>
                  </div>
                ) : (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={partner.isLarge 
                      ? "max-h-full max-w-full object-contain scale-[1.6]" 
                      : "max-h-[80%] max-w-[85%] object-contain"
                    }
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Partner CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={onPartnerClick}
            size="lg"
            className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold px-10 py-6 text-lg rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersLogoSection;
