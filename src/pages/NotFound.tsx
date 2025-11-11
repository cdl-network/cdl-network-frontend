import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import truckBackground from "@/assets/404-truck-background.png";
import confusedDriver from "@/assets/404-confused-driver.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 relative overflow-hidden bg-secondary/30">
        {/* Background truck illustration */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${truckBackground})` }}
        />
        
        {/* Main content */}
        <div className="relative z-10 flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-16">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            {/* Confused driver image */}
            <div className="mb-8 flex justify-center">
              <img 
                src={confusedDriver} 
                alt="Confused driver" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg animate-scale-in"
              />
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Oops! Looks like this route doesn't exist.
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              The page you're looking for might've taken a wrong turn or never started the engine.
            </p>
            
            {/* Button */}
            <Link to="/">
              <Button size="lg" className="animate-fade-in shadow-lg">
                Back to Main Page
              </Button>
            </Link>
            
            {/* Footer note */}
            <p className="mt-8 text-sm text-muted-foreground">
              Need help finding your way? Reach us at{" "}
              <a 
                href="mailto:info@cdlnetworkllc.com" 
                className="text-primary hover:text-primary/80 underline transition-colors"
              >
                info@cdlnetworkllc.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
