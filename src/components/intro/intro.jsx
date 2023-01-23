import "./intro.css";
import Me from "../../img/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect } from 'react';




const Intro = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CurriculumFrontend.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CurriculumGianlucaGattuso.pdf';
            alink.click();
        })
    })
  
  
}

const [words] = useState(['Web Developer', 'Web Designer', 'Copywriter', 'Musicista']);
const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [opacity, setOpacity] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
      setOpacity(1);
    }, 500);
  }, 5000);

  return () => clearInterval(interval);
}, [currentWordIndex, words]);



  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Ciao, mi chiamo</h2>
          <h1 className="i-name">Gianluca Gattuso</h1>
          <p style={{display: 'inline'}}>e sono un...</p>
          <p style={{ opacity, transition: 'opacity 1s', display: 'inline' }} className="wordCarousel">
      {words[currentWordIndex]}
    </p>
          <p className="i-desc">
            Web Developer appassionato di comunicazione e di design.
          </p>
          <div className="lll">
          <a href="https://www.linkedin.com/in/gianluca-gattuso-334942168/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
          <button onClick={onButtonClick} className="buttonPdf">
                    Scarica il curriculum
                </button>
                

          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;