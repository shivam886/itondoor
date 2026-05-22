import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-darkBg text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group mb-4 outline-none">
              <Logo variant="dark" className="group-hover:opacity-90 transition-opacity" />
            </Link>
            <p className="text-sm text-gray-400">
              Expert tech solutions at your doorstep. Fast, reliable, and affordable IT support services in Delhi NCR.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-brand-electricBlue transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-electricBlue transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-electricBlue transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-electricBlue transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-brand-electricBlue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-electricBlue transition-colors">Our Services</Link></li>
              <li><Link to="/book" className="hover:text-brand-electricBlue transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-brand-electricBlue transition-colors">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-brand-electricBlue transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-brand-electricBlue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-electricBlue transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-electricBlue shrink-0 mt-0.5" />
                <span className="text-sm">123 Tech Park, Sector 62, Noida, Delhi NCR 201309</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-electricBlue shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-electricBlue shrink-0" />
                <span className="text-sm">support@itondoor.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ITonDoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
