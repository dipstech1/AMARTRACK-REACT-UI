import { useState, useEffect } from "react";
import Banner from '../components/Banner'
import AboutSection from "../components/Section";
import Services from "../components/Services";
import Client from "../components/Client";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
    const [scrolltopdata, setscrolltopdata] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setscrolltopdata(false);
            } else {
                setscrolltopdata(true);
            }
        });
    },[])

    return (
        <>
             <Header isScrolled = {scrolltopdata} />
            <Banner />
            <AboutSection />
            <Services />
            <Client />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

export default Home