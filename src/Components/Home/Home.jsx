import React from "react";
import "./Home.css";
import prof from "../../assets/img/prof.jpg";

const Home = () => {
  return (
    <div className="homeContainer home" id="home">
      <div className="introduction">
        <p>Hello, I'm</p>
        <h2>Christian</h2>
        <p>
          And I am a <span className="green-text">Software Engineer</span>
        </p>
        <p>Feel free to connect with me 😊</p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/christian-iradukunda-1b2148244/"
            target="_blank"  rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Webamz" target="_blank"  rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="bx bx-x"></i>
          </a>
        </div>
      </div>
      <img id="profile-picture" src={prof} alt="" />
    </div>
  );
};

export default Home;
