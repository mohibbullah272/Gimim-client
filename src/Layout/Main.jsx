
import LoadingScreen from "@/page/LoadingScreen/LoadingScreen";
import Footer from "@/Shared/Footer";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
const Navbar =lazy(()=>import('../Components/Navbar'))

const Main = () => {

    return (
 
        <div>
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-opacity-5 ">
       <Suspense fallback={<LoadingScreen></LoadingScreen>}>
       <Navbar></Navbar>
       </Suspense>
        </header>
      <main className="max-w-[1400px] mx-auto min-h-screen mt-[68px]">
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