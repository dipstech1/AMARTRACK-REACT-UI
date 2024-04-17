import React from 'react'
import aboutImg from '../assets/img/about-img.jpg';

const AboutSection = () => {
  return (
    <section className="about-sec back common-gap" data-section id='aboutSec'>
        <div className="container">
          <div className="cmn-hdr text-center" data-aos="fade-down">
            <h2><span>About</span> Us</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6">
              <figure className="about-pic" data-aos="fade-right" data-aos-delay="200"><img className="w-100" src={aboutImg} alt="" /></figure>
            </div>
            <div className="col-xl-6">
              <div className="about-content" data-aos="fade-left" data-aos-delay="300">
                <h3>Our Mission</h3>
                <p>Due to conservative and isolated career tracking, the net data in Career Progression is often lost in translation.</p>
                <p> The <span>Unified PaaS interface</span> that will map application, admission, academics(ERP-LMS), education(added-learning scope), career opportunity(Job-Search), health(EHR/Insurance), transcripts validation & other avenues.</p>
                <div className="mt-30">
                  <h3>Our Vision</h3>
                  <ul>
                    <li>For learners(TAM - 15Lakhs school, 110+ Universities), educators(1Cr+), service-professionals(~45Cr), enterprises(HCM), government, etcetera.</li>
                    <li>Earning revenue through 'analytics prediction', 'enterprise - Talent Acquisition(TA) credential validation', 'e-commerce & OTT edtech marketplace' and other nickel & dime streams.</li>
                    <li>Addressing moral objectives like protecting PII, Gross TA data to Net TA data, advanced HCM solutions, simplifying job-search, recruitment & career planning.</li>
                    <li>Alongside building communities to network, learn & collaborate, across the ecosystem.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection