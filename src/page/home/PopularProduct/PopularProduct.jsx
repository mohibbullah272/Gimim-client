import img1 from '../../../assets/product1.png'
import img2 from '../../../assets/product2.png'
import img3 from '../../../assets/product3.png'
import img4 from '../../../assets/product4.png'
import img5 from '../../../assets/product5.png'
import img6 from '../../../assets/product6.png'

const PopularProduct = () => {
    return (
        <div className='max-w-7xl mx-auto  my-20'>
            <h3 className="text-3xl  text-center text-gray-800 mb-10">~Popular Products~</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 place-items-center">
  {[img1, img2, img3, img4, img5, img6].map((img, index) => (
    <div key={index} className="w-64 h-64 flex items-center justify-center rounded-full  p-2">
      <img loading='lazy' className="rounded-full w-full h-full object-cover" src={img} alt={`Image ${index + 1}`} />
    </div>
  ))}
</div>


        </div>
    );
};

export default PopularProduct;