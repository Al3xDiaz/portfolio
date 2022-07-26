import React from 'react';
import { FaLinkedin, FaGithubSquare, FaHeart} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer>
            <div>
                <h4>Contact me</h4>
                <div>
                    <a href="mailto:alexleonel96@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <IoMail  size={20}/>
                        Email
                    </a>
                </div>
            </div>
            <div className="services">
                <h4>Services</h4>
                <ul>
                    <li>Backend Development</li>
                    <li>Frontend Development</li>
                    <li>DevOps Development</li>
                </ul>
            </div>
            <div className="about">
                <h4>Made for</h4>
                Help to any human being.
                <a>or to contact me <FaHeart size={20} color={"#ff0000"}/>.</a>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/al3xdiaz/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin  size={20}/>
                        LinkedIn
                    </a>
                    <a href="https://github.com/al3xDiaz/" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare  size={20}/>
                        GitHub
                    </a>
                </div>
            </div>
            <style jsx>{`
                .social{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                }
                a{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    // color: #4183c4
                }
                a :global(svg){
                    margin: 0px 5px;
                }
                footer{
                    background-color: var(--secondary);
                    color: white;
                    height: 23vh;
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly; 
                    align-items: flex-start;
                    padding: 1rem;
                  }
                `}</style>
        </footer>
    );
}
export default Footer;