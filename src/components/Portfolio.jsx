import '../../src/App.css';
import React from 'react';

const projects = [
  {
    image: '/images/connect.png',
    title: "MavenConnect-API",
    description: "A social network web application, backend project",
    link: "https://github.com/gocrushgoals/MavenConnect-API"
  }
  // {
  //   image: '/images/images.jpg',
  //   title: "Project 2 Title",
  //   description: "Project 2 Description",
  //   link: "https://www.google.com"
  // }
  // Add more projects here
];

const Portfolio = () => (
  <section id="portfolio">
    <h3>Portfolio</h3>
    <div className="projects">
      {projects.map((project) => (
        <div key={project.title} className="project">
          <img src={project.image} alt={project.title} />
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;