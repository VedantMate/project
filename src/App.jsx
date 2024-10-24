import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Discover from './Components/Discover'
import Services from './Components/Services'
import Products from './Components/Products'
import Spotlight from './Components/Spotlight'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className='absolute top-[1165px]'>
        <Discover />
        <Services />
        <Products />
        <Spotlight />
        <Footer />
      </div>
    </div>
  )
}

export default App