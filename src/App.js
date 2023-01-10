import React from 'react'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import Faqs from './sections/faqs/Faqs'
import FloatingNav from './sections/floating-nav/FloatingNav'
import Footer from './sections/footer/Footer'
import Header from './sections/header/Header'
import Navbar from './sections/navbar/Navbar'
import Portfolio from './sections/portfolio/Portfolio'
import Services from './sections/services/Services'
import Testimonial from './sections/testimonials/Testimonial'


const App = () => {
  return (
    <main>
        <h1>Hello</h1>
        <About />
        <Contact />
        <Faqs />
        <FloatingNav />
        <Footer />
        <Header />
        <Navbar />
        <Portfolio />
        <Services />
        <Testimonial />
    </main>
  )
}

export default App