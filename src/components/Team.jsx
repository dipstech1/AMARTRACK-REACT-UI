import React from 'react'
import teamImg from '../assets/img/team-img.png';


const Team = () => {
  return (
    <section className="team-sec common-gap">
    <div className="container">
      <div className="cmn-hdr text-center" data-aos="fade-down">
        <h2>Meet <span> Our Team</span></h2>
      </div>
      <div className="team-wrapper text-center">
        <div className="team-innr" data-aos="fade-right" data-aos-delay="200">
          <figure><img src={teamImg} alt="" /></figure>
          <h5>John Doe</h5>
          <h6>Designation</h6>
        </div>
        <div className="team-innr" data-aos="fade-right" data-aos-delay="300">
          <figure><img src={teamImg} alt="" /></figure>
          <h5>John Doe</h5>
          <h6>Designation</h6>
        </div>
        <div className="team-innr" data-aos="fade-right" data-aos-delay="400">
          <figure><img src={teamImg} alt="" /></figure>
          <h5>John Doe</h5>
          <h6>Designation</h6>
        </div>
        <div className="team-innr" data-aos="fade-right" data-aos-delay="500">
          <figure><img src={teamImg} alt="" /></figure>
          <h5>John Doe</h5>
          <h6>Designation</h6>
        </div>
        <div className="team-innr" data-aos="fade-right" data-aos-delay="600">
          <figure><img src={teamImg} alt="" /></figure>
          <h5>John Doe</h5>
          <h6>Designation</h6>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Team