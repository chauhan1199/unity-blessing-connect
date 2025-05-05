
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  participants: number;
  endDate: string;
  status: 'active' | 'completed' | 'upcoming';
}

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:card-shadow h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={campaign.imageUrl}
          alt={campaign.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge 
          className={`absolute top-3 right-3 ${getStatusColor(campaign.status)}`}
        >
          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
        </Badge>
      </div>
      <CardHeader className="pb-0">
        <h3 className="text-xl font-semibold font-poppins line-clamp-1">{campaign.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{campaign.description}</p>
        <div className="flex justify-between text-sm">
          <span>
            <strong>{campaign.participants.toLocaleString()}</strong> Participants
          </span>
          <span>Ends: {formatDate(campaign.endDate)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/campaign/${campaign.id}`}>
            {campaign.status === "active" 
              ? "Join Campaign" 
              : campaign.status === "upcoming" 
                ? "Remind Me" 
                : "View Results"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;
