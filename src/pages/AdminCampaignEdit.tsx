
import AdminSidebar from "@/components/AdminSidebar";
import CampaignForm, { CampaignFormValues } from "@/components/CampaignForm";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const AdminCampaignEdit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [campaign, setCampaign] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll simulate loading the campaign data
    setIsLoading(true);
    setTimeout(() => {
      // Mock data - in a real app this would be fetched based on the id
      const mockCampaign = {
        id: id,
        title: "108 Million Hanuman Chalisa Chants",
        description: "Join us in a global spiritual initiative to collectively chant the Hanuman Chalisa 108 million times. This sacred practice brings inner peace and harmony to participants while creating a powerful positive energy for global well-being.",
        type: "Spiritual",
        target: 108000000,
        startDate: "2025-04-01",
        endDate: "2025-06-30",
        status: "Active",
        image: "https://placeholder.com/campaign.jpg"
      };
      
      setCampaign(mockCampaign);
      setIsLoading(false);
    }, 800);
  }, [id]);

  const handleUpdateCampaign = (data: CampaignFormValues) => {
    setIsSubmitting(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      console.log("Updating campaign:", id, data);
      toast.success("Campaign updated successfully!");
      setIsSubmitting(false);
      
      // Navigate back to campaigns list
      navigate('/admin/campaigns');
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <AdminSidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-spiritual-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-muted-foreground">Loading campaign data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Edit Campaign</h1>
            <p className="text-muted-foreground">Update your campaign details</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <CampaignForm 
              initialData={campaign}
              onSubmit={handleUpdateCampaign}
              isLoading={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCampaignEdit;
