import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
const admin = true 
const links = <div>
{
  admin?<div>



  </div>:
  <div>


  </div>
}

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
        <div className="flex flex-col mt-5 space-y-2">
          <NavLink to="/" className="p-2 rounded hover:bg-gray-700">Home</NavLink>
          <NavLink to="/dashboard" className="p-2 rounded hover:bg-gray-700">Dashboard</NavLink>
          <NavLink to="/settings" className="p-2 rounded hover:bg-gray-700">Settings</NavLink>
          <NavLink to="/profile" className="p-2 rounded hover:bg-gray-700">Profile</NavLink>
        </div>
      </aside>

 
      <section className="col-span-12 lg:col-span-9 p-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius nobis repellat iusto earum delectus, esse eveniet soluta nihil sunt blanditiis repellendus cum hic adipisci repudiandae! 
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
