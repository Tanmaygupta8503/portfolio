import React from 'react';
import "./HeroImgStyles.css";
import introimg from "../assets/gear.jpg";
import { Link } from 'react-router-dom';
const HeroImg = props => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={introimg} alt = "intro img"/>
      </div>
      <div className='content'>
        <p>Hi , I'M Tanmay Gupta</p>
        <h1>Software Developer.</h1>
        <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
