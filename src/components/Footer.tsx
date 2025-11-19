import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="mt-16" style={{ background: "hsl(var(--brand-navy))", color: "#FFFFFF" }}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <div className="flex items-start gap-2 text-sm" style={{ color: "#F8FAFC" }}>
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>Chicago, IL, 60603</p>
              </div>
            </div>

            {/* Contacts Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacts</h4>
              <div className="space-y-2 text-sm" style={{ color: "#F8FAFC" }}>
                <p>Phone: +1 (872) 327-4090</p>

                <p>
                  Drivers:{" "}
                  <a href="mailto:join@cdlnetworkllc.com" className="hover:text-white transition-colors">
                    join@cdlnetworkllc.com
                  </a>
                </p>

                <p>
                  Carriers:{" "}
                  <a href="mailto:info@cdlnetworkllc.com" className="hover:text-white transition-colors">
                    info@cdlnetworkllc.com
                  </a>
                </p>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <nav className="space-y-2 text-sm" style={{ color: "#F8FAFC" }}>
                <div>
                  <Link to="/" className="hover:text-white hover:underline transition-colors">
                    Home
                  </Link>
                </div>
                <div>
                  <Link to="/drivers" className="hover:text-white hover:underline transition-colors">
                    Drivers
                  </Link>
                </div>
                <div>
                  <Link to="/carriers" className="hover:text-white hover:underline transition-colors">
                    Carriers
                  </Link>
                </div>
                <div>
                  <Link to="/contact" className="hover:text-white hover:underline transition-colors">
                    Contact
                  </Link>
                </div>
                <div>
                  <Link to="/terms" className="hover:text-white hover:underline transition-colors">
                    Terms of Use
                  </Link>
                </div>
                <div>
                  <Link to="/privacy" className="hover:text-white hover:underline transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </nav>
            </div>

            {/* Social Networks Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Social Networks</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white hover:scale-110 flex items-center justify-center transition-all"
                  style={{ color: "hsl(var(--brand-orange))" }}
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white hover:scale-110 flex items-center justify-center transition-all"
                  style={{ color: "hsl(var(--brand-orange))" }}
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cdl-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white hover:scale-110 flex items-center justify-center transition-all"
                  style={{ color: "hsl(var(--brand-orange))" }}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Line */}
      <div className="bg-background py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 CDL Network LLC. Proudly connecting CDL-A drivers with carriers across the U.S.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
