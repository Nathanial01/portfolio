import React from 'react';
import OrbitingElements from './OrbitingElements.jsx';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Hello, I’m Nathanial Samuel.</h1>
      <div className="header-content">
        <div className="curved-text-wrapper">
          <div className="orbiting-element-wrapper">
            <OrbitingElements className="orbiting-element" />
          </div>
          <p className="curved-text">
          Mijn Codering Reis Sinds mijn jeugd ben ik gefascineerd door technologie, waaronder computers, robots en drones. Ondanks de aanzienlijke uitdagingen die ik als vluchteling heb moeten doorstaan, heb ik mijn passie voor technologie nooit opgegeven. Na mijn verhuizing naar Nederland heb ik mijn MBO3 in Elektrotechniek afgerond en richt ik mij nu op het voltooien van mijn MBO4 in Softwareontwikkeling. Mijn reis weerspiegelt mijn toewijding om mijn expertise uit te breiden en de overgang te maken van een hardwaregerichte achtergrond naar een vaardige softwareontwikkelaar. Ik ben momenteel op zoek naar een stage om mijn vaardigheden in een praktische omgeving toe te passen en mijn professionele groei voort te zetten. </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
