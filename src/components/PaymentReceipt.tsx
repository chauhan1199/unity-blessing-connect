
import { Button } from "@/components/ui/button";
import { Receipt, IndianRupee } from "lucide-react";
import { PaymentInfo } from "./PaymentOptions";
import { useRef } from "react";

interface PaymentReceiptProps {
  paymentInfo: PaymentInfo;
  campaignTitle: string;
  userName?: string;
  onClose: () => void;
}

const PaymentReceipt = ({ paymentInfo, campaignTitle, userName, onClose }: PaymentReceiptProps) => {
  const receiptRef = useRef<HTMLDivElement>(null);
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };
  
  const handlePrint = () => {
    const printContent = receiptRef.current?.innerHTML;
    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Payment Receipt - Unity Connect</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .receipt { max-width: 500px; margin: 0 auto; border: 1px solid #ccc; padding: 20px; }
              .receipt-header { text-align: center; margin-bottom: 20px; }
              .receipt-body { margin-bottom: 20px; }
              .receipt-footer { text-align: center; font-size: 0.8em; color: #666; }
              .receipt-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
              .receipt-label { font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="receipt">
              ${printContent}
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border p-6 max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Payment Receipt</h2>
        <Receipt className="h-8 w-8 text-green-600" />
      </div>
      
      <div ref={receiptRef}>
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold">Unity Connect</h1>
          <p className="text-gray-500">Campaign Participation Receipt</p>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="grid grid-cols-3 gap-1 py-2 border-b">
            <span className="text-gray-500 font-semibold">Receipt ID:</span>
            <span className="col-span-2">{paymentInfo.id}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-1 py-2 border-b">
            <span className="text-gray-500 font-semibold">Transaction ID:</span>
            <span className="col-span-2">{paymentInfo.transactionId}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-1 py-2 border-b">
            <span className="text-gray-500 font-semibold">Campaign:</span>
            <span className="col-span-2">{campaignTitle}</span>
          </div>
          
          {userName && (
            <div className="grid grid-cols-3 gap-1 py-2 border-b">
              <span className="text-gray-500 font-semibold">Participant:</span>
              <span className="col-span-2">{userName}</span>
            </div>
          )}
          
          <div className="grid grid-cols-3 gap-1 py-2 border-b">
            <span className="text-gray-500 font-semibold">Date & Time:</span>
            <span className="col-span-2">{formatDate(paymentInfo.timestamp)}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-1 py-2 border-b">
            <span className="text-gray-500 font-semibold">Payment Method:</span>
            <span className="col-span-2">
              {paymentInfo.method === 'upi' && 'UPI Payment'}
              {paymentInfo.method === 'whatsapp' && 'WhatsApp Pay'}
              {paymentInfo.method === 'qr' && 'QR Code Scan'}
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-1 py-2 border-b">
            <span className="text-gray-500 font-semibold">Status:</span>
            <span className="col-span-2">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                {paymentInfo.status === 'completed' ? 'Completed' : 'Processing'}
              </span>
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-1 py-2 border-b">
            <span className="text-gray-500 font-semibold">Amount:</span>
            <span className="col-span-2 flex items-center">
              <IndianRupee className="h-4 w-4 inline mr-1" />
              {paymentInfo.amount.toFixed(2)}
            </span>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Thank you for participating in Unity Connect!</p>
          <p>Your contribution makes a positive difference.</p>
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button onClick={handlePrint}>
          <Receipt className="mr-2 h-4 w-4" />
          Print Receipt
        </Button>
      </div>
    </div>
  );
};

export default PaymentReceipt;
