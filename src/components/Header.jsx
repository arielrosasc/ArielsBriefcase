import React from 'react';
import { Menu, Button } from 'antd';
import '../index.css';

const Header = () => (
  <header className="header">
    <div className="menu-container">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <a href="#about">About me</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#projects">Projects</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#skills">Technologies</a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="#contact">Contact</a>
        </Menu.Item>
      </Menu>
    </div>

    <div className="cv-button-container">
      <Button 
        type="primary" 
        size="large" 
        href="src/assets/cvAriel.pdf"  
        target="_blank" 
        className="cv-button"
      >
        View my CV
      </Button>
    </div>
  </header>
);

export default Header;
