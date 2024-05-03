import React from "react";
import "./About.css";
import prof from "../../assets/img/prof.jpg";

const About = () => {
  const downloadCV = ()=> {
  var cvFileName = "chris_cv.pdf";
  var cvFilePath = "./img/chris_cv.pdf";
  var link = document.createElement("a");
  link.href = cvFilePath;
  link.download = cvFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  }
  
  return (
    <div className="about" id="about">
      <div className="about-header">
        <h1>
          About <span className="green-text">Me</span>
        </h1>
      </div>

      <div className="about-container">
        <img id="profile-picture" src={prof} alt="" />
        <div className="pitch">
          <h1>Backend Developer</h1>
          <p>
            Hey, I'm Christian Iradukunda—soon software engineering recent
            graduate stepping into the dynamic world of tech, especially
            software engineering. With a tech background and a passion for music
            and sports, I'm gearing up to blend analytics with creativity. My
            educational journey has equipped me with a solid background in
            software engineering mainly in backend developement, which I'm now
            channeling into the realm of data science. With an analytical
            mindset and a knack for problem-solving, I'm ready to dive into the
            world of data exploration, machine learning, and insightful
            visualizations. 
          </p>
        </div>
      </div>
      <div className="cv-btn">
        <button onClick={downloadCV}>Download CV</button>
      </div>
    </div>
  );
};

export default About;
