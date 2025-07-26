import Skeleton from "@/Shared/Skeleton";
import useLazyLoadWithSkeleton from "@/Shared/useLazyLoadWithSkeleton";
import { Phone } from "lucide-react";
import { motion } from "motion/react"
const OurMembers = () => {
  const [ref,loaded]=useLazyLoadWithSkeleton()
  // Color theme matching the banner and FAQ
  const colors = {
    primary: "#FF9F1C",
    secondary: "#CBF3F0",
    accent: "#FFB941",
    card: "#CBF3F0"
  };

  // Placeholder member data - replace with actual data later
  const members = [
    {
      id: 1,
      name: "Khondoker Liyakat Hossain",
      role: "Chief Executive Officer",
      image: "https://i.ibb.co/DHxtPK0Q/member1.jpg",
      contact:"+880191-5651053"
    },
    {
      id: 2,
      name: "Antu Chandra Kuri",
      role: "Account & Administration Officer",
      image: "https://i.ibb.co/4RypwXr9/member2.jpg",
      contact:"+880163-1037120"
    },
    {
      id: 3,
      name: "MD. Abdul Rahim",
      role: "Factory Incharge",
      image: "https://i.ibb.co/p61PTczQ/member4.jpg",
      contact:"+880162-5843626"
    },

  ];

  return (
  <div ref={ref}>
{
  loaded?<Skeleton></Skeleton>:  <div className="py-16 px-4 md:px-8 lg:px-16 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
        Our Team Members
      </h2>
      <div className="h-1 w-24 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Meet the dedicated professionals behind GIMIM Corporation's success in Bangladesh's adhesive industry
      </p>
    </motion.div>

    {/* Members Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <motion.div
          key={member.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:shadow-xl transition-all duration-300"
          style={{ 
            borderTopColor: colors.primary,
            borderTopWidth: '4px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            y: -5,
            borderColor: colors.accent,
            borderWidth: '2px'
          }}
        >
          {/* Member Image */}
          <div className="relative overflow-hidden">
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-64 bg-cover object-cover bg-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          {/* Member Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {member.name}
            </h3>
            <p 
              className="text-sm font-medium mb-4 uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              {member.role}
            </p>
            <p 
              className="text-sm font-medium mb-4 flex items-center gap-3  tracking-wide"
              style={{  }}
            >
             <Phone></Phone> {member.contact}
            </p>
            
            {/* Role Badge */}
            <div 
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
              style={{ 
                backgroundColor: `${colors.accent}20`,
                color: colors.primary
              }}
            >
              Team Member
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: colors.accent }}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.div>
      ))}
    </div>




  </div>
</div>
}
  </div>
  );
};

export default OurMembers;