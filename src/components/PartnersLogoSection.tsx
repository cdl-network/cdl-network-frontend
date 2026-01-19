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

        {/* Desktop: Horizontal logo strip with white cards */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white rounded-lg p-4 lg:p-5 w-36 lg:w-44 h-24 lg:h-28 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-16 lg:max-h-20 max-w-full object-contain"
              />
            </a>
          ))}
        </div>

        {/* Mobile: Swipeable carousel with white cards */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-4 px-1">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 w-32 h-20 shadow-sm"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 max-w-full object-contain"
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
