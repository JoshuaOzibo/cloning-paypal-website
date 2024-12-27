import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CheckOutSection from './components/checkOutSection';
import PayNow from './components/PayNow';
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CheckOutSection />
      <PayNow />
    </div>
  )
}

export default App

