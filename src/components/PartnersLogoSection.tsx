import useEmblaCarousel from "embla-carousel-react";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

interface PartnersLogoSectionProps {
  partners: Partner[];
}

const PartnersLogoSection = ({ partners }: PartnersLogoSectionProps) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    align: "start",
  });

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-3">
          Partners
        </h2>
        <p className="text-base text-muted-foreground text-center mb-8 max-w-xl mx-auto">
          Teams and platforms we work with to help carriers hire and keep trucks moving.
        </p>

        {/* Desktop: Horizontal logo strip */}
        <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        {/* Mobile: Swipeable carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-8">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLogoSection;
