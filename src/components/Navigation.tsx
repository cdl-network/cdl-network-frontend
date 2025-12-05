import { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cdl-network-logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/drivers", label: "Drivers" },
    { to: "/carriers", label: "Carriers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        {/* Mobile: Logo + Burger */}
        <div className="md:hidden flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity" aria-label="CDL Network - Go to homepage">
            <img 
              src={logo} 
              alt="CDL Network" 
              className="h-8"
              style={{ imageRendering: 'auto' }}
            />
          </NavLink>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="p-2 hover:bg-muted rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    activeClassName="text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop/Tablet: Side-by-side layout */}
        <div className="hidden md:flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity" aria-label="CDL Network - Go to homepage">
            <img src={logo} alt="CDL Network" className="h-8 lg:h-10" />
          </NavLink>
          
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
