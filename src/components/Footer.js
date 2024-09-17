import { FaCode, FaGithub, FaHome, FaJava, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container"> {/* Fixed typo here */}
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Yashoda Nagar, Kanpur Nagar</p>
                    <p>Uttar Pradesh, India</p>
                </div>
            </div>
            <br/>
            <div className="phone">
                <p><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                +91 7355257943</p>
            </div>
            <br/>

            <div className="phone">
                <p><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                Tanmaygupta8503@gmail.com</p>
            </div>
            <br/>
            <div className="form">
                <form action="https://formspree.io/f/mgvwbnwv" method="POST">
                    <h4>Send a Message</h4>
                    <br/>
                    <table>
                        <tr>
                            <td>
                                <label for="name">Name:</label>
                            </td>
                            <td>
                                <input type="text" id="name" name="name" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="email">Email:</label>
                            </td>
                            <td>
                                <input type="email" id="email" name="email" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="message">Message:</label>
                            </td>
                            <td>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </td>
                        </tr>
                    </table>
                    <button className= "btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>Hi, I am Tanmay Gupta. I am a software developer with experience in developing web applications using MERN stack and Java Web Technologies. I am a quick learner and always eager to learn new technologies.</p>
            <br/>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tanmaygupta8503" target="_blank"><FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/></a>
                <a href="https://github.com/Tanmaygupta8503" target="_blank"><FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}}/></a>
                <a href="https://leetcode.com/u/adityawsome_8503" target="_blank"><FaJava size={20} style={{color:"#fff", marginRight:"2rem"}}/></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
