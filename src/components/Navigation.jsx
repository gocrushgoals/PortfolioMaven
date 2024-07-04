import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact to="/" activeClassName="active">About Me</NavLink></li>
      <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
      <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
    </ul>
  </nav>
);



//comment out to try navLink router-dom
// const Navigation = ({ currentSection, setCurrentSection }) => {
//   const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

//   return (
//     <nav>
//       <ul>
//         {sections.map((section) => (
//           <li key={section}>
//             <a
//               href={`#${section.toLowerCase().replace(' ', '-')}`}
//               onClick={() => setCurrentSection(section)}
//               className={currentSection === section ? 'active' : ''}
//             >
//               {section}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

export default Navigation;
