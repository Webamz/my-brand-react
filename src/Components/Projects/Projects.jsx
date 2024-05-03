import React from 'react'
import './Projects.css'
import project1 from '../../assets/img/project.jpg'
import project2 from '../../assets/img/project2.jpg'
import project3 from '../../assets/img/project3.jpg'



const Projects = () => {


  return (
    <div className="homeContainer projects" id="projects">
      <div className="projects-header">
        <h1>My <span className="green-text">Projects</span></h1>
      </div>
      <div className="projects-container">
        <div className="projects-card">
          <a href="https://github.com/Webamz" target="_blank" rel="noreferrer">
            <img src={project1} alt="Project 1" />
            <div className="project-details">
              <h2>Project 1</h2>
              <p>Details about Project 1</p>
            </div>
          </a>
        </div>
        <div className="projects-card">
          <a href="https://github.com/Webamz" target="_blank" rel="noreferrer">
            <img src={project2} alt="Project 2" />
            <div className="project-details">
              <h2>Project 2</h2>
              <p>Details about Project 2</p>
            </div>
          </a>
        </div>
        <div className="projects-card">
          <a href="https://github.com/Webamz" target="_blank" rel="noreferrer">
            <img src={project3} alt="Project 3" />
            <div className="project-details">
              <h2>Project 3</h2>
              <p>Details about Project 3</p>
            </div>
          </a>
        </div>
        {/* <div className="projects-card">
          <a href="https://github.com/Webamz" target="_blank" rel="noreferrer">
            <img src={project2} alt="Project 3" />
            <div className="project-details">
              <h2>Project 3</h2>
              <p>Details about Project 3</p>
            </div>
          </a>
        </div>
        <div className="projects-card">
          <a href="https://github.com/Webamz" target="_blank" rel="noreferrer">
            <img src={project3} alt="Project 3" />
            <div className="project-details">
              <h2>Project 3</h2>
              <p>Details about Project 3</p>
            </div>
          </a>
        </div>
        <div className="projects-card">
          <a href="https://github.com/Webamz" target="_blank" rel="noreferrer">
            <img src={project3} alt="Project 3" />
            <div className="project-details">
              <h2>Project 3</h2>
              <p>Details about Project 3</p>
            </div>
          </a>
        </div> */}
      </div>
      <div className="navigation">
        <button id="prevBtn" className="nav-btn">
          &#10094; Prev
        </button>
        <button id="nextBtn" className="nav-btn">
          Next &#10095;
        </button>
      </div>
    </div>
  )
}

export default Projects

