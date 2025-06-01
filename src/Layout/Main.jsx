
import LoadingScreen from "@/page/LoadingScreen/LoadingScreen";
import Footer from "@/Shared/Footer";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
const Navbar =lazy(()=>import('../Components/Navbar'))

const Main = () => {

    return (
 
        <div>
        <header className="primary">
       <Suspense fallback={<LoadingScreen></LoadingScreen>}>
       <Navbar></Navbar>
       </Suspense>
        </header>
      <main>
      <Suspense fallback={<LoadingScreen></LoadingScreen>}>
        <Outlet></Outlet>
       </Suspense>
      </main>
      <footer>
<Footer></Footer>
      </footer>
        </div>
    );
};

export default Main;