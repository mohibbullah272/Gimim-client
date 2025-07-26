import ChatBot from "@/page/Chatbot/Chatbot";
import Banner from "../Banner/Banner";
import FeatureProduct from "../FeatureProduct/FeatureProduct";
import OurStory from "../FeatureProduct/OurStory/OurStory";
import OurMembers from "../OurTeam/OurTeam";
import OurValue from "../OurValue/OurValue";
import AutoPlayVideo from "../Video/FacebookVideo";
import OurBranches from "../our brance/OurBranch";
import OurOtherCompany from "./OurOtherCompany/OurOtherCompany";
import OurExpertise from "../Experties/OurExperties";
import WhyChose from "../WhyChose/WhyChose";
import FAQ from "@/Components/FaqSection";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
      <FeatureProduct></FeatureProduct>
      <OurValue></OurValue>
      <OurStory></OurStory>
    <AutoPlayVideo></AutoPlayVideo>
      <OurMembers></OurMembers>
      <ChatBot></ChatBot>
      <OurBranches></OurBranches>
      <OurOtherCompany></OurOtherCompany>
      <OurExpertise></OurExpertise>
      <WhyChose></WhyChose>
      <FAQ></FAQ>
        </div>
    );
};

export default Home;