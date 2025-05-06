
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactMap from '@/components/ContactMap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-spiritual-100/70 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground">Get in touch with our team for any questions or support</p>
        </div>

        {/* Contact Form and Information */}
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="Enter message subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-spiritual-300 mr-3" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-muted-foreground">123 Spiritual Avenue, Ahmedabad, Gujarat 380001, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-spiritual-300 mr-3" />
                  <div>
                    <h3 className="font-medium">Phone Number</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-spiritual-300 mr-3" />
                  <div>
                    <h3 className="font-medium">Email Address</h3>
                    <p className="text-muted-foreground">info@unityconnect.org</p>
                    <p className="text-muted-foreground">support@unityconnect.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-spiritual-300 mr-3" />
                  <div>
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <a href="#" className="p-2 bg-spiritual-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spiritual-400"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="p-2 bg-spiritual-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spiritual-400"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="p-2 bg-spiritual-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spiritual-400"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" className="p-2 bg-spiritual-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spiritual-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="container mx-auto px-4 mb-12">
          <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-sm">
            <ContactMap />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 pb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I join a campaign?</AccordionTrigger>
                <AccordionContent>
                  To join a campaign, browse our campaigns page, select a campaign that resonates with you, 
                  and click the "Join Campaign" button. You'll need to be logged in to join a campaign. 
                  Once joined, you'll receive updates and can participate in campaign activities.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept various payment methods including credit/debit cards, PayPal, 
                  bank transfers, and digital wallets. All transactions are secure and encrypted 
                  to ensure your financial information is protected.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I start my own campaign?</AccordionTrigger>
                <AccordionContent>
                  To start your own campaign, log in to your account, go to "My Campaigns" page, 
                  and click "Create New Campaign." Fill out the required information, set your goals, 
                  and submit for review. Our team will review and approve eligible campaigns.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Is my donation tax-deductible?</AccordionTrigger>
                <AccordionContent>
                  Donations may be tax-deductible depending on your local tax laws and the 
                  specific campaign you're supporting. We provide receipts for all donations, 
                  which you can use for tax purposes. For specific tax advice, please consult with a tax professional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
