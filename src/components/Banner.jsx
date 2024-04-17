import React from 'react'
import bannerImg from '../assets/img/banner-img.png';

const Banner = () => {
  return (
    <section className="banner-sec" id='heroSec'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="banner-content">
            <h1 data-aos="fade-right">A Career <span>Augmenting</span> Service Platform</h1>
            <p data-aos="fade-right" data-aos-delay="200">Welcome to the forefront of education innovation, where cutting-edge technology converges with the quest for knowledge.</p>
            <a href="javascript:void(0);" className="btn" data-aos="fade-right" data-aos-delay="300">Try Now</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="banner-pic" data-aos="fade-left" data-aos-delay="400"><img className="w-100" src={bannerImg} alt="" /></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner