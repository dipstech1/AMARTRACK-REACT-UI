import React, { useRef, useState } from 'react'
import SweetAlert2 from 'react-sweetalert2';

const Contact = () => {

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [swalProps, setSwalProps] = useState({});


  const handleContactForm = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value })
  }

  const submitForm = (e) => {
    e?.preventDefault();
    console.log(contactForm);
    setSwalProps({
      show: true,
      title: 'Form Submitted',
      text: 'Email sent',
    });
    setContactForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    });

  }

  return (
    <section className="contact-sec back common-gap" data-section id="contactus">
      <div className="container">
        <div className="cmn-hdr text-center" data-aos="fade-down">
          <h2><span>Contact</span> Us</h2>
        </div>
        <div className="row contact-otr align-items-center">
          <div className="col-lg-6">
            <div data-aos="fade-up-right contactText" style={{ paddingLeft: "150px" }}>
              <h3>Let’s talk.</h3>
              <p className="sub-para">Lorem ipsum dolor sit amet consectetur. Nisi fringilla a sit ut. Urna odio in pretium magna convallis malesuada adipiscing feugiat. Sit ipsum egestas integer eget.</p>
              <ul className="contact-details">
                <li>
                  <div className="contact-icon">
                    <span><i className="fa-solid fa-phone"></i></span>
                  </div>
                  <div className="contact-txt">
                    <h4>Give us a call at:</h4>
                    <a href="tel:9831344637">+91 98313-44637</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <span><i className="fa-solid fa-envelope"></i></span>
                  </div>
                  <div className="contact-txt">
                    <h4>Drop us an email at:</h4>
                    <a href="mailto:primesupport@amartrack.com">primesupport@amartrack.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form" data-aos="fade-up-left">
              <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" required className="form-control" name='name' value={contactForm.name} onChange={handleContactForm} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="tel" placeholder="Your Phone Number" required className="form-control" name='phone' value={contactForm.phone} onChange={handleContactForm} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" placeholder="Your Email ID" required className="form-control" name='email' value={contactForm.email} onChange={handleContactForm} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Subject" required className="form-control" name='subject' value={contactForm.subject} onChange={handleContactForm} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea placeholder="Message" required className="form-control" name='message' value={contactForm.message} onChange={handleContactForm}></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <input type="submit" value="Submit" className="btn submit-btn" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
      <SweetAlert2 {...swalProps} />
    </section>
  )
}

export default Contact