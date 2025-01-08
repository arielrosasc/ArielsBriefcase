import React from 'react';
import { Tag } from 'antd';
import '../index.css';

const skills = [
  { name: 'React', logo: 'src/assets/img/react.png' },
  { name: 'Node.js', logo: 'src/assets/img/node.png' },
  { name: 'JavaScript', logo: 'src/assets/img/js.png' },
  { name: 'MySQL', logo: 'src/assets/img/mysql.png' },
  { name: 'Python', logo: 'src/assets/img/python.png' },
  { name: 'HTML5', logo: 'src/assets/img/html.png' },
  { name: 'CSS3', logo: 'src/assets/img/css.png' },
];

const Skills = () => (
  <section className="skills-section">
    <h2 className="skills-title">Technologies</h2>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <Tag key={index} className="skills-tag">
          <img
            src={skill.logo}
            alt={skill.name}
            className="skills-logo"
          />
          <div className="skills-name">{skill.name}</div>
        </Tag>
      ))}
    </div>
  </section>
);

export default Skills;
