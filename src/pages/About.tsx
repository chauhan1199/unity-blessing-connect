
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-spiritual-100/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">About Unity Connect</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Connecting spiritual seekers for collective positive impact through meaningful campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Unity Connect was founded in 2023 with a simple mission: to create a platform where spiritual seekers could come together to make a meaningful impact through collective participation.
                </p>
                <p className="text-muted-foreground mb-4">
                  We believe that spiritual energy multiplies when people unite with a shared intention. Our platform enables millions to join campaigns with just ₹5, making spiritual participation accessible to everyone.
                </p>
                <p className="text-muted-foreground">
                  Each campaign is designed to create both spiritual and social impact, with 5% of all donations directed towards child welfare and support for the elderly.
                </p>
              </div>
              <div className="bg-spiritual-100 rounded-lg p-6">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1586694681327-cb3723cb5fec?q=80&w=2070&auto=format&fit=crop" 
                    alt="Unity Connect Team" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-1">Our Founding Team</h3>
                  <p className="text-muted-foreground text-sm">
                    Committed to creating positive change through spiritual unity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-spiritual-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 rounded-lg bg-spiritual-500">
                <h3 className="text-2xl font-bold font-poppins mb-4">Our Mission</h3>
                <p className="mb-4">
                  To create a global community of spiritual seekers who collectively participate in campaigns that generate positive energy and support social causes.
                </p>
                <p>
                  We believe in the power of small actions multiplied by millions, creating ripples of positive change throughout the world.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-spiritual-500">
                <h3 className="text-2xl font-bold font-poppins mb-4">Our Vision</h3>
                <p className="mb-4">
                  A world where spiritual practices and social impact are seamlessly integrated, accessible to everyone, and recognized for their collective power.
                </p>
                <p>
                  We aim to set world records for spiritual participation while supporting those in need through our transparent donation system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-12">How Unity Connect Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full spiritual-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Join a Campaign</h3>
                <p className="text-muted-foreground">
                  Browse our active campaigns and join with just ₹5. Each campaign supports specific spiritual and social causes.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full spiritual-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Receive Blessings</h3>
                <p className="text-muted-foreground">
                  After participating, receive digital blessing cards and certificates. Some participants are randomly selected to win physical spiritual kits.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full spiritual-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Create Impact</h3>
                <p className="text-muted-foreground">
                  Your participation contributes to world records and social causes. Track how your contribution makes a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact Section */}
        <section className="py-16 bg-spiritual-100/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-8">Our Social Impact</h2>
              <p className="text-center text-lg text-muted-foreground mb-12">
                5% of all donations are directed towards social causes including child welfare and old age homes.
              </p>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Child Welfare Programs</h3>
                  <p className="text-muted-foreground mb-4">
                    Supporting education, nutrition, and healthcare for underprivileged children across India.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div className="bg-spiritual-300 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">₹22,089 raised</span>
                    <span className="text-spiritual-400">Target: ₹50,000</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Old Age Home Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Providing comfort, care, and companionship to elderly residents in need across multiple facilities.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div className="bg-spiritual-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">₹22,089 raised</span>
                    <span className="text-spiritual-400">Target: ₹50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6">Join Our Spiritual Journey</h2>
              <p className="mb-8 text-muted-foreground">
                Ready to be part of something meaningful? Register now to join our campaigns, receive blessings, and make a positive impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/register">Register Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/campaigns">View Campaigns</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
