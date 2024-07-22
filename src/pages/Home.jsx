import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="hero-section">
            <h1>Discover the Ultimate Mobile Sauna Experience</h1>
            <h2>
                Relax and rejuvenate with our luxurious mobile saunas, available at your doorstep.
                Perfect for personal use, events, or corporate wellness.
                Book your sauna today and enjoy a unique wellness experience anywhere, anytime.
            </h2>
            <Link to="saunas" className="hero-btn button">Find My Sauna</Link>
        </section>
    )
}

export default Home