import React from 'react';
import Project from './Project';
import '../styles/App.css';

const projects = [
  {
    image: '/assets/images/maven.jpg.png',
    title: "Project Title",
    description: "Project Description",
    link: "https://www.google.com"
  },
  {
    image: '/assets/images/maven.jpg.png',
    title: "Project 2 Title",
    description: "Project 2 Description",
    link: "https://www.google.com"
  }
  // Add more projects here
];

const Portfolio = () => (
  <section id="portfolio">
    <h3>Portfolio</h3>
    <div className="projects">
      {projects.map((project) => (
        <Project 
          key={project.title} 
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  </section>
);

export default Portfolio;
