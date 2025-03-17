import React from 'react';
import { FaEnvelope, FaWhatsapp, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
    const position = [23.8041, 90.3654]
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">Get in touch with the SuperGlue Wholesale team</p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Reach Out To Us</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-medium">info@superglue-wholesale.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">WhatsApp</p>
                <p className="text-lg font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg font-medium">+1 (555) 987-6543</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaFacebook className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Facebook</p>
                <p className="text-lg font-medium">@SuperGlueWholesale</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-medium">123 Adhesive Ave, Bonding City</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#FFB941] p-3 rounded-full hover:bg-[#FF9F1C] transition-colors">
                <FaFacebook className="text-white text-xl" />
              </a>
              <a href="#" className="bg-[#FFB941] p-3 rounded-full hover:bg-[#FF9F1C] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </a>
              <a href="#" className="bg-[#FFB941] p-3 rounded-full hover:bg-[#FF9F1C] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="bg-[#FFB941] p-3 rounded-full hover:bg-[#FF9F1C] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#FF9F1C] hover:bg-[#FFB941] text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Business Hours Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto mt-12">
      <div className="bg-white rounded-xl shadow-lg p-2">
        <div className="rounded-lg overflow-hidden">
          <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>123 Adhesive Ave, Bonding City, BC 12345</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>

    
    </div>
  );
};

export default Contact;