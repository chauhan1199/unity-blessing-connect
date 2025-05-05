
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CampaignCard, { Campaign } from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CampaignStats from "@/components/CampaignStats";

const Index = () => {
  // Mock data for featured campaigns
  const featuredCampaigns: Campaign[] = [
    {
      id: "1",
      title: "108 Million Hanuman Chalisa Chants",
      description: "Join us in chanting the Hanuman Chalisa 108 million times collectively. Each participant contributes to our world record attempt.",
      imageUrl: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop",
      participants: 54389,
      endDate: "2025-06-30",
      status: "active"
    },
    {
      id: "2",
      title: "Global Peace Meditation",
      description: "A worldwide synchronized meditation for global peace and harmony. Each participant will receive a digital peace blessing.",
      imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2070&auto=format&fit=crop",
      participants: 32567,
      endDate: "2025-07-15",
      status: "upcoming"
    },
    {
      id: "3",
      title: "Ganga Aarti Million Lights",
      description: "Light a digital diya for River Ganga. Each light represents a prayer for clean rivers and sustainable water systems.",
      imageUrl: "https://images.unsplash.com/photo-1561361058-c24ceccc5c99?q=80&w=2070&auto=format&fit=crop",
      participants: 89762,
      endDate: "2025-05-20",
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16 bg-spiritual-100/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-poppins mb-3">Active Campaigns</h2>
              <p className="text-muted-foreground">Join one of our ongoing spiritual campaigns with just ₹5</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link to="/campaigns">View All Campaigns</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-poppins mb-3">Campaign Impact</h2>
              <p className="text-muted-foreground">See the collective power of unity in our spiritual campaigns</p>
            </div>

            <CampaignStats
              totalParticipants={176718}
              totalDonations={883590}
              campaignTarget={200000}
              daysLeft={21}
            />
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold font-poppins mb-4">Transparent Donation Allocation</h3>
                  <p className="mb-4 text-muted-foreground">
                    5% of all donations are directed towards social causes including child welfare and old age homes.
                  </p>
                  <div className="flex flex-col gap-3 mb-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Child Welfare Programs</span>
                        <span className="text-sm text-spiritual-400">₹22,089</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-spiritual-300 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Old Age Homes Support</span>
                        <span className="text-sm text-spiritual-400">₹22,089</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-spiritual-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="outline">
                    <Link to="/impact">View Full Impact Report</Link>
                  </Button>
                </div>
                <div className="bg-spiritual-100 p-8 rounded-lg">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M3 11v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a7 7 0 0 0-7-7h0a7 7 0 0 0-7 7v3"/><path d="m9 17 3 3 3-3"/><path d="M12 20v-9"/></svg>
                      </div>
                      <div>
                        <h4 className="font-medium">100% Transparency</h4>
                        <p className="text-sm text-muted-foreground">Every rupee is tracked with complete transparency and regular reports.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="m12 15 2 2 4-4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Verified Charities</h4>
                        <p className="text-sm text-muted-foreground">We partner only with verified and responsible charitable organizations.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Social Impact</h4>
                        <p className="text-sm text-muted-foreground">Every campaign has a direct positive impact on society beyond spiritual benefits.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-spiritual-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-poppins mb-6">Ready to Join a Spiritual Journey?</h2>
              <p className="mb-8">
                Participate with just ₹5, receive digital blessings, and become part of something meaningful. 
                Every campaign is recorded for the Guinness World Records.
              </p>
              <Button asChild size="lg" className="bg-white text-spiritual-600 hover:bg-spiritual-100">
                <Link to="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
