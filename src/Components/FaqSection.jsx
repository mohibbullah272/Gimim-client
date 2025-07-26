import { useState } from 'react';
import { AnimatePresence, motion } from "motion/react"
import Title from './Title';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Color theme matching the banner
  const colors = {
    primary: "#FF9F1C",
    secondary: "#CBF3F0", 
    accent: "#FFB941",
    card: "#CBF3F0"
  };

  const faqData = [
    {
      id: 1,
      question: "What types of adhesive products does GIMIM Corporation offer?",
      answer: "GIMIM Corporation specializes in importing and wholesaling premium super glues, emergency adhesives, industrial-grade bonding solutions, and specialty adhesive drums. We offer a comprehensive range of products suitable for both industrial and commercial applications."
    },
    {
      id: 2,
      question: "Do you supply products across Bangladesh?",
      answer: "Yes, we are a leading wholesaler serving clients throughout Bangladesh. We have established distribution networks to ensure timely delivery of our premium adhesive products to retailers, manufacturers, and industrial clients nationwide."
    },
    {
      id: 3,
      question: "What is the minimum order quantity for wholesale purchases?",
      answer: "Our minimum order quantities vary depending on the product type. For super glue products, we typically require minimum orders of 50 units, while for industrial drums, the minimum is usually 10 units. Contact us for specific MOQ details for your required products."
    },
    {
      id: 4,
      question: "Are your adhesive products suitable for industrial applications?",
      answer: "Absolutely! Our imported super glues and adhesive products are specifically selected for their high-performance capabilities. They are suitable for various industrial applications including manufacturing, construction, automotive, and specialized bonding requirements."
    },
    {
      id: 5,
      question: "How can I become a retailer or distributor for GIMIM products?",
      answer: "We welcome partnerships with qualified retailers and distributors. To become a partner, you'll need to meet our minimum volume requirements and have appropriate storage facilities. Please contact our sales team to discuss partnership opportunities and requirements."
    },
    {
      id: 6,
      question: "What quality standards do your imported products meet?",
      answer: "All our imported adhesive products meet international quality standards and undergo rigorous quality control checks. We source from certified manufacturers and ensure that every product meets safety and performance specifications before distribution."
    },
    {
      id: 7,
      question: "Do you provide technical support for product applications?",
      answer: "Yes, our experienced team provides comprehensive technical support to help customers select the right adhesive solutions for their specific applications. We offer guidance on product usage, application methods, and troubleshooting."
    },
    {
      id: 8,
      question: "What are your payment terms for wholesale orders?",
      answer: "We offer flexible payment terms for our wholesale clients, including cash on delivery, bank transfers, and credit facilities for established customers. Payment terms typically range from immediate payment to 30-day credit periods based on order volume and customer relationship."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16" >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
  
        <Title title={'Frequently Asked Questions'} description={" Find answers to common questions about GIMIM Corporation's adhesive products and wholesale services"}></Title>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-l-4"
              style={{ borderLeftColor: colors.primary }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Question */}
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: colors.primary }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="px-6 py-5 border-t"
                      style={{ backgroundColor: `${colors.accent}15` }}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

   
      </div>
    </div>
  );
};

export default FAQ;