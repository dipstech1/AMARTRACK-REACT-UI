import React from 'react'
import Banner from '../components/Banner'
import AboutSection from "../components/Section";
import Services from "../components/Services";
import Client from "../components/Client";
import Team from "../components/Team";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <Banner />
            <AboutSection />
            <Services />
            <Client />
            <Team />
            <Contact />
        </>
    )
}

export default Home