import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import img1 from '../../assets/product5.png';
import deliveryLogo from '../../assets/delivry.png';
import returnLogo from '../../assets/icons8-return-30.png';
import tkLogo from '../../assets/taka.png';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './Details.css';

const Details = () => {
  const [quantity, setQuantity] = useState(0);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  const { productName, price, rating, description, image } = item || {};
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://gimim-server.vercel.app/product/${id}`);
      setItem(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
const handleContact =()=>{
  const phoneNumber = "+8801886967825"
  const message =  `Hi I'm interested in your ${productName} products. Is it available`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

}

  return (
    <div className="details-container">
      <div className="details-content max-w-7xl mx-auto flex md:flex-row flex-col items-start">
        <motion.div 
          className="product-image-container md:w-1/2 w-full p-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="image-wrapper">
            <motion.img 
              src={image} 
              alt={productName || "Product Image"} 
              className="product-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="product-info md:w-1/2 w-full p-5 md:mt-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3 
            className="product-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
       {productName}
          </motion.h3>
          
          <motion.p 
            className="product-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
      {description}
          </motion.p>
          
          <motion.div 
            className="rating mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
          </motion.div>
          

          
          <motion.div 
            className="delivery-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <p className="info-row">
              <img className="info-icon" src={deliveryLogo} alt="delivery" />
              <span>Standard Delivery Time</span>
            </p>
            <p className="delivery-time">7 to 16 days</p>
          </motion.div>
          
          <motion.p 
            className="return-policy info-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <img className="info-icon" src={returnLogo} alt="return policy" />
            <span>7 days return policy</span>
          </motion.p>
          

          
          <motion.div 
            className="action-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.button 
            onClick={handleContact}
              className="btn-buy-now"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 123, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
        Buy Now
            </motion.button>
            <motion.button 
              className="btn-add-cart"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(255, 123, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Add To WishList
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;