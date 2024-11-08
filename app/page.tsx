import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'

export default function page() {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection/>
      <Services/>

    </div>
  )
}
