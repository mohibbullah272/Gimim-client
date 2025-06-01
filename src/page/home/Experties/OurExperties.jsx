import React from 'react';
import { FaIndustry } from 'react-icons/fa';

const OurExpertise = () => {
    return (
        <section className="max-w-7xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8  lg:p-12">
        <div className="">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Expertise</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At GIMIM CORPORATION, we've developed specialized knowledge across various adhesive applications and industries. Our technical team understands the unique bonding challenges faced by different sectors.
              </p>
              <p>
                Whether you need high-strength structural adhesives for construction, precision bonding for electronics, or food-safe adhesives for packaging, we have the expertise to recommend the right product for your specific needs.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <FaIndustry className="text-[#FFB941] mr-2" />
                  <span>Construction</span>
                </div>
                <div className="flex items-center">
                  <FaIndustry className="text-[#FFB941] mr-2" />
                  <span>Manufacturing</span>
                </div>
                <div className="flex items-center">
                  <FaIndustry className="text-[#FFB941] mr-2" />
                  <span>Automotive</span>
                </div>
                <div className="flex items-center">
                  <FaIndustry className="text-[#FFB941] mr-2" />
                  <span>Electronics</span>
                </div>
                <div className="flex items-center">
                  <FaIndustry className="text-[#FFB941] mr-2" />
                  <span>Woodworking</span>
                </div>
                <div className="flex items-center">
                  <FaIndustry className="text-[#FFB941] mr-2" />
                  <span>Packaging</span>
                </div>
              </div>
            </div>
          </div>
     
        </div>
      </section>
    );
};

export default OurExpertise;