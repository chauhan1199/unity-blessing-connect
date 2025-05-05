
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, CreditCard, Wallet, WhatsApp, IndianRupee } from "lucide-react";
import { toast } from "sonner";

interface PaymentOptionsProps {
  amount: number;
  campaignId: string;
  onPaymentComplete: (paymentInfo: PaymentInfo) => void;
}

export interface PaymentInfo {
  id: string;
  method: "upi" | "whatsapp" | "qr";
  amount: number;
  campaignId: string;
  timestamp: string;
  status: "completed";
  transactionId: string;
}

const PaymentOptions = ({ amount, campaignId, onPaymentComplete }: PaymentOptionsProps) => {
  const [selectedMethod, setSelectedMethod] = useState<"upi" | "whatsapp" | "qr" | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentProcess = (method: "upi" | "whatsapp" | "qr") => {
    setSelectedMethod(method);
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const paymentInfo: PaymentInfo = {
        id: `PAY-${Date.now().toString(36)}`,
        method,
        amount,
        campaignId,
        timestamp: new Date().toISOString(),
        status: "completed",
        transactionId: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
      };
      
      setIsProcessing(false);
      onPaymentComplete(paymentInfo);
      toast.success("Payment successful!");
      
      // Store payment receipt in localStorage
      const paymentReceipts = JSON.parse(localStorage.getItem("paymentReceipts") || "[]");
      paymentReceipts.push(paymentInfo);
      localStorage.setItem("paymentReceipts", JSON.stringify(paymentReceipts));
      
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Select Payment Method</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className={`flex flex-col items-center justify-center h-24 ${selectedMethod === 'upi' ? 'border-2 border-primary' : ''}`}
          onClick={() => handlePaymentProcess('upi')}
          disabled={isProcessing}
        >
          <Wallet className="h-10 w-10 mb-2" />
          <span>UPI</span>
        </Button>
        
        <Button
          variant="outline"
          className={`flex flex-col items-center justify-center h-24 ${selectedMethod === 'whatsapp' ? 'border-2 border-primary' : ''}`}
          onClick={() => handlePaymentProcess('whatsapp')}
          disabled={isProcessing}
        >
          <WhatsApp className="h-10 w-10 mb-2" />
          <span>WhatsApp Pay</span>
        </Button>
        
        <Button
          variant="outline"
          className={`flex flex-col items-center justify-center h-24 ${selectedMethod === 'qr' ? 'border-2 border-primary' : ''}`}
          onClick={() => handlePaymentProcess('qr')}
          disabled={isProcessing}
        >
          <QrCode className="h-10 w-10 mb-2" />
          <span>Scan QR</span>
        </Button>
      </div>
      
      {isProcessing && (
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-center text-amber-800">
            {selectedMethod === 'upi' && "Please complete your payment in your UPI app..."}
            {selectedMethod === 'whatsapp' && "Please complete your payment in WhatsApp..."}
            {selectedMethod === 'qr' && "Please scan this QR code with your payment app..."}
          </p>
          <div className="flex justify-center mt-4">
            {selectedMethod === 'qr' && (
              <div className="bg-white p-4 rounded-lg">
                <QrCode className="h-40 w-40" />
              </div>
            )}
            {selectedMethod !== 'qr' && (
              <div className="animate-pulse flex flex-col items-center">
                <IndianRupee className="h-16 w-16 text-amber-500" />
                <p className="mt-2 text-sm text-amber-700">Processing payment...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
