import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Features from '../sections/Features'
import Gallery from '../sections/Gallery'
import BMI from '../sections/BMI'
import Contact from '../sections/Contact'
import Pricing from '../sections/Pricing'
import Team from '../sections/Team'

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Services />
            <Gallery />
            <Team />
            <BMI />
            <Pricing />
            <Contact />
        </div>
    )
}

export default Home
