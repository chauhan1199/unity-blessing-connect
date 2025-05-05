
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import useAuth from "@/hooks/useAuth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    // Force a reload to ensure all auth state is cleared
    window.location.href = "/";
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
                  
                  {isLoggedIn ? (
                    <>
                      <div className="py-2 font-medium">
                        Hello, {user?.name || user?.email}
                      </div>
                      <Link to="/profile" onClick={toggleMobileMenu} className="py-2">
                        Profile
                      </Link>
                      <Link to="/my-campaigns" onClick={toggleMobileMenu} className="py-2">
                        My Campaigns
                      </Link>
                      <Button onClick={() => {
                        handleLogout();
                        toggleMobileMenu();
                      }} variant="ghost">
                        Logout
                      </Button>
                    </>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Button asChild variant="ghost">
                        <Link to="/login" onClick={toggleMobileMenu}>Login</Link>
                      </Button>
                      <Button asChild>
                        <Link to="/register" onClick={toggleMobileMenu}>Register</Link>
                      </Button>
                    </div>
                  )}
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
            <div className="flex gap-4 items-center">
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      {user?.name ? user.name : user?.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer w-full">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/my-campaigns" className="cursor-pointer w-full">My Campaigns</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button asChild variant="ghost">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
