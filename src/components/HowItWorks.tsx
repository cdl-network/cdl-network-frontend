import { useState, useEffect, useRef } from "react";
import { ClipboardList, Search, Handshake } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

const steps = [
  {
    icon: ClipboardList,
    number: 1,
    title: "Submit Your Information",
    description: "Drivers apply with their experience and preferences. Carriers tell us their hiring needs.",
  },
  {
    icon: Search,
    number: 2,
    title: "We Match & Vet",
    description: "Our team analyzes compatibility and verifies qualifications to ensure the right fit.",
  },
  {
    icon: Handshake,
    number: 3,
    title: "Connect & Succeed",
    description: "We facilitate the introduction and support both parties through the process.",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Initialize particles
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.3 + 0.1,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: ((p.x + p.speedX + 100) % 100),
          y: ((p.y + p.speedY + 100) % 100),
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Track mouse position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Calculate particle offset based on mouse proximity
  const getParticleStyle = (particle: Particle) => {
    const dx = particle.x - mousePos.x;
    const dy = particle.y - mousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 20;
    
    let offsetX = 0;
    let offsetY = 0;
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      offsetX = (dx / distance) * force * 8;
      offsetY = (dy / distance) * force * 8;
    }
    
    return {
      left: `${particle.x + offsetX}%`,
      top: `${particle.y + offsetY}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
      transition: 'left 0.3s ease-out, top 0.3s ease-out',
    };
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30" />
      
      {/* Floating particles - Desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/40"
            style={getParticleStyle(particle)}
          />
        ))}
      </div>

      {/* Subtle decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          How It Works
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          A simple, streamlined process to connect the right people
        </p>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Flowing SVG Path */}
            <svg 
              className="absolute top-20 left-0 w-full h-8 pointer-events-none"
              viewBox="0 0 1000 40"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 100 20 Q 300 5 500 20 Q 700 35 900 20"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Animated dot along the path */}
              <circle r="4" fill="hsl(var(--primary))" opacity="0.6">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M 100 20 Q 300 5 500 20 Q 700 35 900 20"
                />
              </circle>
            </svg>

            <div className="grid grid-cols-3 gap-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isHovered = hoveredStep === index;
                
                return (
                  <div
                    key={step.number}
                    className="relative flex flex-col items-center text-center group"
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Card */}
                    <div 
                      className={`
                        relative w-28 h-28 rounded-3xl mb-8 flex flex-col items-center justify-center
                        bg-card/80 backdrop-blur-sm border border-border/50
                        transition-all duration-500 ease-out cursor-pointer
                        ${isHovered ? 'shadow-xl shadow-primary/10 scale-105 -translate-y-2' : 'shadow-md'}
                      `}
                    >
                      {/* Glow effect on hover */}
                      <div 
                        className={`
                          absolute inset-0 rounded-3xl bg-primary/10 blur-xl
                          transition-opacity duration-500
                          ${isHovered ? 'opacity-100' : 'opacity-0'}
                        `}
                      />
                      
                      <Icon 
                        className={`
                          w-9 h-9 mb-1 relative z-10
                          transition-all duration-500
                          ${isHovered ? 'text-primary scale-110' : 'text-primary/70'}
                        `}
                      />
                      <span 
                        className={`
                          text-lg font-semibold relative z-10
                          transition-colors duration-500
                          ${isHovered ? 'text-primary' : 'text-muted-foreground'}
                        `}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Text content */}
                    <h3 
                      className={`
                        text-xl font-semibold mb-3 
                        transition-colors duration-300
                        ${isHovered ? 'text-foreground' : 'text-foreground/80'}
                      `}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`
                        text-sm leading-relaxed max-w-xs
                        transition-colors duration-300
                        ${isHovered ? 'text-muted-foreground' : 'text-muted-foreground/70'}
                      `}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.number} className="relative flex gap-5">
                {/* Left side: Icon + Line */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-md flex flex-col items-center justify-center">
                    <Icon className="w-5 h-5 text-primary/80" />
                    <span className="text-xs font-semibold text-muted-foreground">{step.number}</span>
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 mt-3 bg-gradient-to-b from-primary/30 to-transparent min-h-[40px]" />
                  )}
                </div>

                {/* Right side: Content */}
                <div className="flex-1 pt-1 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-foreground/90">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
