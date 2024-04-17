import React from 'react'
import icon1Img from '../assets/img/icon1.svg';
import icon2Img from '../assets/img/icon2.svg';
import icon3Img from '../assets/img/icon3.svg';
import icon4Img from '../assets/img/icon4.svg';
import icon5Img from '../assets/img/icon5.svg';

const Services = () => {
  return (
    <section className="services-sec common-gap">
        <div className="container">
          <div className="cmn-hdr text-center" data-aos="fade-down">
            <h2>Our <span>Services</span></h2>
            <p>5 Fundamental principles of education system</p>
          </div>
          <div className="services-wrapper">
            <div className="services-innr" data-aos="fade-up" data-aos-delay="200">
              <div className="service-box">
                <span className="serv-icon"><img src={icon1Img} alt="" /></span>
                <h4>School & College ERP Solutions</h4>
                <p>Integrated School and College ERP solutions streamline administrative tasks, enhance communication, and facilitate efficient management of academic processes for seamless educational operations.</p>
              </div>
            </div>
            <div className="services-innr" data-aos="fade-up" data-aos-delay="300">
              <div className="service-box">
                <span className="serv-icon"><img src={icon2Img} alt="" /></span>
                <h4>University ERP</h4>
                <p>University ERP systems provide comprehensive management solutions, integrating academic, administrative, and financial functions for efficient and organized campus operations.</p>
              </div>
            </div>
            <div className="services-innr" data-aos="fade-up" data-aos-delay="400">
              <div className="service-box">
                <span className="serv-icon"><img src={icon3Img} alt="" /></span>
                <h4>Recruiter ERP</h4>
                <p>Recruiter ERP solutions optimize hiring processes by automating recruitment tasks, enhancing candidate tracking, and providing data-driven insights for effective talent management.</p>
              </div>
            </div>
            <div className="services-innr" data-aos="fade-up" data-aos-delay="500">
              <div className="service-box">
                <span className="serv-icon"><img src={icon4Img} alt="" /></span>
                <h4>EHR</h4>
                <p>Electronic Health Records (EHR) digitally centralize patient information, improving healthcare coordination, accessibility, and decision-making for enhanced patient care.</p>
              </div>
            </div>
            <div className="services-innr" data-aos="fade-up" data-aos-delay="600">
              <div className="service-box">
                <span className="serv-icon"><img src={icon5Img} alt="" /></span>
                <h4>AMSAT Standardized Test</h4>
                <p>The AMSAT Standardized Test establishes a global benchmark for subject-specific and className-specific proficiency, generating a universal score to standardize academic assessments worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services