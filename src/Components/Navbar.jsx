import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaBoxes } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { AuthContext } from '@/AuthProvider/AuthProvider';
import userIcon from '../assets/user-icon.png'
const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
  const handleLogout=()=>{
    logout()
    .then(res=>{
      console.log(`user logout `)
    })
  }
   
const links=<>
<NavLink to={'/'}><span className='flex items-center gap-2 hover:text-[#a07032b4]    p-2'> <IoMdHome className='text-xl'/>Home</span></NavLink>
<NavLink to={'/allProduct'}><span className='flex items-center gap-2 hover:text-[#a07032b4]  p-2 '> <FaBoxes className='text-xl'/>All Product</span></NavLink>
<NavLink to={'/aboutUs'}><span className='flex items-center gap-2 hover:text-[#a07032b4]  p-2  '><MdInfo className='text-xl'/>About Us</span></NavLink>
<NavLink to={'/contact'}><span className='flex items-center gap-2 hover:text-[#a07032b4]  p-2'> <FaHeadset className='text-xl'/>Contact</span></NavLink>
</>
    return (
        <div className="navbar  max-w-7xl mx-auto  shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  primary rounded-box z-50 mt-3 w-52 p-2 shadow">
             {
                links
             }
            </ul>
          </div>
          <a className="text-green-950 nav-title text-xl">GIMIM Corporation </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
   {
    links
   }
          </ul>
        </div>
        <div className="navbar-end">
            {
                user? <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="user avatar"
                      src={user?user.photoURL:userIcon} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                
                  <li><Link to={'/dashboard'}>Dashboard</Link></li>
                  <li><a onClick={handleLogout}> Logout</a></li>
                </ul>
              </div>:     <Link to={'/login'}><button className="btn glass primary">Login</button></Link>
            }
     
        </div>
      </div>
    );
};

export default Navbar;