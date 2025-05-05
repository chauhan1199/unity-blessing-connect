
import AdminSidebar from "@/components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { CalendarDays, FileText, MoreHorizontal, Pencil, Search, Trash2 } from "lucide-react";

const AdminCampaigns = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: "1",
      title: "108 Million Hanuman Chalisa Chants",
      startDate: "2025-04-01",
      endDate: "2025-06-30",
      participants: 54389,
      status: "Active",
      type: "Spiritual",
      target: 108000000,
    },
    {
      id: "2",
      title: "Global Peace Meditation",
      startDate: "2025-05-15",
      endDate: "2025-07-15",
      participants: 32567,
      status: "Draft",
      type: "Meditation",
      target: 100000,
    },
    {
      id: "3",
      title: "Ganga Aarti Million Lights",
      startDate: "2025-03-01",
      endDate: "2025-05-20",
      participants: 89762,
      status: "Active",
      type: "Cultural",
      target: 1000000,
    },
    {
      id: "4",
      title: "Om Chanting World Record",
      startDate: "2025-01-15",
      endDate: "2025-03-15",
      participants: 126543,
      status: "Completed",
      type: "Spiritual",
      target: 500000,
    },
    {
      id: "5",
      title: "Divine Mantra Daily Challenge",
      startDate: "2024-12-01",
      endDate: "2025-02-28",
      participants: 78921,
      status: "Completed",
      type: "Challenge",
      target: 50000,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const deleteCampaign = (id: string) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== id));
    toast.success("Campaign deleted successfully");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;
    const matchesType = typeFilter === "all" || campaign.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Campaigns</h1>
              <p className="text-muted-foreground">Manage and track all unity connect campaigns</p>
            </div>
            <Button asChild>
              <Link to="/admin/campaigns/new">+ New Campaign</Link>
            </Button>
          </div>

          <Card className="mb-6">
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search campaigns..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Spiritual">Spiritual</SelectItem>
                    <SelectItem value="Meditation">Meditation</SelectItem>
                    <SelectItem value="Cultural">Cultural</SelectItem>
                    <SelectItem value="Challenge">Challenge</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Participants</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.title}</TableCell>
                      <TableCell>{campaign.type}</TableCell>
                      <TableCell>
                        <div className={`text-xs px-2 py-1 rounded-full inline-block
                          ${campaign.status === "Active" ? "bg-green-100 text-green-800" : 
                            campaign.status === "Draft" ? "bg-gray-100 text-gray-800" :
                            "bg-blue-100 text-blue-800"}`}
                        >
                          {campaign.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-3 w-3 text-muted-foreground" />
                          <span>{formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}</span>
                        </div>
                      </TableCell>
                      <TableCell>{campaign.target.toLocaleString()}</TableCell>
                      <TableCell>{campaign.participants.toLocaleString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to={`/admin/campaigns/${campaign.id}`}>
                                <FileText className="mr-2 h-4 w-4" /> View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to={`/admin/campaigns/${campaign.id}/edit`}>
                                <Pencil className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => deleteCampaign(campaign.id)}>
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {filteredCampaigns.length === 0 && (
                <div className="py-8 text-center text-muted-foreground">
                  No campaigns found matching your filters
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminCampaigns;
