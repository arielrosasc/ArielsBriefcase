import React, { useState, useRef } from 'react'; 
import Slider from 'react-slick'; 
import { Card, Modal, Tag, Button } from 'antd'; 
import { GithubOutlined } from '@ant-design/icons'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import '../index.css';

const projects = [
  {
    title: 'Lil Parrot: Ody-Sea',
    description: "Children's game to achieve SDG 14",
    details: "Children's game to promote SDG 14. This project aims to raise awareness about marine life through an interactive game, which includes three levels with two difficulty options (easy and difficult), available in English and Spanish.",
    git: "https://github.com/arielrosasc/LilParrotOdy-Sea",
    technologies: ['Python'],
    images: [
      'src/assets/img/lilparrot.png',
      'src/assets/img/lilparrot2.png',
      'src/assets/img/lilparrot3.png',
    ],
  },
  {
    title: 'Cine-Hub',
    description: 'Web blog dedicated to cinema',
    details: "A blog platform that allows users to explore and review. The platform has three roles: visitor, user and administrator, each with different levels of access and functionalities.",
    git: "https://github.com/arielrosasc/Cine-Hub",
    technologies: ['PHP', 'HTML5', 'CSS3'],
    images: [
      'src/assets/img/cine.png',
      'src/assets/img/cine2.png',
      'src/assets/img/cine3.png',
    ],
  },
  {
    title: 'Harmony&Heaven',
    description: 'Application for managing the inventory of a music store, along with a point of sale',
    details: "An inventory management and point of sale system designed specifically for music stores. The system includes three roles: seller, administrator (employees) and master (store owner), each with different levels of access and functionalities to optimize product and sales management.",
    git: "https://github.com/arielrosasc/HarmonyAndHeavenm",
    technologies: ['NodeJS', 'MySQL'],
    images: [
      'src/assets/img/hh.png',
      'src/assets/img/hh2.png',
      'src/assets/img/hh3.png',
    ],
  },
  {
    title: 'Spike',
    description: 'Mobile application for locating veterinary clinics and managing veterinary appointments',
    details: "Mobile application for locating veterinary clinics and managing veterinary appointments. The app has two roles: veterinarian and pet owner, allowing each one to access specific functionalities to facilitate the attention and care of the animals.",
    git: "https://github.com/Paco-Taco/SpikeNative",
    technologies: ['React Native', 'NodeJS', 'Prisma'],
    images: [
      'src/assets/img/spike.png',
      'src/assets/img/spike2.png',
      'src/assets/img/spike3.png',
    ],
  },
];

const Projects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null); // Referencia para el slider

  const showModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
    if (sliderRef.current) {
      sliderRef.current.slickPause(); 
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); 
    }
  };

  const projectSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <Slider ref={sliderRef} {...projectSettings}>
        {projects.map((project, index) => (
          <div key={index} className="project-card-container">
            <Card
              hoverable
              cover={<img alt={project.title} src={project.images[0]} className="project-image" />}
              onClick={() => showModal(project)}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                {project.technologies.map((tech, idx) => (
                  <Tag color="blue" key={idx} className="project-tag">
                    {tech}
                  </Tag>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </Slider>

      {selectedProject && (
        <Modal
          title={selectedProject.title}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="close" onClick={handleCancel}>
              Close
            </Button>,
          ]}
        >
          <Slider {...imageSettings}>
            {selectedProject.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="modal-image"
                />
              </div>
            ))}
          </Slider>
          <p className="project-details">{selectedProject.details}</p>
          <div>
            <strong>Technologies:</strong>
            <div>
              {selectedProject.technologies.map((tech, idx) => (
                <Tag color="blue" key={idx} className="project-tag">
                  {tech}
                </Tag>
              ))}
            </div>
            <a
              href={selectedProject.git}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <GithubOutlined className="github-icon" />
              View on GitHub
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
