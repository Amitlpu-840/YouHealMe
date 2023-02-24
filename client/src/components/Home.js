import React from 'react'
import About from './About'
import Features from './Features'
import Testimonials from './Testimonials'
import CtaSection from './CtaSection'

import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from './Hero'
function Home() {
    Aos.init({
        duration: 300,
        offset: 0,
      });
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
    </div>
  )
}

export default Home