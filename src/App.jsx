import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Router from './routes'

function App() {
  const [scrolltopdata, setscrolltopdata] = useState(false);

  useEffect(() => {
      AOS.init({
        duration: 1200,
        once: true,
      });
      AOS.refresh();

      window.addEventListener('scroll', () => {
        if (window.scrollY < 15) {
            setscrolltopdata(false);
        } else {
            setscrolltopdata(true);
        }
    });

  }, []);

  return (
    <>

      <Header isScrolled = {scrolltopdata} />
      <div>
      <Router />

      </div>

      <Footer />
    </>
  )
}

export default App
