import React from 'react';
import  './Footer.module.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div  className="myself" >
                <h4>I am a simple human being</h4>
                <p>
                    I am a simple human being who lives in a simple world.
                </p>
                <p>
                    <h4>Social</h4>
                    
                </p>
            </div>
            <div className="about">
                <h4>Explore</h4>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
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