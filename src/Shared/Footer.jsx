import React from 'react';
import { Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import footerImg from '../assets/footer_logo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className=" rounded-lg mr-3">
                 <img src={footerImg} alt="" />
              </div>
         
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Importer and wholesaler of premium products with unmatched quality and service
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <Link to="/allProduct" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Products
                </Link>
              </li>
      
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-400 mr-3" />
                <span className="text-gray-300 text-sm">+8801915651053</span>
              </div>
         
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300 text-sm">
                  689, West Ibrahimpur<br />
               Kafrul Dhaka-1216,Bangladesh
                </span>
              </div>
              
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/gimimcorporation"
                target='_blank' 
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 group"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="https://wa.me/8801915651053?
                text=Hi%20there!%20I'm%20interested%20in%20your%20service."
                target='_blank'
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors duration-200 group"
              >
                <MessageCircle className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="gimimcorporationbd@gmail.com" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GIMIM Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}