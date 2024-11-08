import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import WhereToBuy from './components/WhereToBuy'
import AppDownloadBanner from './components/AppDownloadBanner'
import Footer from './components/Footer'

export default function page() {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection/>
      <Services/>
      <WhereToBuy/>
      <AppDownloadBanner/>
      <Footer/>

    </div>
  )
}
