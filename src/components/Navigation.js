import React from 'react';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase().replace(' ', '-')}`}
              onClick={() => setCurrentSection(section)}
              className={currentSection === section ? 'active' : ''}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
