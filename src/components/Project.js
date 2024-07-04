import React from 'react';
import '../styles/App.css';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>
      <a href={deployedLink}>Live</a> | <a href={repoLink}>GitHub</a>
    </p>
  </div>
);

export default Project;
