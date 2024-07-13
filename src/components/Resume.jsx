import React from "react";
import '../../src/App.css';

const Resume = () => (
  <section id="resume">
    <h2>Resume</h2>
    <a href="path/to/resume.pdf" download>
      Download Resume
    </a>
    <h3>Proficiencies</h3>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>MongoDB</li>
      <li>MySQL</li>
      <li>Express</li>
    </ul>
  </section>
);

export default Resume;