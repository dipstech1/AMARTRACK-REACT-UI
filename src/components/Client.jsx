import React from 'react'
import commaImg from '../assets/img/comma.svg';
import imageImg from '../assets/img/image.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Client = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <section className="clients-sec back common-gap" id="testimonial">
    <div className="container">
      <div className="cmn-hdr text-center" data-aos="fade-down">
        <h2>Happy <span>Clients</span></h2>
      </div>
      <div className="clients-wrapper-area">
      <Slider {...settings}>
        <div className="clients-wrapper" data-aos="fade-up">
          <span className="comma"><img src={commaImg} alt="" /></span>
          <div className="clients-pic"><img src={imageImg} alt="" /></div>
          <h5>John Doe</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Porta consectetur cursus et semper sit mattis. Tempor aliquam augue auctor ac interdum nunc vitae. Nisi placerat sed malesuada tincidunt natoque in pharetra tellus. A porta posuere viverra enim mi vel. Velit at in convallis id vel. Sagittis sed id urna phasellus auctor id elit. Eget pretium hendrerit donec quam mi non volutpat commodo.</p>
        </div>
        <div className="clients-wrapper" data-aos="fade-up">
          <span className="comma"><img src={commaImg} alt="" /></span>
          <div className="clients-pic"><img src={imageImg} alt="" /></div>
          <h5>John Doe</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Porta consectetur cursus et semper sit mattis. Tempor aliquam augue auctor ac interdum nunc vitae. Nisi placerat sed malesuada tincidunt natoque in pharetra tellus. A porta posuere viverra enim mi vel. Velit at in convallis id vel. Sagittis sed id urna phasellus auctor id elit. Eget pretium hendrerit donec quam mi non volutpat commodo.</p>
        </div>
        <div className="clients-wrapper" data-aos="fade-up">
          <span className="comma"><img src={commaImg} alt="" /></span>
          <div className="clients-pic"><img src={imageImg} alt="" /></div>
          <h5>John Doe</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Porta consectetur cursus et semper sit mattis. Tempor aliquam augue auctor ac interdum nunc vitae. Nisi placerat sed malesuada tincidunt natoque in pharetra tellus. A porta posuere viverra enim mi vel. Velit at in convallis id vel. Sagittis sed id urna phasellus auctor id elit. Eget pretium hendrerit donec quam mi non volutpat commodo.</p>
        </div>
        <div className="clients-wrapper" data-aos="fade-up">
          <span className="comma"><img src={commaImg} alt="" /></span>
          <div className="clients-pic"><img src={imageImg} alt="" /></div>
          <h5>John Doe</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Porta consectetur cursus et semper sit mattis. Tempor aliquam augue auctor ac interdum nunc vitae. Nisi placerat sed malesuada tincidunt natoque in pharetra tellus. A porta posuere viverra enim mi vel. Velit at in convallis id vel. Sagittis sed id urna phasellus auctor id elit. Eget pretium hendrerit donec quam mi non volutpat commodo.</p>
        </div>

        <div className="clients-wrapper" data-aos="fade-up">
          <span className="comma"><img src={commaImg} alt="" /></span>
          <div className="clients-pic"><img src={imageImg} alt="" /></div>
          <h5>John Doe</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Porta consectetur cursus et semper sit mattis. Tempor aliquam augue auctor ac interdum nunc vitae. Nisi placerat sed malesuada tincidunt natoque in pharetra tellus. A porta posuere viverra enim mi vel. Velit at in convallis id vel. Sagittis sed id urna phasellus auctor id elit. Eget pretium hendrerit donec quam mi non volutpat commodo.</p>
        </div>
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default Client