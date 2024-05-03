import React from "react";
import './Skills.css'

const Skills = () => {
  return (
    <div className="homeContainer skills" id="skills">
      <div className="skills-header">
        <h1>
          My <span className="green-text">Skills</span>
        </h1>
      </div>

      <div className="skills-container">
        <div className="skills-card">
          <i className="fas fa-code"></i>
          <h2>Web Development</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>C#</li>
          </ul>
          <div className="skills-icons">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js-square"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-angular"></i>
            <i className="fab fa-node-js"></i>
          </div>
        </div>
        <div className="skills-card">
          <i className="fas fa-database"></i>
          <h2>Database Management</h2>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
          <div className="skills-icons">
            <i className="fas fa-database"></i>
            <i className="fas fa-server"></i>
            <i className="fas fa-cogs"></i>
            <i className="fas fa-cloud"></i>
          </div>
        </div>
        <div className="skills-card">
          <i className="fas fa-brain"></i>
          <h2>Data Science</h2>
          <ul>
            <li>Data Visualizations</li>
            <li>Power Bi</li>
            <li>Machine Learning</li>
          </ul>
          <div className="skills-icons">
            <i className="fas fa-chart-line"></i>
            <i className="fas fa-chart-bar"></i>
            <i className="fas fa-chart-pie"></i>
            <i className="fas fa-robot"></i>
            <i className="fas fa-atom"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
