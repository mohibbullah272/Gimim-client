import Skeleton from "@/Shared/Skeleton";
import useLazyLoadWithSkeleton from "@/Shared/useLazyLoadWithSkeleton";
import { motion } from "motion/react"
const OurOtherCompany = () => {
  const [ref,loaded]=useLazyLoadWithSkeleton()
  // Color theme matching other sections
  const colors = {
    primary: "#FF9F1C",
    secondary: "#CBF3F0",
    accent: "#FFB941",
    card: "#CBF3F0"
  };

  // MM Corporation company data
  const companyData = {
    name: "MM INTERNATIONAL",
    fullName: "MM INTERNATIONAL Bangladesh",
    tagline: "Excellence in Adhesive Solutions",
    description: "MM INTERNATIONAL is a sibling concern of GIMIM Corporation, specializing in premium adhesive products, industrial bonding solutions, and comprehensive wholesale services across Bangladesh. We complement GIMIM's operations by providing specialized adhesive technologies and expanded market coverage.",
    established: "2018",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
    heroImage: "https://i.ibb.co/jk2z7XQ9/mm-corporation.jpg",
    services: [
      {
        title: "Industrial Adhesives",
        description: "High-performance bonding solutions for manufacturing and construction industries",
        icon: "🏭"
      },
      {
        title: "Specialty Super Glues",
        description: "Advanced formulations for specific applications and challenging environments",
        icon: "🔬"
      },
      {
        title: "Wholesale Distribution",
        description: "Comprehensive distribution network serving retailers and businesses nationwide",
        icon: "🚚"
      },
      {
        title: "Technical Support",
        description: "Expert consultation and application guidance for optimal product performance",
        icon: "🛠️"
      }
    ],
    keyFeatures: [
      "Sister company of GIMIM Corporation",
      "Specialized in advanced adhesive technologies",
      "Partnership facilities",
      "Shared quality standards and expertise",
      "Extended market coverage",
      "Importer & Wholesaler"
    ],

  };

  return (
    <div ref={ref}>
{
  loaded?<Skeleton></Skeleton>: <div className="py-16 px-4 md:px-8 lg:px-16 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
        Our Other Company
      </h2>
      <div className="h-1 w-24 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Discover MM INTERNATIONAL, our trusted sibling concern that extends our commitment to excellence in Bangladesh's adhesive industry
      </p>
    </motion.div>

    {/* Main Company Card */}
    <motion.div
      className="bg-white rounded-lg shadow-xl overflow-hidden mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}

    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* Company Image */}
        <div className="">
          <img
          loading="lazy"
            src={companyData.heroImage}
            alt="MM INTERNATIONAL"
            className="w-full h-full "
          />
    
        </div>

        {/* Company Info */}
        <div className="">
          <div className="flex items-center mb-4">
            <img
            loading="lazy"
              src={companyData.logo}
              alt="MM INTERNATIONAL Logo"
              className="w-16 h-16 rounded-full mr-4 border-2"
              style={{ borderColor: colors.accent }}
            />
            <div>
              <h3 className="text-2xl font-bold" style={{ color: colors.primary }}>
                {companyData.name}
              </h3>
              <p className="text-sm font-medium" style={{ color: colors.accent }}>
                {companyData.tagline}
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-6 px-2 leading-relaxed">
            {companyData.description}
          </p>

          {/* Key Features */}
          <div className="mb-6 px-2">
            <h4 className="text-lg font-semibold mb-3" style={{ color: colors.primary }}>
              Key Features:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {companyData.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: colors.accent }}
                  ></div>
                  <p className="text-sm text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>

    
        </div>
      </div>
    </motion.div>




  </div>
</div>
}
   
    </div>
  );
};

export default OurOtherCompany;