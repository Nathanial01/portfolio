import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <h3>React with Node.js</h3>
      <div className="project">
        <p>
          A portfolio website built using React and Node.js.
          <a href="https://github.com/Nathanial01/portfolio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
          </a>
        </p>
      </div>

      <h3>Arduino/ZeeUno Xauw Self-Driving Gyroscope-Controlled RC Car (OOP)</h3>
      <div className="project">
        <p>
          An advanced robotics project featuring a self-driving RC car that navigates autonomously using gyroscopes, programmed in C and C++ with Arduino/ZeeUno boards.
          <a href="https://github.com/Nathanial01/Rc_car_oop/tree/rc_car_oop" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
          </a>
        </p>
      </div>

      <h3>Laravel Admin Administration</h3>
      <div className="project">
        <p>
          A Laravel-based administration panel to manage tasks and administrative features, including record deletion and destruction functionalities.
          <a href="https://gitlab.com/Nathanial01/laravel11-opdrachten/-/tree/feature-tasks-admin-delete-destroy?ref_type=heads" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGitlab} aria-label="GitLab" />
          </a>
        </p>
      </div>

      <h3>Laravel Chatbot with Admin Management</h3>
      <div className="project">
        <p>
          A chatbot management system built with Laravel, featuring user conversation history, profile management, and interaction logging.
          <a href="https://gitlab.com/Nathanial01/chatbot/-/tree/chatbot_history?ref_type=heads" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGitlab} aria-label="GitLab" />
          </a>
        </p>
      </div>

      <h3>JavaScript Game</h3>
      <div className="project">
        <p>
          A browser-based game developed using pure JavaScript, focusing on simple mechanics and interactive gameplay.
          <a href="https://github.com/yourusername/js-game" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
          </a>
        </p>
      </div>

      <h3>Laravel Project Management with React and Inertia.js</h3>
      <div className="project">
        <p>
          A project management tool built with Laravel, React, and Inertia.js, delivering a smooth and responsive user experience.
          <a href="https://github.com/Nathanial01/influx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
          </a>
        </p>
      </div>

      <h3>Vanilla PHP Bread Shop</h3>
      <div className="project">
        <p>
          A simple e-commerce website for a bread shop, developed using vanilla PHP. Features include product browsing, cart management, and order processing.
          <a href="https://github.com/TechniekCollegeRotterdam/project-p4-natty" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
          </a>
        </p>
      </div>

      <h3>PHP Game with OOP</h3>
      <div className="project">
        <p>
          An online game developed using PHP and Object-Oriented Programming (OOP) principles. Designed to be modular and easily extendable.
          <a href="https://github.com/Nathanial01/oopdb-main" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
          </a>
        </p>
      </div>

      <h3>Self-Driving Game with JavaScript OOP</h3>
      <div className="project">
        <p>
          A simulation game where vehicles are programmed to navigate autonomously using JavaScript and Object-Oriented Programming (OOP) techniques.
          <a href="https://github.com/Nathanial01/oop_js" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
