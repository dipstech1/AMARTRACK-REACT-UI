import React from 'react'

const Footer = () => {
    return (
        <footer className="footer common-gap no-gap-bottom">
            <div className="container">
                <ul className="social-icon">
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
                <ul className="footer-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-wrapper">
                        <p>© AMARTRACK™ 2024 . All rights reserved.</p>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer