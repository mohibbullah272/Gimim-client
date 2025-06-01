import React from 'react';
import Banner from '../Banner/Banner';
import PopularProduct from '../PopularProduct/PopularProduct';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import OurStory from '../FeatureProduct/OurStory/OurStory';
import OurExpertise from '../Experties/OurExperties';
import OurValue from '../OurValue/OurValue';
import WhyChose from '../WhyChose/WhyChose';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import FacebookVideo from '../Video/FacebookVideo';


const Home = () => {
    return (
        <div>
        <Banner></Banner>
      <FeatureProduct></FeatureProduct>
      <OurStory></OurStory>
      <FacebookVideo></FacebookVideo>
      <OurValue></OurValue>
      <OurExpertise></OurExpertise>
      <WhyChose></WhyChose>
        </div>
    );
};

export default Home;