
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spiritual-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full spiritual-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">UC</span>
              </div>
              <span className="font-poppins font-semibold text-xl">Unity Connect</span>
            </div>
            <p className="text-sm text-gray-300">
              Fostering collective participation in spiritual causes with transparency and simplicity.
            </p>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-300 hover:text-white transition-colors">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              Have questions? Reach out to us.
            </p>
            <a 
              href="mailto:support@unityconnect.org" 
              className="text-spiritual-300 hover:underline"
            >
              support@unityconnect.org
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Unity Connect. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
