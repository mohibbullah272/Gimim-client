import React from 'react';
import { FaUserFriends } from 'react-icons/fa';

const WhyChose = () => {
    return (
        <section className="max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Why Choose GIMIM CORPORATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="bg-[#FFB941] h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaUserFriends className="text-white text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Consultation</h3>
                <p className="text-gray-600">
                  Our team of adhesive specialists provides personalized recommendations based on your specific application requirements.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#FFB941] h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind every product we sell with our satisfaction guarantee and comprehensive quality control processes.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#FFB941] h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Our efficient logistics network ensures prompt delivery of your orders, with special expedited options available when needed.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#FFB941] h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bulk Discounts</h3>
                <p className="text-gray-600">
                  Take advantage of our competitive pricing structure with additional discounts for bulk orders and regular customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyChose;