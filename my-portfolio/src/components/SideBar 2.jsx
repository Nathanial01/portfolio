import React from 'react';
import './SideBaar.css'; // Ensure the correct CSS file is imported
const emojis = ['😊', '😇', '😁', '😉'];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
document.documentElement.style.setProperty('--smiley-1', `'${randomEmoji}'`);

const SideBaar= () => {
  return (
    <div className="Con">
      <div className="TextWarp">
        <div className="central-text">
          <div className="content">
            <div className="content__container">
              <p className="content__text">&nbsp; Hello</p>
              <ul className="content__list">
                <li className="content__list__item">world !</li>
                <li className="content__list__item">collega's!</li>
                <li className="content__list__item">visitors!</li>
                <li className="content__list__item">wereld!</li>
                <li className="content__list__item">bezoekers!</li>
                <li className="content__list__item">everybody!</li>
                <li className="content__list__item">iedereen!</li>
                
              </ul>
            </div>
          </div>
          <div className="orbit"></div>
          <div className="orbit"></div>
        </div>
      </div>
    </div>
  );
};

export default SideBaar;
