import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeHero from '../components/home/HomeHero'
import HomeValues from '../components/home/HomeValues'
import HomeProduct from '../components/home/HomeProduct'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <HomeHero />
        <HomeValues />
        <HomeProduct />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home