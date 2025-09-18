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
      image: "https://i.ibb.co.com/67BgD213/member1.jpg",
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
      name: "Khandoker Hamayet Hossain (Rony)",
      role: "Area Branch Manager",
      image: "https://i.ibb.co.com/JwGQRKqf/member5-removebg-preview.png",
      contact:"+8801923-871055"
    },
    {
      id: 4,
      name: "MD. Abdul Rahim",
      role: "Factory Incharge",
      image: "https://i.ibb.co.com/7ffk9Ly/member4-removebg-preview.png",
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14">
      {members.map((member, index) => (
        <motion.div
          key={member.id}
          className=" rounded-lg p-4 shadow-xs shadow-indigo-100"
     
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
   
        >

  <img
  loading="lazy"
  ref={ref}
    alt={member.name}
    src={member.image}
    className="md:h-full  w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
        <dd className="text-medium ">{member.name}</dd>
      </div>

      <div>
        <dt className="text-sm font-semibold">{member.role}</dt>

        <dd className="text-sm">Contact : {member.contact}</dd>
      </div>
    </dl>

  
  </div>

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