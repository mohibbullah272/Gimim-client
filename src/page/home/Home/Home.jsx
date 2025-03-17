import React from 'react';
import Banner from '../Banner/Banner';
import PopularProduct from '../PopularProduct/PopularProduct';
import FeatureProduct from '../FeatureProduct/FeatureProduct';


const Home = () => {
    return (
        <div>
        <Banner></Banner>
      <PopularProduct></PopularProduct>
      <FeatureProduct></FeatureProduct>
        </div>
    );
};

export default Home;