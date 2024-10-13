import React from 'react';
import "./Contact.css"
import Image from "../../assets/image.jpg"

const Contact = () => {
  return (
    <div className='contact-block'>
        <div className="contact-input">
            <p>Contact</p><br />
            <h1>Get in touch with Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur </p>
            <form action="">
                <div className="form-input">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                </div>
                <div className="form-input">
                    <input type="text" placeholder='Phone Number' />
                    <input type="text" placeholder='Subject' />
                </div>
                <div className="form-input">
                        <textarea name="" id="" rows="9" cols="54">
                        </textarea>
                </div>
                <div className="form-input">
                    <button className='btn-send-message'>Send Message</button>
                </div>

            </form>
        </div>
        <div className="contact-image">
                <div className="contact-image-block">
                   <div className="image-contact">
                        <img src={ Image } alt="" />
                   </div>
                </div>
        </div>
    </div>
  )
}

export default Contact