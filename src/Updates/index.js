import React, { useEffect } from 'react';
import styles from './style.css';
import backgroundDesktop from '../images/nature_desktop.jpg'
import backgroundMobile from '../images/mobile_bg.jpg'


function UpdatePage() {

  useEffect(() => {
    const image = document.querySelector("#background");
    if (window.innerWidth > 767) {
      image.src = backgroundDesktop;
    } else {
      image.src = backgroundMobile;
    }
  }, []);

  return (
    <div className="upcoming_container">
        <div  className="background">
           <img id="background"/>
           <h1>We will be here soon! Stay With us!</h1>
        </div>
    </div>
  );
}

export default UpdatePage;
