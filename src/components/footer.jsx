import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>feedback@publicservice.gov</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Government Plaza, City Hall</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/submit" className="hover:text-blue-200 transition-colors">Submit Feedback</a></li>
              <li><a href="/explore" className="hover:text-blue-200 transition-colors">View Feedback</a></li>
              <li><a href="/about" className="hover:text-blue-200 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About This Platform</h3>
            <p className="text-blue-100 text-sm">
              Your voice matters. This platform helps improve public services 
              by collecting and addressing community feedback effectively.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Public Service Feedback Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;