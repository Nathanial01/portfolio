import React from 'react';
import './OrbitingElements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add all free icons to the library
library.add(fas, far, fab);

const OrbitingElements = () => {
  return (
    <div className="orbit-container">
      <div className="central-wrapper">
        <div className="central-image">
          <img className='img1' src="/Untitled.png" alt="Central" />
        </div>
        <div className="orbit-circle"></div>
        <div className="orbit-circle1"></div>
        <div className="orbit-circle2"></div>
      </div>

      <div className="orbit-element orbit-element-3">
      <a  href="mailto:natnaelsml@gmail.com">
      <FontAwesomeIcon icon={['fas','building-columns']} size="3x"/>
      </a>
      </div>
      <div className="orbit-element orbit-element-4"></div>
      <div className="orbit-element orbit-element-5"></div>
      <div className="orbit-element orbit-element-6">
      <a  href="mailto:natnaelsml@gmail.com">
      <FontAwesomeIcon icon={['fas','user-check']} size="3x"/>
      </a>
      </div>
      <div className="orbit-element orbit-element-7"></div>
      <div className="orbit-element orbit-element-8"></div>
      <div className="orbit-element orbit-element-9">
      <a>
      <FontAwesomeIcon icon={['fas','fa-icons']} size="3x"/>
      </a>
      </div>
      <div className="orbit-element orbit-element-10"></div>
      <div className="orbit-element orbit-element-11"></div>
      <div className="orbit-element orbit-element-12">
      <a>
      <FontAwesomeIcon icon={['fas','hammer']} size="3x"/>
      </a>
      </div>
      <div className="orbit-element orbit-element-13"></div>
      <div className="orbit-element orbit-element-14"></div>
      <div className="orbit-element orbit-element-15">
      <a herf="telephone"><FontAwesomeIcon icon={['fas','phone']} size="3x"/>
      </a>
      </div>
      <div className="orbit-element orbit-element-16"></div>
      <div className="orbit-element orbit-element-17"></div>
   
      
    </div>
  );
};

export default OrbitingElements;
<div className="orbit-element orbit-element-">

</div>