// ============================================
// src/components/Footer/Footer.jsx
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif mb-4">
              Pak<span className="text-green-500">teachers</span>.com
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
            © 2025 Pakteachers.com. Providing AI-powered Education Management Systems, 
            Online Learning Services, and Smart School Solutions worldwide.

            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition no-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-green-400 transition no-underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/attorneys" className="text-gray-300 hover:text-green-400 transition no-underline">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-green-400 transition no-underline">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition no-underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Immigration Ave, Suite 500<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">info@fosterimmigration.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center text-gray-300">Family Immigration</div>
            <div className="text-center text-gray-300">Employment Visas</div>
            <div className="text-center text-gray-300">Asylum & Refugee</div>
            <div className="text-center text-gray-300">Citizenship & Naturalization</div>
            <div className="text-center text-gray-300">Deportation Defense</div>
            <div className="text-center text-gray-300">Business Immigration</div>
            <div className="text-center text-gray-300">Student Visas</div>
            <div className="text-center text-gray-300">Appeals & Motions</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-2 md:mb-0">
              © {new Date().getFullYear()} Foster Immigration Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition no-underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition no-underline">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition no-underline">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;