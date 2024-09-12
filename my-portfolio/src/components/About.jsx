import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="profile">
          <img src="/logo512.png" alt="Profile" />
          <h3>Nathanial Samuel Abraha</h3>
        </div>

        <div className="section">
          <h4>Opleidingen</h4>
          <div className="dropdown-content">
            <div className="box">
              <p><strong>Software Developer</strong></p>
              <p>Techniek College Rotterdam, Schiedam</p>
              <p>Eerste jaar succesvol afgerond, momenteel in tweede jaar.</p>
            </div>
            <div className="box">
              <p><strong>Eerste Monteur Elektrotechnische Industriële Installaties en Systemen</strong></p>
              <p>Techniek College Rotterdam, Rotterdam</p>
              <p>Diploma behaald</p>
            </div>
            <div className="box">
              <p><strong>CVA</strong></p>
              <p>CVA diploma behaald</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h4>Werkervaring</h4>
          <div className="dropdown-content">
            <div className="box">
              <p><strong>SPIE Schiedam</strong></p>
              <p>Schiedam</p>
              <p>sep 2023 - heden</p>
              <p>Bij SPIE heb ik werkervaring opgedaan op de kalibratie afdeling.</p>
            </div>
            <div className="box">
              <p><strong>Sanitronics International BV</strong></p>
              <p>jan 2023 - jul 2023 Rotterdam</p>
              <p>Bij Sanitronics bestonden mijn werkzaamheden voornamelijk uit het ontwikkelen en bouwen van automatische openbare toiletsystemen.</p>
            </div>
            <div className="box">
              <p><strong>Staffyou</strong></p>
              <p>Rotterdam</p>
              <p>jan 2022 - heden</p>
              <p>Bij Staffyou verricht ik verschillende werkzaamheden als ZZP'er.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h4>Vaardigheden</h4>
          <div className="dropdown-content">
            <div className="box">
              <p><strong>Hardware kennis:</strong> Arduin, ATtiny85, Sensoren, Jetson Nano</p>
            </div>
            <div className="box">
              <p><strong>Computer kennis:</strong> HTML5, Javascript, CSS, C, Python, SQL, Rust, PHP, React, Laravel</p>
            </div>
            <div className="box">
              <p><strong>Overig:</strong> Microsoft Office, AutoCAD, Adobe, Solid Works</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h4>Personalia</h4>
          <div className="dropdown-content">
            <div className="box">
              <p>Nathanial Samuel Abraha</p>
              <p>Email: <a href="mailto:natnaelsml@gmail.com">natnaelsml@gmail.com</a></p>
              <p>Phone: +31 6 48 24 55 19</p>
              <p>Address: Tidemanstraat 93, 3022SG Rotterdam</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h4>Talen</h4>
          <div className="dropdown-content">
            <div className="box">
              <p>Nederlands, Engels, Tigrinya, Amhaars, Italiaans</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h4>Hobby's en interesses</h4>
          <div className="dropdown-content">
            <div className="box">
              <p>Programmeren, Ontwerpen en ontwikkelen van elektronische apparaten, Sportschool</p>
            </div>
            <div className="box">
              <button className="link-button">Drone vliegen</button>
            </div>
            <div className="box">
              <p>Fotografie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
