import React from 'react'
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav>
        <div>
            <h1 >GOMEDIC</h1>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className="btn-book-now">
            <button>Book Now</button>
        </div>
    </nav>
  )
}

export default Navigation