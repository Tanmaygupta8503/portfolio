import React from 'react'
import "./FormStyles.css";

const Form = () => {
  return (
    <div className='form'>
      <form action="https://formspree.io/f/mgvwbnwv" method="POST">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Enter your name" required />
        
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Enter your email" required />
        
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="6" placeholder="Enter your message" required></textarea>
        
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
