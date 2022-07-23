import React from 'react';
export const Footer = () => {
    return (
        <footer className="footer">
            <div  className="myself" >
                <h4>I am a simple human being</h4>
                <div>
                    I am a simple human being who lives in a simple world.
                </div>
                <div>
                    <h4>Social</h4>
                    
                </div>
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