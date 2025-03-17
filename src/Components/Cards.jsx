import { Link } from 'react-router-dom';
import img1 from '../assets/product2.png'
import tkIcon from '../assets/taka.png'
const Cards = () => {
    return (
        <div className='bg-white/50 shadow rounded-2xl p-3 '>
            <img src={img1} alt="" />
          <div className='p-2'>
          <h3>Super Glue </h3>
          <p className='flex items-center gap-2'><img className='w-4' src={tkIcon} alt="taka-icon" />500</p>
          <div className='flex justify-end'>
    <Link to={'/details/1'}>
    <button className='btn primary '>
                View Details
            </button>
    </Link>
          </div>
          </div>
        </div>
    );
};

export default Cards;