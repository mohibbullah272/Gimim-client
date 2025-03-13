import Navbar from "@/Components/Navbar";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
        <header className="bg-[#3EB489]">
            <Navbar></Navbar>
        </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>

      </footer>
        </div>
    );
};

export default Main;