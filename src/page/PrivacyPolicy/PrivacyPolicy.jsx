import logo from '../../assets/gimim-logo.png'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header */}
      <header className=" text-white py-6 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Privacy Policy</h1>
          <img 
               loading='lazy'
            src={logo}
            alt="Gimim Corporation Logo" 
            className="w-16 h-16 rounded-full"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8 flex-grow">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
          {/* Company Introduction */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-[#FF9F1C] mb-4">
              Gimim Corporation Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              Established in 2014, Gimim Corporation is a leading wholesale supplier of strong adhesive solutions in Dhaka, Bangladesh. We are committed to protecting your personal information and ensuring transparency in our data practices.
            </p>
          </section>

          {/* Privacy Policy Sections */}
          <div className="space-y-6">
            {[
              {
                title: "Information We Collect",
                content: "We collect personal information that you provide directly to us, including name, contact details, shipping address, and payment information when you make a purchase."
              },
              {
                title: "How We Use Your Information",
                content: "We use your personal information to process orders, provide customer support, communicate about products, and improve our services. We ensure all data is handled securely and confidentially."
              },
              {
                title: "Data Security",
                content: "All online payments are secured with advanced encryption. Our systems are licensed and comply with Bangladesh government regulations for data protection and e-commerce."
              },
              {
                title: "Product Licensing",
                content: "All adhesive products sold on our platform are fully licensed and approved by the relevant Bangladesh government authorities, ensuring highest quality and safety standards."
              }
            ].map((section, index) => (
              <div key={index} className="border-l-4 border-[#FF9F1C] pl-4">
                <h3 className="text-lg font-semibold text-[#FF9F1C] mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-[#FFB941] bg-opacity-10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#FF9F1C] mb-3">
              Contact Us
            </h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Address:</strong> Dhaka, Bangladesh</p>
              <p><strong>Email:</strong> gimimcorporationbd@gmail.com</p>
              <p><strong>Last Updated:</strong> March 2024</p>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
};

export default PrivacyPolicy;