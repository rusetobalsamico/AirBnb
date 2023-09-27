import React from 'react';
import imgHero from './../../public/images/hero-img.jpg';

import './Hero.css'

function Hero() {
    return(
        <section className="hero">
            <img src={imgHero} alt="Hero image" className="hero--img" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without living home.</p>
        </section>
    )
}

export default Hero;