import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer className="footer">
            <div  className="myself" >
                <h4>I am a simple human being</h4>
                <div style={{marginLeft: '2rem'}}>
                    I am a simple human being who lives in a simple world.
                </div>
                <div>
                    <h4>Social</h4>
                    <a href="https://www.linkedin.com/in/al3xdiaz/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin  size={30}/>
                    </a>
                    <a href="https://github.com/al3xDiaz/" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare  size={30}/>
                    </a>
                    <a href="mailto:alexleonel96@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <IoMail  size={30}/>
                    </a>
                </div>
            </div>
            <div className="about">
                <h4>Explore</h4>
                <ul>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Privacy and Terms</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;