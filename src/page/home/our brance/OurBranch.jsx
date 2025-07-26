import { motion } from "motion/react"
const OurBranches = () => {
  // Color theme matching the banner and other sections
  const colors = {
    primary: "#FF9F1C",
    secondary: "#CBF3F0",
    accent: "#FFB941",
    card: "#CBF3F0"
  };

  // Placeholder branch data - replace with actual data later
  const branches = [
    {
      id: 1,
      name: "Head Office",
      city: "Dhaka",
      address: "689, Wes Ibrahimpur, 80 Dag Kafrul, Dhaka-1216 Bangladesh",
      phone: "+8801625-843626",
   

    },
    {
      id: 2,
      name: "Branch Office-1",
      city: "Dhaka",
      address: "House-122 (Ground Floor) Infront of Tarek Medical (Prem Bagan) Airport Road, Dhakkin Khan Uttara, Dhaka ",
      phone: "+8801923871055",
    
     
    },
    {
      id: 3,
      name: "Branch office-2",
      city: "Dhaka",
      address: "92,Arman Shopping Center Block-c,Shop No:4,5 Ground Floor (Shahid Faruk Road) South Jatrabari,Dhaka-1204",
      phone: "+880174-811558",
   
     
    },
    {
      id: 4,
      name: "Nawabpur Office",
      city: "Dhaka",
      address: "108, Modina Arzu Complex (8th Floor) Nawabpur Road Dhaka-1100 bangladesh",
      phone: "+8801915651053",
    
     
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16" >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Our Offices
          </h2>
          <div className="h-1 w-24 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            GIMIM Corporation serves customers across Bangladesh through our strategically located Offices, ensuring quality products and reliable service nationwide
          </p>
        </motion.div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Branch Image */}
   

              {/* Branch Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {branch.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-2" style={{ color: colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {branch.city}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm text-gray-600">{branch.address}</p>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" style={{ color: colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-sm text-gray-600">{branch.phone}</p>
                  </div>

             
                </div>

              
              
              </div>

    
            </motion.div>
          ))}
        </div>

  
      </div>
    </div>
  );
};

export default OurBranches;