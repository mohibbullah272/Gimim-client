import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiChevronDown, FiChevronUp, FiGrid, FiList, FiSearch } from 'react-icons/fi';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Cards from '@/Components/Cards';
import './AllProduct.css';

const AllProduct = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid');

    const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://gimim-server.vercel.app/products`);
            setProducts(data);
        } catch (err) {
            console.log(`error was ${err}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Bubble animation variants
    const bubbleVariants = {
        animate: {
            y: [0, -10, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.1, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    };



    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="all-products-container">
            {/* Background bubbles */}
            <div className="bubble-background">
                {[...Array(10)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="bubble"
                        variants={bubbleVariants}
                        animate="animate"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
className='flex justify-center flex-col gap-6 my-10 z-50'>
<h3 className='z-50 text-center text-3xl'>Stick with the Best – Explore All Products</h3>
<p className=' text-center mx-auto z-50'>From fast fixes to industrial strength bonds, our full range of superglue products has you covered. Browse, compare, and find the perfect adhesive for every job—big or small.
</p>
</motion.div>

            {/* Products Grid */}
            <motion.div 
                className={`products-container ${viewMode}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {products.length > 0 ? (
                    products.map(product => (
                        <motion.div
                            key={product._id}
                            className="card-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ 
                                y: -10, 
                                boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                            }}
                        >
                            <Cards product={product} />
                        </motion.div>
                    ))
                ) : (
                    <div className="no-products">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            No products found. Try adjusting your filters.
                        </motion.div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default AllProduct;