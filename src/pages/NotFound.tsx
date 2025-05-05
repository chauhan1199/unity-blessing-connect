
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex items-center justify-center bg-spiritual-100/50 p-4">
        <div className="text-center max-w-xl">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full spiritual-gradient flex items-center justify-center">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 font-poppins">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Oops! The spiritual journey you're looking for seems to have taken a different path.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/campaigns">View Campaigns</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
