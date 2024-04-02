import React from 'react'
import Hero from './Hero'
import Circle from './Circle'
import News from './News'
import Partners from './Partners'
import Footer from '../../Components/Footer/Footer'

export default function MainHome() {
  return (
    <div>
      <Hero/>
      <Circle/>
      <News/>
      <Partners/>
      <Footer/>
    </div>
  )
}
