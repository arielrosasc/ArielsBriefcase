import React from 'react';
import { Avatar, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import '../index.css';

const { Title } = Typography;

const About = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-avatar-container">
        <Avatar
          size={400}
          src="src/assets/img/yo4.jpeg"
          className="about-avatar"
        />
      </div>

      <div className="about-text-container">
        <Title level={1} className="about-title">Ariel Rosas</Title>
        <p className="about-description">
          I am a Software Engineering student with a great interest in continuous
          learning and solving problems through technology. My goal is to apply
          my knowledge to contribute to innovative and high-impact projects.
        </p>
        <div>
          <Title level={2} className="about-subtitle">University career</Title>
          <p className="about-university">
            Software Engineering || Universidad de Colima || 2022 - Currently studying
          </p>
        </div>
      </div>

      <div className="about-icons-container">
        <a
          href="mailto:arosas7@ucol.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
       
      {/*   <img
            src="src/assets/img/email.png"
            alt="Email"
            className="about-icon"
          />*/}
        </a>
        <a
          href="https://github.com/arielrosasc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined className="about-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/arielrosasc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined className="about-icon" />
        </a>
      </div>
    </div>
  </section>
);

export default About;
