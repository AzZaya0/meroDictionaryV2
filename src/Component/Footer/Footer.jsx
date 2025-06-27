import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <footer className="bg-[#000] text-gray-400 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Column 1: About */}
        <div>
          <h2 className="text-white font-semibold mb-2">About Us</h2>
          <p>
            We are committed to providing top-notch support and creating great digital experiences.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h2 className="text-white font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link to={'/'} className="hover:text-green-500 transition">Home</Link></li>        
            <li><Link to={'/contact'} href="#" className="hover:text-green-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-white font-semibold mb-2">Contact</h2>
          <p>📍 Kathmandu, Nepal</p>
          <p>📧 merovision@gmail.com</p>
          <p>📞 +977-9825915122</p>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} MeroVision pvt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
