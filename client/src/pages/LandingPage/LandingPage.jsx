import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './styles/style.css'
import './styles/lineIcons.css'
import './styles/default.css'
import Home from '../../components/Home/Home'
import Services from '../../components/Services/Services'
import Pricing from '../../components/Pricing/Pricing'
import SubscribeArea from '../../components/SubscribeArea/SubscribeArea'
import Testimonial from '../../components/Testimonial/Testimonial'
import ClientLogoArea from '../../components/ClientLogoArea/ClientLogoArea'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Services/>
        <Pricing/>
        <SubscribeArea/>
        <Testimonial/>
        <ClientLogoArea/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default LandingPage