import React from "react";
import githubIcon from "../../assets/icons/github-icon.png"
import linkedinIcon from "../../assets/icons/linkedin.png"
import stackOverflowIcon from "../../assets/icons/stackOverflow.png"
import './Footer.css'

function Footer(){
    return (
        <footer class="footer">
            <h5>Find me: </h5>
            <a href="https://github.com/njenkins2727"> <img src={githubIcon} alt="github icon" class="socials" /> </a>
            <a href="https://www.linkedin.com/in/nathan-jenkins-17798b236/"> <img src={linkedinIcon} alt="linkedin icon" class="socials"/> </a>
            <a href="https://stackoverflow.com/users/18874031/njenkins2727"> <img src={stackOverflowIcon} alt="stackOverflow icon" class="socials"/> </a>
            <h5>njenkins2727@gmail.com</h5>
        </footer>
          
    );
}

export default Footer;