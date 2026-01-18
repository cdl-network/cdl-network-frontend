import { useRef, useState, useEffect } from "react";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

interface PartnerLogosProps {
  partners: Partner[];
}

const PartnerLogos = ({ partners }: PartnerLogosProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScrollButtons);
      return () => ref.removeEventListener("scroll", checkScrollButtons);
    }
  }, [isMobile]);

  return (
    <section className="py-10 md:py-12 bg-[#0B1F3B]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Partners
          </h2>
          <p className="text-sm md:text-base text-white/60">
            Trusted by teams across the industry
          </p>
        </div>

        {/* Desktop: Static horizontal strip */}
        <div className="hidden md:flex justify-center items-center gap-12 lg:gap-16 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name} website`}
              className="block shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-14 lg:h-16 w-auto max-w-[140px] lg:max-w-[160px] object-contain"
              />
            </a>
          ))}
        </div>

        {/* Mobile: Swipeable horizontal carousel */}
        <div className="md:hidden relative">
          {/* Fade edges for scroll indication */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0B1F3B] to-transparent z-10 pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0B1F3B] to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            className="flex items-center gap-8 overflow-x-auto scrollbar-hide px-4 -mx-4 scroll-smooth snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name} website`}
                className="block shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200 snap-center"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto max-w-[120px] object-contain"
                />
              </a>
            ))}
          </div>

          {/* Swipe hint text */}
          <p className="text-center text-white/40 text-xs mt-4">
            Swipe to see more
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
