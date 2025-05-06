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

        {/* Our Vision Section */}
        <section className="py-16 bg-spiritual-100/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-6 text-spiritual-600">The Vision: Fostering Unity Through Shared Purpose</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Collective Participation</h3>
                <p className="text-muted-foreground text-sm">
                  Encouraging group involvement in spiritual causes worldwide.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Inclusive Community</h3>
                <p className="text-muted-foreground text-sm">
                  Welcoming all with fairness, respect, and shared goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Empowering Impact</h3>
                <p className="text-muted-foreground text-sm">
                  Small contributions unite to create large-scale change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-8 text-spiritual-600">How it Works: Simple Steps to Join and Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-spiritual-600">1</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Register & Login</h3>
                <p className="text-muted-foreground text-sm">
                  Create a secure account easily within minutes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-spiritual-600">2</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Join Campaigns</h3>
                <p className="text-muted-foreground text-sm">
                  Select and enter campaigns by paying ₹5 digitally.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-spiritual-600">3</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Receive Blessings</h3>
                <p className="text-muted-foreground text-sm">
                  Get digital blessings after participation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-spiritual-600">4</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Win Rewards</h3>
                <p className="text-muted-foreground text-sm">
                  Campaign-specific kits distributed fairly to winners.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Transparency and Fairness Section - NEW */}
        <section className="py-16 bg-spiritual-100/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-8 text-spiritual-600">Transparency and Fairness: Ensuring Trust in Every Campaign</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Fair Voting</h3>
                <p className="text-muted-foreground text-sm">
                  All users can vote on campaigns with clear rules.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Secure Payments</h3>
                <p className="text-muted-foreground text-sm">
                  ₹5 entry via trusted digital payment gateways.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Open Reward System</h3>
                <p className="text-muted-foreground text-sm">
                  Winners selected and rewards distributed transparently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-8 text-spiritual-600">Success Stories: Campaigns That Made a Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Green Earth Drive</h3>
                <p className="text-muted-foreground text-sm">
                  Mobilized thousands to plant 10,000 trees nationwide.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Care & Share</h3>
                <p className="text-muted-foreground text-sm">
                  Provided food kits to 5,000 families in need.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-spiritual-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-spiritual-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Peace Within</h3>
                <p className="text-muted-foreground text-sm">
                  Sponsored meditation sessions promoting mental well-being.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap Section */}
        <section className="py-16 bg-spiritual-100/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-8 text-spiritual-600">Future Roadmap: Expanding Unity Connect's Impact</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <div className="flex items-center">
                  <div className="font-bold text-spiritual-600 w-24">Q3 2024</div>
                  <div className="ml-4">
                    Launch multi-language support and wider user accessibility.
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <div className="flex items-center">
                  <div className="font-bold text-spiritual-600 w-24">Q4 2024</div>
                  <div className="ml-4">
                    Introduce new campaign categories and interactive features.
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="font-bold text-spiritual-600 w-24">Q1 2025</div>
                  <div className="ml-4">
                    Form partnerships with spiritual organizations globally.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16 bg-spiritual-100/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-12 text-spiritual-600">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop" alt="Shantiniloy Chauhan" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-1">Shantiniloy Chauhan</h3>
                <p className="text-spiritual-500 text-sm mb-3">Founder & CEO</p>
                <p className="text-muted-foreground text-xs">
                  Visionary leader who connects spirituality and creating community-level positive impact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1289&auto=format&fit=crop" alt="Priya Sharma" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-1">Priya Sharma</h3>
                <p className="text-spiritual-500 text-sm mb-3">Technology Head</p>
                <p className="text-muted-foreground text-xs">
                  Oversees all our technical elements that help with our mission and values.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src="https://images.unsplash.com/photo-1666492031773-4f4e44671857?q=80&w=1287&auto=format&fit=crop" alt="Raj Patel" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-1">Raj Patel</h3>
                <p className="text-spiritual-500 text-sm mb-3">Operations Lead</p>
                <p className="text-muted-foreground text-xs">
                  Manages our digital platform and ensures a seamless user experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop" alt="Meera Joshi" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-1">Meera Joshi</h3>
                <p className="text-spiritual-500 text-sm mb-3">Community Manager</p>
                <p className="text-muted-foreground text-xs">
                  Builds and nurtures our thriving community of spiritual participants.
                </p>
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
