
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useAuth from "@/hooks/useAuth";
import { Campaign } from "@/components/CampaignCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CompletedCampaignResults from "@/components/CompletedCampaignResults";

interface UserCampaign {
  campaignId: string;
  title: string;
  joinedDate: string;
  status: "active" | "completed" | "upcoming";
  paymentInfo?: {
    id: string;
    method: "upi" | "whatsapp" | "qr";
    amount: number;
    timestamp: string;
    status: "completed";
    transactionId: string;
  };
}

const MyCampaigns = () => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const [myCampaigns, setMyCampaigns] = useState<UserCampaign[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [campaignDetails, setCampaignDetails] = useState<Campaign | null>(null);
  const [activeTab, setActiveTab] = useState("active");

  // Mock campaigns data
  const mockCampaigns: Campaign[] = [
    {
      id: "c1",
      title: "Global Meditation for Peace",
      description: "Join thousands around the world in a synchronized meditation session focused on world peace and harmony.",
      imageUrl: "/placeholder.svg",
      participants: 2500,
      endDate: "2025-06-30",
      status: "active",
    },
    {
      id: "c2",
      title: "Spiritual Leadership Development",
      description: "A program designed to nurture spiritual leadership qualities in community leaders.",
      imageUrl: "/placeholder.svg",
      participants: 850,
      endDate: "2025-05-15",
      status: "active",
    },
    {
      id: "c3",
      title: "Unity in Diversity Conference",
      description: "An virtual conference bringing together spiritual leaders from different traditions to discuss common values.",
      imageUrl: "/placeholder.svg",
      participants: 1200,
      endDate: "2025-01-10",
      status: "completed",
    }
  ];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // In a real app, we would fetch the user's campaigns from an API
    // For now, we'll simulate this with localStorage
    const storedPaymentReceipts = JSON.parse(localStorage.getItem("paymentReceipts") || "[]");
    
    // Create mock user campaigns based on payment receipts
    const userCampaigns: UserCampaign[] = storedPaymentReceipts.map((receipt: any) => {
      const campaign = mockCampaigns.find(c => c.id === receipt.campaignId);
      
      return {
        campaignId: receipt.campaignId,
        title: campaign?.title || "Unknown Campaign",
        joinedDate: new Date(receipt.timestamp).toLocaleDateString(),
        status: campaign?.status || "active",
        paymentInfo: {
          id: receipt.id,
          method: receipt.method,
          amount: receipt.amount,
          timestamp: receipt.timestamp,
          status: receipt.status,
          transactionId: receipt.transactionId
        }
      };
    });
    
    // Add some mock completed campaigns if none exist
    if (userCampaigns.filter(c => c.status === "completed").length === 0) {
      userCampaigns.push({
        campaignId: "c3",
        title: "Unity in Diversity Conference",
        joinedDate: "2025-01-01",
        status: "completed",
        paymentInfo: {
          id: `PAY-${Date.now().toString(36)}1`,
          method: "upi",
          amount: 1000,
          timestamp: new Date("2025-01-01").toISOString(),
          status: "completed",
          transactionId: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
        }
      });
    }
    
    setMyCampaigns(userCampaigns);
  }, [isLoggedIn, navigate]);

  const handleViewResults = (campaignId: string) => {
    const campaign = mockCampaigns.find(c => c.id === campaignId);
    if (campaign) {
      setCampaignDetails(campaign);
      setSelectedCampaign(campaignId);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatPaymentMethod = (method: string) => {
    switch (method) {
      case "upi": return "UPI";
      case "whatsapp": return "WhatsApp Pay";
      case "qr": return "QR Scan";
      default: return method;
    }
  };

  const filteredCampaigns = myCampaigns.filter(campaign => campaign.status === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow py-10 bg-spiritual-100/30">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl font-bold font-poppins mb-6">My Campaigns</h1>
              
              {selectedCampaign && campaignDetails ? (
                <div>
                  <Button 
                    variant="outline" 
                    className="mb-6" 
                    onClick={() => setSelectedCampaign(null)}
                  >
                    Back to My Campaigns
                  </Button>
                  <CompletedCampaignResults 
                    campaign={campaignDetails}
                    paymentInfo={myCampaigns.find(c => c.campaignId === selectedCampaign)?.paymentInfo}
                  />
                </div>
              ) : (
                <>
                  <Tabs defaultValue="active" onValueChange={setActiveTab} className="mb-6">
                    <TabsList className="mb-4">
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value={activeTab}>
                      {filteredCampaigns.length > 0 ? (
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Campaign</TableHead>
                                <TableHead>Joined Date</TableHead>
                                <TableHead>Payment Method</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {filteredCampaigns.map((campaign) => (
                                <TableRow key={campaign.campaignId}>
                                  <TableCell className="font-medium">{campaign.title}</TableCell>
                                  <TableCell>{formatDate(campaign.joinedDate)}</TableCell>
                                  <TableCell>
                                    {campaign.paymentInfo ? 
                                      formatPaymentMethod(campaign.paymentInfo.method) : 
                                      "N/A"}
                                  </TableCell>
                                  <TableCell>
                                    {campaign.paymentInfo ? 
                                      `₹${campaign.paymentInfo.amount}` : 
                                      "N/A"}
                                  </TableCell>
                                  <TableCell className="text-right">
                                    {campaign.status === "active" && (
                                      <Button asChild variant="outline" size="sm">
                                        <a href={`/campaign/${campaign.campaignId}`}>View Campaign</a>
                                      </Button>
                                    )}
                                    {campaign.status === "completed" && (
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={() => handleViewResults(campaign.campaignId)}
                                      >
                                        View Results
                                      </Button>
                                    )}
                                    {campaign.status === "upcoming" && (
                                      <Button variant="outline" size="sm" disabled>
                                        Coming Soon
                                      </Button>
                                    )}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : (
                        <div className="text-center py-8 bg-gray-50 rounded-lg">
                          <p className="text-muted-foreground">
                            You haven't joined any {activeTab} campaigns yet.
                          </p>
                          <Button asChild className="mt-4">
                            <a href="/campaigns">Browse Campaigns</a>
                          </Button>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCampaigns;
