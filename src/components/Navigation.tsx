import { NavLink } from "./NavLink";
import logo from "@/assets/cdl-network-logo.png";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Mobile: Stacked layout (logo on top, nav below) */}
        <div className="md:hidden">
          {/* Logo Row */}
          <div className="w-full flex justify-center items-center pt-2.5 pb-2">
            <NavLink to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src={logo} 
                alt="CDL Network" 
                className="h-auto w-full max-w-[72%] xs:max-w-[68%] sm:max-w-[60%] object-contain"
                style={{ imageRendering: 'auto' }}
              />
            </NavLink>
          </div>
          
          {/* Navigation Row */}
          <div className="flex justify-center items-center gap-4 pb-3">
            <NavLink 
              to="/" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Home
            </NavLink>
            <NavLink 
              to="/drivers" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Drivers
            </NavLink>
            <NavLink 
              to="/carriers" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Carriers
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Desktop/Tablet: Side-by-side layout */}
        <div className="hidden md:flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="CDL Network" className="h-8 lg:h-10" />
          </NavLink>
          
          <div className="flex gap-6">
            <NavLink 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Home
            </NavLink>
            <NavLink 
              to="/drivers" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Drivers
            </NavLink>
            <NavLink 
              to="/carriers" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Carriers
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
