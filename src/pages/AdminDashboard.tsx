
import AdminSidebar from "@/components/AdminSidebar";
import CampaignStats from "@/components/CampaignStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // Mock data for recent campaigns
  const recentCampaigns = [
    {
      id: "1",
      title: "108 Million Hanuman Chalisa Chants",
      startDate: "2025-04-01",
      endDate: "2025-06-30",
      participants: 54389,
      status: "Active",
    },
    {
      id: "2",
      title: "Global Peace Meditation",
      startDate: "2025-05-15",
      endDate: "2025-07-15",
      participants: 32567,
      status: "Draft",
    },
    {
      id: "3",
      title: "Ganga Aarti Million Lights",
      startDate: "2025-03-01",
      endDate: "2025-05-20",
      participants: 89762,
      status: "Active",
    },
    {
      id: "4",
      title: "Om Chanting World Record",
      startDate: "2025-01-15",
      endDate: "2025-03-15",
      participants: 126543,
      status: "Completed",
    },
    {
      id: "5",
      title: "Divine Mantra Daily Challenge",
      startDate: "2024-12-01",
      endDate: "2025-02-28",
      participants: 78921,
      status: "Completed",
    },
  ];

  // Mock data for recent users
  const recentUsers = [
    {
      id: "1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      joined: "2025-05-01",
      campaigns: 3,
    },
    {
      id: "2",
      name: "Priya Patel",
      email: "priya@example.com",
      joined: "2025-05-02",
      campaigns: 2,
    },
    {
      id: "3",
      name: "Amit Kumar",
      email: "amit@example.com",
      joined: "2025-05-03",
      campaigns: 1,
    },
    {
      id: "4",
      name: "Sneha Gupta",
      email: "sneha@example.com",
      joined: "2025-05-03",
      campaigns: 5,
    },
    {
      id: "5",
      name: "Vikram Singh",
      email: "vikram@example.com",
      joined: "2025-05-04",
      campaigns: 4,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Overview of campaigns, users, and performance</p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link to="/admin/reports">Generate Report</Link>
              </Button>
              <Button asChild>
                <Link to="/admin/campaigns/new">+ New Campaign</Link>
              </Button>
            </div>
          </div>

          <CampaignStats
            totalParticipants={176718}
            totalDonations={883590}
            campaignTarget={200000}
            daysLeft={21}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Campaigns</CardTitle>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/admin/campaigns">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Participants</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentCampaigns.slice(0, 5).map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell>
                          <Link to={`/admin/campaigns/${campaign.id}`} className="font-medium hover:text-spiritual-400">
                            {campaign.title}
                          </Link>
                          <div className="text-xs text-muted-foreground">
                            {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className={`text-xs px-2 py-1 rounded-full inline-block
                            ${campaign.status === "Active" ? "bg-green-100 text-green-800" : 
                              campaign.status === "Draft" ? "bg-gray-100 text-gray-800" :
                              "bg-blue-100 text-blue-800"}`}
                          >
                            {campaign.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {campaign.participants.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Users</CardTitle>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/admin/users">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead className="text-right">Campaigns</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.slice(0, 5).map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Link to={`/admin/users/${user.id}`} className="font-medium hover:text-spiritual-400">
                            {user.name}
                          </Link>
                          <div className="text-xs text-muted-foreground">
                            {user.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          {formatDate(user.joined)}
                        </TableCell>
                        <TableCell className="text-right">
                          {user.campaigns}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Donation Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Total Donation Collected</span>
                      <span className="font-medium">₹883,590</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>5% for Social Causes</span>
                      <span>₹44,179</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>- Child Welfare Programs</span>
                      <span>₹22,089</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>- Old Age Homes Support</span>
                      <span>₹22,090</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Campaign Operations</span>
                      <span>₹839,411</span>
                    </div>
                    <div className="flex justify-between mt-4 pt-4 border-t">
                      <span className="font-bold">Guinness Record Submissions</span>
                      <span className="font-bold">3</span>
                    </div>
                  </div>
                  <div className="bg-spiritual-100 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4">Recent Charity Activities</h3>
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <div className="font-medium">Child Education Fund</div>
                        <div className="text-sm text-muted-foreground">Funded 25 children's education</div>
                        <div className="text-sm mt-1">May 1, 2025</div>
                      </div>
                      <div className="border-b pb-3">
                        <div className="font-medium">Elderly Care Center</div>
                        <div className="text-sm text-muted-foreground">Provided medical supplies to 3 centers</div>
                        <div className="text-sm mt-1">April 15, 2025</div>
                      </div>
                      <div>
                        <div className="font-medium">Child Welfare Sponsorship</div>
                        <div className="text-sm text-muted-foreground">Monthly meal program for 100 children</div>
                        <div className="text-sm mt-1">April 5, 2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
