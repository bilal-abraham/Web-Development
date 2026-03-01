import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/about/AboutHero'
import AboutJourney from '../components/about/AboutJourney'
import AboutTeam from '../components/about/AboutTeam'

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <AboutHero />
        <AboutJourney />
        <AboutTeam />
      </main>
      <Footer />
    </Fragment>
  )
}

export default About
