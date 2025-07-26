import Title from "@/Components/Title";
import { FaCheckCircle, FaHandshake, FaTrophy } from "react-icons/fa";

const OurValue = () => {
    return (
        <section className="max-w-7xl mx-auto mb-16">
      <Title title={"What We Stand For"} description={"We're committed to delivering premium quality at wholesale value every time"}></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#FF9F1C] inline-flex p-4 rounded-full mb-6">
              <FaCheckCircle className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Excellence</h3>
            <p className="text-gray-600">
              We rigorously test all our products to ensure they meet the highest standards of performance and reliability.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#FF9F1C] inline-flex p-4 rounded-full mb-6">
              <FaHandshake className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Partnership</h3>
            <p className="text-gray-600">
              We view our customers as partners, working closely with them to understand their needs and provide tailored solutions.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-[#FF9F1C] inline-flex p-4 rounded-full mb-6">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously invest in research and development to create next-generation adhesive technologies.
            </p>
          </div>
        </div>
      </section>
    );
};

export default OurValue;