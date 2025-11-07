import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,60%,15%)] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hire Drivers LLC</h3>
            <p className="text-sm text-white/80 mb-4">
              © {new Date().getFullYear()} Hire Drivers LLC. Proudly connecting CDL-A drivers with carriers across the U.S.
            </p>
            <p className="text-sm text-white/70">Chicago, IL, 60603</p>
          </div>

          {/* Center Column - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Reach Us</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>Carriers: 1-555-CALLSERHII</p>
              <p>Drivers: 1-555-CALLDOMINION</p>
              <p>Email: <a href="mailto:hr@hiredriversllc.com" className="hover:text-white">hr@hiredriversllc.com</a></p>
              <p>General: <a href="mailto:hello@hiredriversllc.com" className="hover:text-white">hello@hiredriversllc.com</a></p>
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2 text-sm text-white/80">
              <div><Link to="/" className="hover:text-white">Home</Link></div>
              <div><Link to="/drivers" className="hover:text-white">Drivers</Link></div>
              <div><Link to="/carriers" className="hover:text-white">Carriers</Link></div>
              <div><Link to="/contact" className="hover:text-white">Contact</Link></div>
              <div><Link to="/terms" className="hover:text-white">Terms of Use</Link></div>
              <div><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></div>
            </nav>
          </div>
        </div>

        {/* Bottom Section - Social Icons */}
        <div className="border-t border-white/10 pt-6 flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
