import { motion } from "motion/react"

const Title = ({title,description}) => {
    const colors = {
        primary: "#FF9F1C",
        secondary: "#CBF3F0", 
        accent: "#FFB941",
        card: "#CBF3F0"
      };
    return (
        <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
        {title}
        </h2>
        <div className="h-1 w-24 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
         {description}
        </p>
      </motion.div>
    );
};

export default Title;