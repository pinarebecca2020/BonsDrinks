import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import FooterDiv from './Footer.styles.js';

const Footer = () => {
    return (
        <FooterDiv>
            <div>
                <p>2021 &copy; all rigths reserved by{" "}
                <a href="http://www.linkedin.com/in/rebecca-pina">Rebecca Pina</a>
                </p>
            </div>
            <div>
                <a href="http://linkedin.com/in/rebecca-pina">
                    <FaLinkedin />
                </a>
                <a href="http://github.com/pinarebecca2020">
                    <FaGithub />
                </a>
            </div>
        </FooterDiv>
    )
}

export default Footer
