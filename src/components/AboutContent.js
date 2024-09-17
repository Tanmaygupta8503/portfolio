import React from 'react'
import "./AboutContentStyles.css";
import { Link } from 'react-router-dom';
const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who am I?</h1>
        <p>I’m Tanmay Gupta, a passionate software developer with expertise in backend technologies and machine learning. I thrive on solving complex problems and am always eager to learn new technologies. With a background in Java, Python, and web development, I aim to create impactful solutions and drive innovation in the tech industry. In my free time, I enjoy working on personal projects and exploring new tech trends.</p>
        <Link to="/contact">
            <button className='btn'>Contact Me</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5wnkpRHfKeDWLdTtEE0my3zYD9HJ734AEA&s"/>
            </div>
            <div className='img-stack bottom'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vW3j4LLshdvw6CcP0JjB-Cqn-dpgB2rOHA&s"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
