import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import useCheckAdmin from '@/Shared/useCheckAdmin';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample product images - replace these with actual product images
  const products = [
    {
      id: 1,
      image: "https://i.ibb.co.com/YBNN3Rns/product2.png",
   
      description: "Our bestselling item"
    },
    // https://i.ibb.co.com/YBNN3Rns/product2.png
    {
      id: 2,
      image: "https://i.ibb.co.com/d47mqbg4/emergency-drum-removebg-preview.png",
   
      description: "Customer favorite"
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/bjphJbWW/super-glue-drum-removebg-preview.png",
   
      description: "New arrival"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === products.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  // Color theme from your requirements
  const colors = {
    primary: "#FF9F1C",
    secondary: "#CBF3F0",
    accent: "#FFB941",
    card: "#CBF3F0"
  };

  return (
    <div className="flex mt-[68px] flex-col md:flex-row w-full h-auto md:h-96 overflow-hidden ">
      {/* Left side - Content */}
      <div 
        className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center"
        style={{ backgroundColor: colors.primary }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
            GIMIM CORPORATION
          </h1>
          <div className="h-1 w-20 bg-white mb-4"></div>
          <p className="text-sm md:text-lg text-white mb-6">
            Importer and wholesaler of premium products with unmatched quality and service
          </p>
          <motion.button 
            className="px-6 py-2 rounded-md text-sm md:text-base font-medium"
            style={{ backgroundColor: colors.accent }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
         <Link to={'/allProduct'}>Explore Products</Link>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Right side - Slider */}
      <div 
        className="w-full md:w-1/2 relative"
        style={{ backgroundColor: colors.primary }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64 md:h-full"
          >
            <img 
              src={products[currentSlide].image} 
              alt={products[currentSlide].title}
              className="w-full h-full scale-75 object-cover"
            />
            <div 
              className="absolute bottom-0 left-0 right-0 p-4"
             // Semi-transparent overlay
            >
         
              <p className="text-sm md:text-base text-white opacity-90">
                {products[currentSlide].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Indicator dots */}
        <div className="absolute bottom-20 right-4 flex space-x-2">
          {products.map((_, index) => (
            <motion.button
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ 
                backgroundColor: currentSlide === index ? colors.accent : 'white',
                opacity: currentSlide === index ? 1 : 0.6
              }}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;