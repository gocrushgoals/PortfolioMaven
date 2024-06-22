import React from 'react';
import Project from './Project';

const projects = [
  {
    //image: "projectImagePath.jpg",
    title: "Project Title",
    description: "Project Description",
    link: "https://www.google.com"
  },
  //add more projects here
];

const Portfolio = () => (
  <section id="portfolio">
    <div className="projects">
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  </section>
);

export default Portfolio;