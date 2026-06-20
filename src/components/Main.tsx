import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImage from "../assets/images/Portfolio_pfp2.png";
import '../assets/styles/Main.scss';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={profileImage}
            alt="Adam Iskandar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/warlockByte" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adam-iskandar-172b05272/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Adam Iskandar</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;