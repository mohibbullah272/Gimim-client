import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import tkIcon from '../assets/taka.png';
import './Cards.css';

const Cards = ({ product }) => {
    const { _id, productName, price, image, description } = product || {};
    
    return (
        <motion.div 
            className="card-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="card-white">
                <div className="card-image-container">
                    <img src={image} alt={productName} className="card-image" />
                
                </div>
                
                <div className="card-content">
                    <h3 className="card-title">{productName}</h3>
                    
                    {description && (
                        <p className="card-description">
                            {description.length > 100 
                                ? `${description.substring(0, 100)}...` 
                                : description}
                        </p>
                    )}
                    
                    <div className="card-actions">
                        <Link to={`/details/${_id}`} className="card-button-link">
                            <motion.button 
                                className="card-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Details
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Cards;