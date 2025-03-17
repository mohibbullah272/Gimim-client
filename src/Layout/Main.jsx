import Navbar from "@/Components/Navbar";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
        <header className="primary">
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