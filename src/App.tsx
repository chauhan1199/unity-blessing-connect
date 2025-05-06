
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import Index from "./pages/Index";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCampaigns from "./pages/AdminCampaigns";
import AdminCampaignNew from "./pages/AdminCampaignNew";
import AdminCampaignEdit from "./pages/AdminCampaignEdit";
import AdminUsers from "./pages/AdminUsers";
import AdminAnalytics from "./pages/AdminAnalytics";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Campaigns from "./pages/Campaigns";
import CampaignDetail from "./pages/CampaignDetail";
import Profile from "./pages/Profile";
import MyCampaigns from "./pages/MyCampaigns";

const queryClient = new QueryClient();

// Protected route component for admin routes
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, isAdmin } = useAuth();
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  
  return <>{children}</>;
};

// Main App with route configuration
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      
      {/* Admin routes with protection */}
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      <Route path="/admin/campaigns" element={<AdminRoute><AdminCampaigns /></AdminRoute>} />
      <Route path="/admin/campaigns/new" element={<AdminRoute><AdminCampaignNew /></AdminRoute>} />
      <Route path="/admin/campaigns/:id/edit" element={<AdminRoute><AdminCampaignEdit /></AdminRoute>} />
      <Route path="/admin/users" element={<AdminRoute><AdminUsers /></AdminRoute>} />
      <Route path="/admin/analytics" element={<AdminRoute><AdminAnalytics /></AdminRoute>} />
      
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/campaign/:id" element={<CampaignDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-campaigns" element={<MyCampaigns />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppRoutes />
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
