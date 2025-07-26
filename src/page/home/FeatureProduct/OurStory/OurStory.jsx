import Title from '@/Components/Title';
import officeImg from '../../../../assets/gimim-office.jpg'
import { FaHistory } from 'react-icons/fa';
const OurStory = () => {
    return (
       
           <section className="max-w-7xl mx-auto mb-16">
            <Title title={"Our Journey"} description={"Discover how Gimim Corporation built a reputation for quality, consistency, and wholesale excellence"}></Title>
           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
             <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="p-8 lg:p-12">
                
                 <div className="space-y-4 text-gray-600">
                 <p>
 GIMIM CORPORATION was born not out of wealth, but out of pure hustle and vision. The founder started with nothing—no capital, no big setup—just a strong will to build something of his own.
</p>
<p>
  After much thought and discussion with a few close friends, he decided to step into the adhesive industry. With a small batch of imported super glue, he began the journey—personally handling marketing, traveling place to place, spreading the word, and introducing the product himself.
</p>
<p>
  Over time, his dedication and consistent effort built a strong network. As demand grew, he scaled up imports and shifted toward wholesale distribution. Today,  GIMIM CORPORATION isn’t just a business—it’s the backbone for many sellers who rely on his trusted adhesive products.
</p>
<p>
  The founder still focuses on quality above all, carefully selecting and testing every adhesive before offering it to customers—ensuring only the best reaches the market.
</p>

                 </div>
                 <div className="mt-8 flex items-center">
                   <FaHistory className="text-[#FF9F1C] text-3xl mr-4" />
                   <div>
                     <h3 className="font-semibold text-gray-800">Est. 2014</h3>
                     <p className="text-gray-600">11 years of adhesive excellence</p>
                   </div>
                 </div>
               </div>
               <div className=" flex items-center justify-center p-8">
                 <img 
                   src={officeImg}
                   alt="SuperGlue Wholesale Facility" 
                   className="rounded-lg shadow-md" 
                 />
               </div>
             </div>
           </div>
         </section>
    );
};

export default OurStory;