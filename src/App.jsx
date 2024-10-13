import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Contact from './components/Contact/Contact'
import Connect from './components/Connect/Connect'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/FooterBottom/FooterBottom'

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Home />
      <Menu />
      <Contact />
      <Connect />
      <Footer />
      <FooterBottom />
    </div>
  )
}

export default App
