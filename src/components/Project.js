import React from 'react';
import '../App.css';

const Project = ({ Project }) => (
  <div className="project">
    <img src={project.image} alt={project.title} />
    <h3>{project.title}</h3>
    <p>
      <a href={project.liveURL}>Live</a> | <a href={project.repoLink}>GitHub</a>
    </p>
  </div>
);

export default Project;