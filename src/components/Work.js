import React from 'react'
import pro1 from "../assets/mouse-cursor.ico";
import "./WorkCardStyles.css";
import WorkCardData from "./WorkCardData";
import WorkCard from './WorkCard';
import { NavLink } from 'react-router-dom';
const Work = () => {
  return (
    <div className='work-container'>
        <div className='project-heading'>
            Projects
        </div>
        <div className ="project-container">
            {WorkCardData.map((val,ind) => {
                return <WorkCard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view}/>
            })}
        </div>
    </div>
  )
}

export default Work
