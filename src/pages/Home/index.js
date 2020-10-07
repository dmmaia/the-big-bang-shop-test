import React from 'react';

import './styles.css';
import ApresentationImage from '../../assets/apresentation-image-home.png';
import ApresentationImageMobile from '../../assets/apresentation-image-home-mobile.png'

function Home() {
  return (
      <div className="container">
            <div className="apresentation-box" >
                <img alt="apresentation" src={ApresentationImage} className="desktop-apresentation-image"/>
                <img alt="apresentation" src={ApresentationImageMobile} className="mobile-apresentation-image"/>
                <div>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            <div />
          </div>
      </div>
  );
}

export default Home;