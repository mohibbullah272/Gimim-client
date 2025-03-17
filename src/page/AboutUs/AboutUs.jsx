import React from 'react';
import { FaCheckCircle, FaTrophy, FaHandshake, FaUserFriends, FaHistory, FaIndustry } from 'react-icons/fa';

const AboutUs = () => {
  // Sample team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "With over 15 years in the adhesive industry, Sarah founded SuperGlue Wholesale to revolutionize how businesses access high-quality adhesive products."
    },
    {
      name: "Michael Chen",
      position: "Chief Operations Officer",
      image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Michael oversees our supply chain and ensures that every product meets our rigorous quality standards before reaching our customers."
    },
    {
      name: "Priya Patel",
      position: "Head of Product Development",
      image: "https://images.pexels.com/photos/848199/pexels-photo-848199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Priya leads our R&D team, constantly innovating to create stronger, more versatile adhesive solutions for various industries."
    },
    {
      name: "David Rodriguez",
      position: "Customer Relations Manager",
      image: "https://images.pexels.com/photos/848199/pexels-photo-848199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "David ensures our customers receive exceptional service and support throughout their journey with SuperGlue Wholesale."
    }
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
       <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">About GIMIM CORPORATION</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in premium adhesive solutions for businesses of all sizes
        </p>
      </header>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010, SuperGlue Wholesale began with a simple mission: to provide businesses with high-quality adhesive products at competitive wholesale prices.
                </p>
                <p>
                  What started as a small operation in a garage has grown into a leading supplier of industrial and commercial adhesive solutions, serving clients across multiple industries including construction, manufacturing, automotive, and crafting.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer satisfaction has allowed us to build lasting relationships with our clients, many of whom have been with us since day one.
                </p>
              </div>
              <div className="mt-8 flex items-center">
                <FaHistory className="text-[#FF9F1C] text-3xl mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Est. 2010</h3>
                  <p className="text-gray-600">15 years of adhesive excellence</p>
                </div>
              </div>
            </div>
            <div className="bg-[#CBF3F0] flex items-center justify-center p-8">
              <img 
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="SuperGlue Wholesale Facility" 
                className="rounded-lg shadow-md" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#FF9F1C] inline-flex p-4 rounded-full mb-6">
              <FaCheckCircle className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Excellence</h3>
            <p className="text-gray-600">
              We rigorously test all our products to ensure they meet the highest standards of performance and reliability.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#FF9F1C] inline-flex p-4 rounded-full mb-6">
              <FaHandshake className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Partnership</h3>
            <p className="text-gray-600">
              We view our customers as partners, working closely with them to understand their needs and provide tailored solutions.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#FF9F1C] inline-flex p-4 rounded-full mb-6">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously invest in research and development to create next-generation adhesive technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="max-w-7xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Expertise</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At SuperGlue Wholesale, we've developed specialized knowledge across various adhesive applications and industries. Our technical team understands the unique bonding challenges faced by different sectors.
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
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#CBF3F0] rounded-lg p-4 flex items-center justify-center">
              <img src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construction" className="rounded" />
            </div>
            <div className="bg-[#CBF3F0] rounded-lg p-4 flex items-center justify-center">
              <img src="https://images.pexels.com/photos/3544567/pexels-photo-3544567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Manufacturing" className="rounded" />
            </div>
            <div className="bg-[#CBF3F0] rounded-lg p-4 flex items-center justify-center">
              <img src="https://images.pexels.com/photos/31112240/pexels-photo-31112240/free-photo-of-female-worker-organizing-warehouse-inventory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Automotive" className="rounded" />
            </div>
            <div className="bg-[#CBF3F0] rounded-lg p-4 flex items-center justify-center">
              <img src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Electronics" className="rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#CBF3F0] p-6 flex justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-[#FF9F1C] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Why Choose SuperGlue Wholesale</h2>
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
 



</div>
)}

export default AboutUs