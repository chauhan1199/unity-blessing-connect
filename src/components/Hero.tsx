
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-spiritual-100 opacity-70 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-spiritual-200 opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-spiritual-300 opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-spiritual-400 to-spiritual-300">
            Unity in Spiritual Causes
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join collective campaigns, offer ₹5, receive digital blessings, and make a difference together. Every small offering creates ripples of positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/campaigns">
                Explore Campaigns
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-md">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Support Causes</h3>
              <p className="text-muted-foreground text-sm">Participate in spiritual endeavors with just ₹5.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white shadow-md">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M12 8c-3 0-4 3-4 3s1-3 4-3 4 3 4 3-1-3-4-3z"/><circle cx="12" cy="12" r="10"/><path d="M12 16c1-1 2-2 2-4"/><path d="M12 16c-1-1-2-2-2-4"/></svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Receive Blessings</h3>
              <p className="text-muted-foreground text-sm">Digital certificates and blessing cards for all participants.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white shadow-md">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Win Spiritual Kits</h3>
              <p className="text-muted-foreground text-sm">1% of participants receive special rewards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
