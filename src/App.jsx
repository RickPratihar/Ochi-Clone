import React from 'react'
import Navbar from './component/Navbar'
import LandingPage from './component/LandingPage'
import Marque from './component/Marque'
import About from './component/About'
import EyesSection from './component/EyesSection'
import Featured from './component/Featured'
import Review from './component/Review'
import Cards from './component/Cards'
import EyeSection2 from './component/EyeSection2'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-[#F1F1F1]'>
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <EyesSection />
      <Featured />
      <Review/> 
      <Cards/> 
      <EyeSection2/>
      <Footer/>
    </div>
  )
}

export default App