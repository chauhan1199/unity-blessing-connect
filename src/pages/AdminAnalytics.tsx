
import AdminSidebar from "@/components/AdminSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, LineChart, PieChart } from "recharts";
import { Bar, Line, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CalendarDays, UserPlus, Users } from "lucide-react";

const AdminAnalytics = () => {
  // Data for daily participation chart
  const participationData = [
    { date: "May 1", participants: 1200, donations: 8500 },
    { date: "May 2", participants: 1800, donations: 9200 },
    { date: "May 3", participants: 1400, donations: 7800 },
    { date: "May 4", participants: 2000, donations: 12000 },
    { date: "May 5", participants: 2400, donations: 14000 },
    { date: "May 6", participants: 1900, donations: 10000 },
    { date: "May 7", participants: 2200, donations: 13000 },
  ];

  // Data for campaign distribution chart
  const campaignDistributionData = [
    { name: "Spiritual", value: 45 },
    { name: "Meditation", value: 25 },
    { name: "Cultural", value: 20 },
    { name: "Challenge", value: 10 },
  ];

  // Data for user demographics chart
  const userDemographicsData = [
    { name: "18-24", users: 1500 },
    { name: "25-34", users: 4800 },
    { name: "35-44", users: 3500 },
    { name: "45-54", users: 2200 },
    { name: "55+", users: 1800 },
  ];

  // Colors for pie chart
  const COLORS = ['#8B5CF6', '#0EA5E9', '#F97316', '#D946EF'];

  // Registration stats
  const registrationStats = [
    {
      title: "Total Users",
      value: "24,786",
      description: "12% increase from last month",
      trend: "up",
      icon: <Users className="h-5 w-5 text-spiritual-400" />,
    },
    {
      title: "New Participants",
      value: "1,463",
      description: "5% increase from last week",
      trend: "up",
      icon: <UserPlus className="h-5 w-5 text-spiritual-400" />,
    },
    {
      title: "Active Campaigns",
      value: "8",
      description: "2 more than last quarter",
      trend: "up",
      icon: <CalendarDays className="h-5 w-5 text-spiritual-400" />,
    },
  ];

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Insights into campaign performance and user activities</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            {registrationStats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Participation & Donations</CardTitle>
                  <CardDescription>The last 7 days of platform activity</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ChartContainer
                    config={{
                      participants: {
                        label: "Participants",
                        color: "#8B5CF6"
                      },
                      donations: {
                        label: "Donations (₹)",
                        color: "#0EA5E9"
                      }
                    }}
                  >
                    <LineChart data={participationData} className="h-[300px]">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="participants"
                        stroke="var(--color-participants)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="donations"
                        stroke="var(--color-donations)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Distribution</CardTitle>
                    <CardDescription>By category</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[300px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={campaignDistributionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {campaignDistributionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Legend />
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>User Demographics</CardTitle>
                    <CardDescription>By age groups</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <ChartContainer
                      config={{
                        users: {
                          label: "Users",
                          color: "#8B5CF6"
                        }
                      }}
                    >
                      <BarChart data={userDemographicsData} className="h-[300px]">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="users" fill="var(--color-users)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="campaigns" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                  <CardDescription>Compare campaign results over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8">Detailed campaign charts will be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Engagement</CardTitle>
                  <CardDescription>User activity and participation metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8">Detailed user engagement metrics will be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
