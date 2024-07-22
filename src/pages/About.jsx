import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../images/about-img.jpg'

const About = () => {
    return (
        <section className="about-section">
            <img src={aboutImg} className="about-img"/>
            <div className="about-section-content">
                <div className="about-section-text">
                    <h1>Keep it simple. Why settle for ordinary when you can indulge in extraordinary?</h1>
                    <p>
                        Our mission is to elevate your wellness journey with the perfect mobile sauna experience.
                        Each of our saunas is meticulously checked and rejuvenated before every rental to ensure your relaxation is uninterrupted.
                        <br />
                        <br />
                        Our team is passionate about wellness and understands the transformative power of a good sauna session.
                        We are dedicated to bringing you a luxurious and seamless experience, right at your doorstep.
                    </p>
                </div>
                <div className="about-section-card">
                    <h2>
                        Your perfect retreat awaits.
                        <br />
                        Your mobile sauna is ready.
                    </h2>
                    <Link to="/saunas" className="about-btn button">Explore our saunas</Link>
                </div>
            </div>
        </section>
    )
}

export default About