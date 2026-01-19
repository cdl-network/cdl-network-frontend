import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

interface Partner {
  name: string;
  logo: string;
  url: string;
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
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-10 mb-10">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white border border-border/50 rounded-xl p-6 lg:p-8 w-44 lg:w-52 h-32 lg:h-36 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-20 lg:max-h-24 max-w-full object-contain"
              />
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
                className="flex-shrink-0 flex items-center justify-center bg-white border border-border/50 rounded-xl p-5 w-40 h-28 shadow-sm"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-16 max-w-full object-contain"
                />
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
