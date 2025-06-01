import React from 'react';

const MeetOurTeam = () => {
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
        <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className=" p-6 flex justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-f
                  ull object-cover border-4 border-white"
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
    );
};

export default MeetOurTeam;