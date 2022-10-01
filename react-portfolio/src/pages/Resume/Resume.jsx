import React from 'react';
import './Resume.css'
import resume  from '../../assets/resume/nathan-resume.pdf'
import downloadIcon from '../../assets/icons/download-icon.png'

export default function Resume() {
  return (
    <div class="resume-section">
      <h1>Resume</h1>
      <ul class="list">
        <li>React</li>
        <li>GraphQL/Apollo</li>
        <li>Progressive Web Applications</li>
        <li>NoSQL (MongoDB)</li>
        <li>MySQL</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>Sequalize ORM</li>
        <li>Serverside APIs</li>
        <li>Web Apis / Third-party APIs</li>
        <li>HTML/CSS/Javascript</li>
      </ul>

      <a href={ resume } download>  <button type="button" class="btn btn-outline-primary"> <img src={downloadIcon} alt="download icon" width='20px' height='20px'/> Resume Downlaod</button> </a> 

    </div>
  );
}
