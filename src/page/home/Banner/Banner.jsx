
import bannerImg from '../../../assets/banner.png'

const Banner = () => {
  
    return (
<div className='relative'>
    <img src={bannerImg}  />

<div className='absolute md:top-40 top-10'>
<h3 className='md:text-3xl text-2xl p-2  text-green-950'>GIMIM CORPORATION</h3>
<p className='text-green-900 p-2 w-1/2 '>Premium Super Glue at Wholesale Prices – Strong, Reliable, and Affordable! "
 </p>


</div>
</div>
    );
};

export default Banner;