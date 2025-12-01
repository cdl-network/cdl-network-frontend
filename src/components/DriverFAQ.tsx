import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Do you charge drivers anything?",
    answer: "Never. Not once. Not ever.",
  },
  {
    question: "How fast will I hear back?",
    answer: "Our recruiters do their best to contact everyone within 8 business hours.",
  },
  {
    question: "Do you sell my info?",
    answer: "No. We use Google Analytics (GA4) to understand behavior on our website, but we don't sell or share your personal information with anyone else.",
  },
  {
    question: "Who can apply?",
    answer: "CDL-A drivers mostly, but we also have some non-CDL-A jobs like cargo van driver or box truck driver.",
  },
  {
    question: "What happens after I submit?",
    answer: "Short screening call to confirm your details and choose the offer. We start matching right away!",
  },
  {
    question: "Why apply now?",
    answer: "Freight is moving and carriers are adding seats. It's a good moment to upgrade routes or switch companies.",
  },
];

const DriverFAQ = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Particles
    const particles: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * canvas.offsetWidth;
      const y = Math.random() * canvas.offsetHeight;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw connections
      ctx.strokeStyle = "rgba(245, 130, 32, 0.1)";
      ctx.lineWidth = 1;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach((p) => {
        // Move towards base position
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          p.x -= (dx / distance) * force * 2;
          p.y -= (dy / distance) * force * 2;
        }

        // Drift back to base
        p.x += (p.baseX - p.x) * 0.02;
        p.y += (p.baseY - p.y) * 0.02;

        // Random drift
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        // Draw particle
        ctx.fillStyle = `rgba(245, 130, 32, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      className="relative py-16 px-4 bg-background overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Canvas Background - Desktop Only */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        style={{ opacity: 0.6 }}
      />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Questions? We've got answers.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Still wondering if we're the right fit? Here's what drivers ask us most.
          </p>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-sm data-[state=open]:border-accent data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground px-5 py-4 hover:no-underline hover:bg-muted/50 data-[state=open]:bg-accent/5 data-[state=open]:text-accent transition-colors [&[data-state=open]>svg]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-5 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop: Two-column card grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverFAQ;
