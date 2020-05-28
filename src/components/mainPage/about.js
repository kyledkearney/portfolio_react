import React, { Component } from 'react'
import Image from "../image"
import Fade from 'react-reveal/Fade';

class About extends Component {

  render() {
    
    return (
      <div id='about'>
        <div className="about-head">
            <h5 id='about-head'>
              <Fade delay={200} left duration={2000}>
              About Me
              </Fade>
              </h5>
        </div>
        <div className="about-body">
          <Fade delay={400}>
          <div id="about-image-container">
            <Image filename='IMG_6871.jpeg'/>
          </div>
          </Fade>
          <div id="about-text-container">
            <Fade right>
            <p className="about-paragraph" id='about1'>I am a Certified Front End Web Developer, from Denver, Colorado. My certificate is from the University of Denver. I am currently working on my B.S in Computer Science & Engineering through an online program. I enjoy fast paced work environments, with challenging projects. I am a critical thinker, and love to work through difficult problems.</p>
            <p className="about-paragraph">I am currently working as a freelance web developer, and working on some personal projects. A few of the projects I am currently working on are a blackjack game, a iOS budgeting app, and a id generator library for Javascript.</p>
            <p className="about-paragraph">When I am not developing I am out cycling, traveling, and learning new skills. Currently, I am practicing my Spencerian Penmanship, and learning Spanish.</p>
            </Fade>
          </div>
        </div>
    </div>
       
    )
  }
};

export default About
