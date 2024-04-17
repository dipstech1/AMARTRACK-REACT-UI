import React from 'react'
import commaImg from '../assets/img/comma.svg';
import imageImg from '../assets/img/image.png';

const Client = () => {
  return (
    <section className="clients-sec back common-gap">
    <div className="container">
      <div className="cmn-hdr text-center" data-aos="fade-down">
        <h2>Happy <span>Clients</span></h2>
      </div>
      <div className="clients-wrapper-area">
        <div className="clients-wrapper" data-aos="fade-up">
          <span className="comma"><img src={commaImg} alt="" /></span>
          <figure className="clients-pic"><img src={imageImg} alt="" /></figure>
          <h5>John Doe</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Porta consectetur cursus et semper sit mattis. Tempor aliquam augue auctor ac interdum nunc vitae. Nisi placerat sed malesuada tincidunt natoque in pharetra tellus. A porta posuere viverra enim mi vel. Velit at in convallis id vel. Sagittis sed id urna phasellus auctor id elit. Eget pretium hendrerit donec quam mi non volutpat commodo.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Client