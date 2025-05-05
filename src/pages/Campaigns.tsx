
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CampaignCard, { Campaign } from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for campaigns
  const allCampaigns: Campaign[] = [
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
    },
    {
      id: "4",
      title: "Gayatri Mantra Chanting",
      description: "Join the sacred chanting of the Gayatri Mantra for peace, prosperity and spiritual awakening worldwide.",
      imageUrl: "https://images.unsplash.com/photo-1518134346374-184f9d21cea2?q=80&w=2069&auto=format&fit=crop",
      participants: 41253,
      endDate: "2025-04-15",
      status: "active"
    },
    {
      id: "5",
      title: "108 Temple Prayer Bells",
      description: "Ring digital temple bells in 108 sacred temples across India. Connect with ancient spiritual traditions.",
      imageUrl: "https://images.unsplash.com/photo-1590077211339-f36217fccc4e?q=80&w=2072&auto=format&fit=crop",
      participants: 28976,
      endDate: "2025-01-20",
      status: "completed"
    },
    {
      id: "6",
      title: "Spiritual Art Collective",
      description: "Create spiritual art pieces that will be combined into a massive digital mandala representing unity.",
      imageUrl: "https://images.unsplash.com/photo-1536599524557-5f784dd0b7c9?q=80&w=2070&auto=format&fit=crop",
      participants: 12367,
      endDate: "2025-08-10",
      status: "upcoming"
    },
  ];

  // Filter campaigns based on search query and status
  const filteredCampaigns = allCampaigns.filter((campaign) => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-spiritual-100/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Spiritual Campaigns</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join our collective spiritual journeys with just ₹5. Make an impact, receive blessings, and connect with like-minded souls.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative flex-1 max-w-sm">
                  <Input
                    type="text"
                    placeholder="Search campaigns..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
                <Select 
                  value={statusFilter} 
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Campaigns</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Campaigns Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredCampaigns.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-4">No campaigns found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any campaigns matching your search criteria.
                </p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Campaign Benefits Section */}
        <section className="py-16 bg-spiritual-100/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-poppins mb-3">Why Join Our Campaigns?</h2>
              <p className="text-muted-foreground">Discover the benefits of participating in Unity Connect campaigns</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Spiritual Growth</h3>
                <p className="text-muted-foreground">
                  Participate in meaningful spiritual activities that promote inner peace, mindfulness, and connection to higher consciousness.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Recognition</h3>
                <p className="text-muted-foreground">
                  Each campaign is submitted to Guinness World Records, giving participants the chance to be part of history-making spiritual events.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M6 9H4.5a2.5 2.5 0 0 0 0 5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 1 0 5H18"/><path d="M8 9h8"/><path d="M8 15h8"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Social Impact</h3>
                <p className="text-muted-foreground">
                  Your small contribution joins with others to create meaningful change. 5% of proceeds support child welfare and elderly care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Campaigns;
