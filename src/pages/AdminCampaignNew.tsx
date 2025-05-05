
import AdminSidebar from "@/components/AdminSidebar";
import CampaignForm, { CampaignFormValues } from "@/components/CampaignForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminCampaignNew = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleCreateCampaign = (data: CampaignFormValues) => {
    setIsSubmitting(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      // Generate a random ID for the new campaign
      const newCampaignId = Math.floor(Math.random() * 1000).toString();
      
      console.log("Creating new campaign:", data);
      toast.success("Campaign created successfully!");
      setIsSubmitting(false);
      
      // Navigate back to campaigns list
      navigate('/admin/campaigns');
    }, 1000);
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Create New Campaign</h1>
            <p className="text-muted-foreground">Set up a new unity connect campaign</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <CampaignForm 
              onSubmit={handleCreateCampaign}
              isLoading={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCampaignNew;
