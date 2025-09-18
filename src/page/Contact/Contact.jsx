import "leaflet/dist/leaflet.css";
import axios from 'axios';
import { Mail } from "lucide-react";
import { FaWhatsapp ,FaPhone,FaFacebook,FaMapMarkerAlt} from "react-icons/fa";
const Contact = () => {
 
    const handleSendMessage=async(e)=>{
      e.preventDefault()
      const name = e.target.name.value 
      const email =e.target.email.value 
      const subject =e.target.subject.value 
      const message= e.target.message.value 
     
      const {data} = await axios.post(`https://gimim-server.vercel.app/contact`,{
        name,email,subject,message
      })
    
      e.target.reset()
    }
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>

      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Reach Out To Us</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <Mail className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-medium">gimimcorporationbd@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">WhatsApp</p>
                <p className="text-lg font-medium">+8801631037120</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg font-medium">+8801915651053</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaFacebook className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Facebook</p>
                <p className="text-lg font-medium">GIMIM CORPORATION</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#FF9F1C] p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-medium">689, West Ibrahimpur, 80 Dag Kafrul, Dhaka-1216, Bangladesh</p>
              </div>
            </div>
          </div>

      
        
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSendMessage} className="space-y-6">
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
                <span className="text-gray-600">Saturday - Thursday</span>
                <span className="font-medium">9:00 AM - 5:00 PM</span>
              </div>
       
              <div className="flex justify-between">
                <span className="text-gray-600">Friday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  

    
    </div>
  );
};

export default Contact;