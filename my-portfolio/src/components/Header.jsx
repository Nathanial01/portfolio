import React from 'react';
import OrbitingElements from './OrbitingElements.jsx';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Hi there! I’m Nathanial Samuel.</h1>
      <div className="header-content">
        <div className="curved-text-wrapper">
          <div className="orbiting-element-wrapper">
            <OrbitingElements className="orbiting-element" />
          </div>
          <p className="curved-text">
          Sinds mijn jeugd ben ik gefascineerd geweest door technologie, zoals computers, robots, protheses en drones. Ondanks de vele uitdagingen die ik als vluchteling heb meegemaakt, heb ik mijn passie voor technologie nooit verloren. Na mijn verhuizing naar Nederland heb ik mijn MBO 3 diploma in elektrotechniek behaald en zit ik nu in het laatste jaar van mijn MBO 4 opleiding tot softwareontwikkelaar. Mijn ontwikkeling weerspiegelt mijn toewijding om mijn expertise van hardware naar software uit te breiden. Ik kijk ernaar uit om mijn vaardigheden verder te ontwikkelen in een uitdagende stageplek en hoop dat u mij die mogelijkheid wilt bieden.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
