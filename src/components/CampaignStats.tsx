
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CampaignStatsProps {
  totalParticipants: number;
  totalDonations: number;
  campaignTarget?: number;
  daysLeft: number;
}

const CampaignStats = ({
  totalParticipants,
  totalDonations,
  campaignTarget = 100000,
  daysLeft,
}: CampaignStatsProps) => {
  const progress = Math.min((totalParticipants / campaignTarget) * 100, 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Participants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalParticipants.toLocaleString()}</div>
          <Progress className="h-2 mt-2" value={progress} />
          <p className="text-xs text-muted-foreground mt-2">
            {progress.toFixed(1)}% of {campaignTarget.toLocaleString()} target
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Donations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹{totalDonations.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground mt-2">
            <span className="text-green-500 font-medium">₹{Math.round(totalDonations * 0.05).toLocaleString()}</span> allocated to charity
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Potential Winners
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.floor(totalParticipants * 0.01).toLocaleString()}</div>
          <div className="text-xs text-muted-foreground mt-2">
            1% of total participants
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Days Remaining
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{daysLeft}</div>
          <div className="text-xs text-muted-foreground mt-2">
            {daysLeft <= 0 ? "Campaign ended" : daysLeft === 1 ? "Final day" : `${daysLeft} days to participate`}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignStats;
