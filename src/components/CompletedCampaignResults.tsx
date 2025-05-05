
import { Campaign } from "@/components/CampaignCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Users, CalendarCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PaymentInfo {
  id: string;
  method: "upi" | "whatsapp" | "qr";
  amount: number;
  timestamp: string;
  status: "completed";
  transactionId: string;
}

interface CompletedCampaignResultsProps {
  campaign: Campaign;
  paymentInfo?: PaymentInfo;
}

const CompletedCampaignResults = ({ campaign, paymentInfo }: CompletedCampaignResultsProps) => {
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

  // Generate some mock results for the completed campaign
  const impactStats = [
    { label: "Lives Impacted", value: `${Math.floor(campaign.participants * 1.5).toLocaleString()}+` },
    { label: "Countries Reached", value: `${Math.floor(Math.random() * 30) + 10}` },
    { label: "Total Donations", value: `₹${(campaign.participants * 500).toLocaleString()}` },
  ];
  
  const achievements = [
    "Successfully conducted all planned activities",
    "Reached target participation goal",
    "Created lasting community connections",
    "Documented key learnings for future campaigns"
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl font-semibold">{campaign.title}</CardTitle>
              <CardDescription className="mt-2">Campaign Results Summary</CardDescription>
            </div>
            <Badge className="bg-gray-100 text-gray-800 border-gray-200">Completed</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <CalendarIcon className="text-muted-foreground h-5 w-5" />
              <span className="text-sm text-muted-foreground">
                Ended on {formatDate(campaign.endDate)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-muted-foreground h-5 w-5" />
              <span className="text-sm text-muted-foreground">
                {campaign.participants.toLocaleString()} Participants
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCheck className="text-muted-foreground h-5 w-5" />
              <span className="text-sm text-muted-foreground">
                All milestones achieved
              </span>
            </div>
          </div>
          
          <Separator />
          
          <div className="py-2">
            <h3 className="font-medium mb-3">Impact Statistics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-spiritual-100/30 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div className="py-2">
            <h3 className="font-medium mb-3">Key Achievements</h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm">{achievement}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      
      {paymentInfo && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Participation Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Payment Method</p>
                  <p>{formatPaymentMethod(paymentInfo.method)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Amount</p>
                  <p>₹{paymentInfo.amount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Transaction Date</p>
                  <p>{formatDate(paymentInfo.timestamp)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Transaction ID</p>
                  <p className="font-mono text-sm">{paymentInfo.transactionId}</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50">
            <p className="text-sm text-muted-foreground">Thank you for your contribution to this campaign!</p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default CompletedCampaignResults;
