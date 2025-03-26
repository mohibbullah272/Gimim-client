
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
const admin = true 
const linkStyles = {
  default: "p-2 rounded hover:bg-gray-700 transition-colors duration-200",
  active: "bg-gray-800 text-white font-semibold"
};
const links = <div>
{admin ? (
  <div className="flex flex-col mt-5 space-y-2">
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Home
    </NavLink>
    
    <NavLink 
      to="/dashboard" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Dashboard
    </NavLink>
    
    <NavLink 
      to="/dashboard/user" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Users
    </NavLink>
    
    <NavLink 
      to="/dashboard/addProduct" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Add Product
    </NavLink>
    
    <NavLink 
      to="/dashboard/manage-product" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Manage Product
    </NavLink>
    
    <div className="divider my-2 text-gray-500">~~~</div>
    
    <NavLink 
      to="/privacyPolicy" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Privacy Policy
    </NavLink>
    
    <NavLink 
      to="/termsOfService" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Terms of Service
    </NavLink>
  </div>
) : (
  <div className="flex flex-col mt-5 space-y-2">
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Home
    </NavLink>
    
    <NavLink 
      to="/dashboard" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Dashboard
    </NavLink>
    
    <NavLink 
      to="/dashboard/profile" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Profile
    </NavLink>
    
    <NavLink 
      to="/dashboard/cart" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      My Cart
    </NavLink>
    
    <NavLink 
      to="/dashboard/orders" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Orders
    </NavLink>
    
    <div className="divider my-2 text-gray-500">~~~</div>
    
    <NavLink 
      to="/privacyPolicy" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Privacy Policy
    </NavLink>
    
    <NavLink 
      to="/termsOfService" 
      className={({ isActive }) => 
        `${linkStyles.default} ${isActive ? linkStyles.active : ''}`
      }
    >
      Terms of Service
    </NavLink>
  </div>
)}
</div>



  const toggleMenu = () => setIsOpen(!isOpen);


  const closeMenu = (e) => {
    if (!e.target.closest(".dashboard-menu")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-screen">
   
      <button 
        className={`lg:hidden absolute top-0  ${isOpen?'left-52':'left-0'} z-50 p-2 primary text-white rounded-md`}
        onClick={toggleMenu}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`dashboard-menu primary text-white p-5 min-h-screen 
        lg:col-span-3 lg:block 
        ${isOpen ? "fixed top-0 left-0 w-64 h-full shadow-lg" : "hidden"}
        transition-all duration-300`}
        onClick={closeMenu}
      >
{links}
      </aside>

 
      <section className="col-span-12 lg:col-span-9 ">
     <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Dashboard;
