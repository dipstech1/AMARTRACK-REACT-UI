import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>

      <Header />

      <Home />

      <Footer />
    </>
  )
}

export default App
