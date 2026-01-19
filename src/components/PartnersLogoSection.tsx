import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

interface Partner {
  name: string;
  logo: string;
  url: string;
  isIconWithText?: boolean;
  isCompact?: boolean;
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
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-3">
          Partners
        </h2>
        <p className="text-base text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Teams and platforms we work with to help carriers hire and keep trucks moving.
        </p>

        {/* Desktop: Horizontal logo strip with larger cards */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 mb-10">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center bg-white border border-border/50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                partner.isCompact 
                  ? "p-5 lg:p-6 w-40 lg:w-44 h-28 lg:h-32" 
                  : "p-6 lg:p-8 w-48 lg:w-56 h-32 lg:h-40"
              }`}
            >
              {partner.isIconWithText ? (
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 lg:h-16 w-auto object-contain"
                  />
                  <span className="text-[#172B4D] font-semibold text-sm lg:text-base tracking-tight">
                    {partner.name}
                  </span>
                </div>
              ) : (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={partner.isCompact 
                    ? "max-h-18 lg:max-h-20 max-w-full object-contain" 
                    : "max-h-24 lg:max-h-28 max-w-full object-contain"
                  }
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile: Swipeable carousel with larger cards */}
        <div className="md:hidden overflow-hidden mb-8" ref={emblaRef}>
          <div className="flex items-center gap-4 px-1">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-shrink-0 flex items-center justify-center bg-white border border-border/50 rounded-xl shadow-sm ${
                  partner.isCompact 
                    ? "p-4 w-36 h-24" 
                    : "p-5 w-44 h-32"
                }`}
              >
                {partner.isIconWithText ? (
                  <div className="flex flex-col items-center gap-1.5">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-10 w-auto object-contain"
                    />
                    <span className="text-[#172B4D] font-semibold text-xs tracking-tight">
                      {partner.name}
                    </span>
                  </div>
                ) : (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={partner.isCompact 
                      ? "max-h-14 max-w-full object-contain" 
                      : "max-h-20 max-w-full object-contain"
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
            className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold px-8 py-6 text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersLogoSection;
