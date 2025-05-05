
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
import { toast } from "sonner";
import { useState } from "react";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AdminUsers = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      role: "User",
      campaigns: 3,
      status: "Active",
      joined: "2025-05-01"
    },
    {
      id: "2",
      name: "Priya Patel",
      email: "priya@example.com",
      role: "User",
      campaigns: 2,
      status: "Active",
      joined: "2025-05-02"
    },
    {
      id: "3",
      name: "Amit Kumar",
      email: "amit@example.com",
      role: "Admin",
      campaigns: 1,
      status: "Active",
      joined: "2025-05-03"
    },
    {
      id: "4",
      name: "Sneha Gupta",
      email: "sneha@example.com",
      role: "User",
      campaigns: 5,
      status: "Inactive",
      joined: "2025-05-03"
    },
    {
      id: "5",
      name: "Vikram Singh",
      email: "vikram@example.com",
      role: "User",
      campaigns: 4,
      status: "Active",
      joined: "2025-05-04"
    },
    {
      id: "6",
      name: "Neha Verma",
      email: "neha@example.com",
      role: "User",
      campaigns: 1,
      status: "Pending",
      joined: "2025-05-04"
    },
    {
      id: "7",
      name: "Raj Malhotra",
      email: "raj@example.com",
      role: "User",
      campaigns: 0,
      status: "Active",
      joined: "2025-05-05"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const updateUserRole = (userId: string, newRole: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
    toast.success("User role updated successfully");
  };

  const updateUserStatus = (userId: string, newStatus: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    toast.success("User status updated successfully");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Users</h1>
              <p className="text-muted-foreground">Manage all users on Unity Connect</p>
            </div>
            <Button>
              Add New User
            </Button>
          </div>

          <Card className="mb-6">
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users by name or email..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
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
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Campaigns</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={`https://avatar.vercel.sh/${user.email}`} alt={user.name} />
                            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select
                          defaultValue={user.role}
                          onValueChange={(value) => updateUserRole(user.id, value)}
                        >
                          <SelectTrigger className="w-[110px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="User">User</SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select
                          defaultValue={user.status}
                          onValueChange={(value) => updateUserStatus(user.id, value)}
                        >
                          <SelectTrigger className="w-[110px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Inactive">Inactive</SelectItem>
                            <SelectItem value="Pending">Pending</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>{formatDate(user.joined)}</TableCell>
                      <TableCell>{user.campaigns}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" variant="destructive">Delete</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {filteredUsers.length === 0 && (
                <div className="py-8 text-center text-muted-foreground">
                  No users found matching your filters
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
