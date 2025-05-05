
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full spiritual-gradient flex items-center justify-center">
            <span className="text-white font-bold text-lg">UC</span>
          </div>
          <span className="font-poppins font-semibold text-xl">Unity Connect</span>
        </Link>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
            {mobileMenuOpen && (
              <div className="fixed top-16 left-0 right-0 bg-white shadow-md z-50 p-4">
                <div className="flex flex-col gap-4">
                  <Link to="/" onClick={toggleMobileMenu} className="py-2">
                    Home
                  </Link>
                  <Link to="/campaigns" onClick={toggleMobileMenu} className="py-2">
                    Campaigns
                  </Link>
                  <Link to="/about" onClick={toggleMobileMenu} className="py-2">
                    About
                  </Link>
                  <div className="flex flex-col gap-2">
                    <Button asChild variant="ghost">
                      <Link to="/login" onClick={toggleMobileMenu}>Login</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/register" onClick={toggleMobileMenu}>Register</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex gap-8">
              <Link to="/" className="font-medium hover:text-spiritual-400 transition-colors">
                Home
              </Link>
              <Link to="/campaigns" className="font-medium hover:text-spiritual-400 transition-colors">
                Campaigns
              </Link>
              <Link to="/about" className="font-medium hover:text-spiritual-400 transition-colors">
                About
              </Link>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="ghost">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
