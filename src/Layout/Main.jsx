import ScrollToTop from "@/Components/ScrollToTop";
import LoadingScreen from "@/page/LoadingScreen/LoadingScreen";
import Footer from "@/Shared/Footer";
import { Suspense, useEffect, useState } from "react";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Navbar = lazy(() => import("../Components/Navbar"));

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Check if all images loaded
  useEffect(() => {
    const handleLoad = () => {
      // Wait for a tiny delay to ensure all transitions done
      setTimeout(() => setIsLoading(false), 500);
    };

    const allImages = Array.from(document.images);
    const allLoaded = allImages.every((img) => img.complete);

    if (allLoaded) {
      handleLoad();
    } else {
      allImages.forEach((img) => img.addEventListener("load", handleLoad));
      // Optional: Listen for errors too
      allImages.forEach((img) => img.addEventListener("error", handleLoad));
    }

    return () => {
      allImages.forEach((img) => img.removeEventListener("load", handleLoad));
      allImages.forEach((img) => img.removeEventListener("error", handleLoad));
    };
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-opacity-5 ">
      
          <Navbar />
    
      </header>
      <main className="max-w-[1400px] mx-auto min-h-screen mt-[68px]">
        <Suspense fallback={<LoadingScreen />}>
          <ScrollToTop />
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
