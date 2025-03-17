
import img1 from '../../assets/product5.png'
import deliveryLogo from '../../assets/delivry.png'
import returnLogo from '../../assets/icons8-return-30.png'
import tkLogo from '../../assets/taka.png'
import { useState } from 'react';
const Details = () => {
   const [quantity,setQuantity]=useState(0)
    return (
        <div className='max-w-7xl mx-auto  flex md:flex-row flex-col   items-start'>
        <div className='md:w-1/2 w-full  p-5'>
        <img  src={img1} alt="" />
        </div>
<div className='md:w-1/2 w-full p-5 md:mt-16'>
    <h3 className='text-xl '>Strong Bond Adhesive (super glue)</h3>
    <p>Dramatically formulate client-centered paradigms vis-a-vis stand-alone vortals. Authoritatively actualize turnkey total linkage without premier human capital. Credibly cultivate world-class.</p>
    <div className="rating mt-4">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
<p className='flex my-3 items-center gap-3'><img className='w-4' src={tkLogo} alt="" />700</p>
<div>
<p className='flex items-center gap-3'><img className='w-6' src={deliveryLogo} alt="" />Standard Delivery Time</p>
<p className='text-gray-500 ml-10'>7 to 16 days</p>
</div>
 <p className='flex text-gray-500 items-center gap-3'><img className='w-6' src={returnLogo} alt="" />7 days return policy</p>
 <div className='flex items-center gap-5'>
    <p>Quantity</p>
    <button 
        onClick={() => quantity > 0 && setQuantity(quantity - 1)} 
        className='btn accent'
    >
        -
    </button>
    <p>{quantity}</p>
    <button 
        onClick={() => setQuantity(quantity + 1)} 
        className='btn accent'
    >
        +
    </button>
</div>
<div className='flex justify-end mt-5 items-center gap-5'>
<button className='btn secondary'>Buy Now</button>
<button className='btn primary'>Add To cart</button>
</div>
</div>

        </div>
    );
};

export default Details;