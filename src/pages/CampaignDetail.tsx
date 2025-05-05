
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CampaignStats from "@/components/CampaignStats";
import { Share } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { Campaign } from "@/components/CampaignCard";
import PaymentOptions, { PaymentInfo } from "@/components/PaymentOptions";
import PaymentReceipt from "@/components/PaymentReceipt";

// Mock campaign data
const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "108 Million Hanuman Chalisa Chants",
    description: "Join us in chanting the Hanuman Chalisa 108 million times collectively. Each participant contributes to our world record attempt and receives divine blessings. The campaign aims to spread positive energy and devotion across the globe. Funds collected will support the maintenance of ancient temples and provide meals to the underprivileged.",
    imageUrl: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop",
    participants: 54389,
    endDate: "2025-06-30",
    status: "active"
  },
  {
    id: "2",
    title: "Global Peace Meditation",
    description: "A worldwide synchronized meditation for global peace and harmony. Each participant will receive a digital peace blessing. The campaign aims to create a wave of peaceful energy circling the globe at a specific time. Scientific studies have shown that mass meditation can reduce crime rates and conflict in surrounding areas.",
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2070&auto=format&fit=crop",
    participants: 32567,
    endDate: "2025-07-15",
    status: "upcoming"
  },
  {
    id: "3",
    title: "Ganga Aarti Million Lights",
    description: "Light a digital diya for River Ganga. Each light represents a prayer for clean rivers and sustainable water systems. This campaign combines spiritual tradition with environmental awareness, focusing on the sacred nature of water bodies. Participants receive a personalized digital blessing card with their name and contribution.",
    imageUrl: "https://images.unsplash.com/photo-1561361058-c24ceccc5c99?q=80&w=2070&auto=format&fit=crop",
    participants: 89762,
    endDate: "2025-05-20",
    status: "active"
  }
];

const CampaignDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would be an API call to fetch the campaign details
    const fetchedCampaign = mockCampaigns.find(c => c.id === id);
    
    if (fetchedCampaign) {
      setCampaign(fetchedCampaign);
      
      // Check if user has already joined this campaign
      const joinedCampaigns = localStorage.getItem("joinedCampaigns");
      if (joinedCampaigns) {
        const campaigns = JSON.parse(joinedCampaigns);
        setHasJoined(campaigns.includes(id));
      }
    }
  }, [id]);

  const handleJoinCampaign = () => {
    if (!isLoggedIn) {
      toast.error("Please login to join this campaign");
      navigate("/login");
      return;
    }

    if (campaign?.status !== "active") {
      toast.error("You can only join active campaigns");
      return;
    }

    setShowPayment(true);
  };

  const handlePaymentComplete = (paymentInfo: PaymentInfo) => {
    setPaymentInfo(paymentInfo);
    
    // Store joined campaign in localStorage
    const joinedCampaigns = localStorage.getItem("joinedCampaigns");
    let campaigns = joinedCampaigns ? JSON.parse(joinedCampaigns) : [];
    
    if (!campaigns.includes(id)) {
      campaigns.push(id);
      localStorage.setItem("joinedCampaigns", JSON.stringify(campaigns));
    }
    
    setHasJoined(true);
    setShowPayment(false);
    setShowReceipt(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: campaign?.title,
        text: `Join me in the ${campaign?.title} campaign on Unity Connect!`,
        url: window.location.href,
      })
      .then(() => toast.success("Campaign shared successfully"))
      .catch((error) => console.log("Error sharing:", error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success("Campaign link copied to clipboard"))
        .catch(() => toast.error("Failed to copy link"));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!campaign) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-muted-foreground">Campaign not found</p>
            <Button asChild className="mt-4">
              <Link to="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <img 
            src={campaign.imageUrl} 
            alt={campaign.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">{campaign.title}</h1>
                <Badge 
                  className={`${getStatusColor(campaign.status)} text-sm`}
                >
                  {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Campaign Stats */}
          <div className="mb-8">
            <CampaignStats
              totalParticipants={campaign.participants}
              totalDonations={campaign.participants * 5}
              campaignTarget={campaign.status === "active" ? 100000 : campaign.participants}
              daysLeft={Math.ceil((new Date(campaign.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
            />
          </div>

          {/* Campaign Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">About This Campaign</h2>
                <p className="text-muted-foreground mb-6">{campaign.description}</p>
                
                <h3 className="text-lg font-semibold mb-3">Spiritual Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Receive personalized digital blessing cards</li>
                  <li>Be part of a collective spiritual energy</li>
                  <li>Contribute to a Guinness World Record attempt</li>
                  <li>1% chance to win spiritual wellness kit</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3">Social Impact</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>5% of proceeds go to child welfare programs</li>
                  <li>5% of proceeds support elderly care</li>
                  <li>All participants receive updates on the social impact</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Join Campaign</h2>
                <p className="text-muted-foreground mb-4">
                  Participate with just ₹5 and be part of something meaningful.
                </p>

                <div className="bg-spiritual-100 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Contribution</span>
                    <span className="text-xl font-bold text-spiritual-600">₹5</span>
                  </div>
                </div>

                {showPayment ? (
                  <PaymentOptions 
                    amount={5} 
                    campaignId={campaign.id}
                    onPaymentComplete={handlePaymentComplete} 
                  />
                ) : campaign.status === "active" ? (
                  hasJoined ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center">
                        You have joined this campaign
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleShare}
                      >
                        <Share className="mr-2 h-4 w-4" />
                        Share Campaign
                      </Button>
                      {paymentInfo && (
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => setShowReceipt(true)}
                        >
                          View Receipt
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Button 
                        onClick={handleJoinCampaign} 
                        className="w-full" 
                        disabled={isJoining}
                      >
                        {isJoining ? "Processing..." : "Join Now for ₹5"}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleShare}
                      >
                        <Share className="mr-2 h-4 w-4" />
                        Share Campaign
                      </Button>
                    </div>
                  )
                ) : campaign.status === "upcoming" ? (
                  <div className="space-y-4">
                    <Button className="w-full" disabled>
                      Coming Soon
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleShare}
                    >
                      <Share className="mr-2 h-4 w-4" />
                      Share Campaign
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button className="w-full" disabled>
                      Campaign Ended
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleShare}
                    >
                      <Share className="mr-2 h-4 w-4" />
                      Share Campaign
                    </Button>
                  </div>
                )}

                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    By joining, you agree to our <Link to="/terms" className="text-spiritual-400 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-spiritual-400 hover:underline">Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment Receipt Modal */}
        {showReceipt && paymentInfo && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <PaymentReceipt
              paymentInfo={paymentInfo}
              campaignTitle={campaign.title}
              userName={user?.name}
              onClose={() => setShowReceipt(false)}
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CampaignDetail;
