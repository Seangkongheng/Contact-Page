import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-block'>
        <div className="footer-des">
            <h1>GOMEDIC</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laudantium officia itaque cupiditate ea dolor nostrum voluptates! Hic atque</p>
        </div>
        <div className="footer-menu">
            <h1>Information</h1>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>Sevice</li>
            <li>Contact</li>
        </div>
        <div className="footer-information">
            <h1>Contact</h1>
            <li>Location :Pnom Penh</li>
            <li>Phone: 0969907215</li>
            <li>Email :konghengseang878@gmail.com</li>
            
        </div>
    </div>
  )
}

export default Footer