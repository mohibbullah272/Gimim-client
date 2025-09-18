import { useState } from 'react';
import logo from '../../assets/gimim-logo.png'
const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);

  const termsSection = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using the Gimim Corporation website, you agree to be bound by these Terms of Service. These terms govern your use of our online platform for purchasing industrial adhesives and related products.",
      details: [
        "Users must be 18 years or older to make purchases",
        "Continued use of our website constitutes acceptance of these terms",
        "Gimim Corporation reserves the right to modify these terms at any time"
      ]
    },
    {
      title: "Product Information",
      content: "All product descriptions, specifications, and pricing are subject to change without prior notice. We strive to provide accurate and up-to-date information about our adhesive products.",
      details: [
        "Product images are representational",
        "Actual product colors and specifications may vary",
        "Pricing is subject to change without notice"
      ]
    },
    {
      title: "Ordering and Payment",
      content: "Our online platform provides a secure method for purchasing industrial adhesives. All transactions are processed through verified payment gateways compliant with Bangladesh financial regulations.",
      details: [
        "Payment must be made in full before product shipment",
        "We accept multiple payment methods",
        "All transactions are secured with encryption"
      ]
    },
    {
      title: "Shipping and Delivery",
      content: "Gimim Corporation offers nationwide shipping across Bangladesh. Delivery times and costs may vary based on product type and destination.",
      details: [
        "Standard shipping within Dhaka: 2-3 business days",
        "Outside Dhaka: 4-7 business days",
        "Shipping costs calculated at checkout"
      ]
    },
    {
      title: "Return and Refund Policy",
      content: "We maintain a comprehensive return policy for industrial adhesive products. Customers can request returns within 14 days of product receipt under specific conditions.",
      details: [
        "Unopened and unused products eligible for return",
        "Return shipping costs borne by customer",
        "Refunds processed within 7-10 business days"
      ]
    },
    {
      title: "Warranty and Liability",
      content: "Our industrial adhesive products come with manufacturer warranties. Gimim Corporation's liability is limited to product replacement or refund.",
      details: [
        "Warranty varies by product type",
        "Damage from improper use not covered",
        "Manufacturing defects fully warranted"
      ]
    }
  ];

  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header */}
      <header className=" text-white py-6 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Terms of Service</h1>
          <img 
               loading='lazy'
            src={logo}
            alt="Gimim Corporation Logo" 
            className="w-16 h-16 rounded-full"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8 flex-grow">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
          {/* Company Introduction */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-[#FF9F1C] mb-4">
              Welcome to Gimim Corporation
            </h2>
            <p className="text-gray-700 mb-4">
              Established in 2014, we are a leading wholesale supplier of industrial adhesives in Bangladesh. These Terms of Service outline the rules and regulations for using our online platform.
            </p>
          </section>

          {/* Expandable Terms Sections */}
          <div className="space-y-4">
            {termsSection.map((section, index) => (
              <div 
                key={index} 
                className="border rounded-lg overflow-hidden"
              >
                <div 
                  onClick={() => setActiveSection(activeSection === index ? null : index)}
                  className=" bg-opacity-20 p-4 flex justify-between items-center cursor-pointer hover:bg-opacity-30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-[#FF9F1C]">
                    {section.title}
                  </h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 transform transition-transform ${activeSection === index ? 'rotate-90' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="#FF9F1C"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                {activeSection === index && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-700 mb-3">{section.content}</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-8 bg-[#FFB941] bg-opacity-10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#FF9F1C] mb-3">
              Legal Disclaimer
            </h3>
            <p className="text-gray-700">
              These terms are governed by the laws of Bangladesh. Any disputes shall be subject to the exclusive jurisdiction of courts in Dhaka.
            </p>
          </div>
        </div>
      </main>

   
 
    </div>
  );
};

export default TermsOfService;