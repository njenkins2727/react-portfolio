import React from "react";
import githubIcon from "../assets/icons/github-icon.png"
import linkedinIcon from "../assets/icons/linkedin.png"
import stackOverflowIcon from "../assets/icons/stackOverflow.png"

function Footer(){
    return (
        <footer class="footer">
            <h5>Find me: </h5>
            <img src={githubIcon} alt="github icon" />
            <img src={linkedinIcon} alt="linkedin icon" />
            <img src={stackOverflowIcon} alt="stackOverflow icon" />
            <h5>Or my email - </h5>
            <p>njenkins2727@gmail.com</p>
        </footer>
          
    );
}

export default Footer;