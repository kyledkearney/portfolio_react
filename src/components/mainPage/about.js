import React, { Component } from 'react'
import Image from "../image"



class About extends Component {

  render() {
    
    return (
      <div id='about'>
        <div className="about-head" data-sal="fade" data-sal-duration="2000" data-sal-delay="3000" data-sal-easing="ease"   >
          <h5 id='about-head'>About Me</h5>
        </div>
        <div className="about-body" data-sal="fade" data-sal-duration="2000" data-sal-easing="ease">
          <div id="about-image-container">
            <Image filename='IMG_6871.jpeg'/>
          </div>
          <div id="about-text-container">
            <p className="about-paragraph" id='about1'>Hi! My name is Kyle Kearney, I am a full stack Web Developer. Focused on developing engaging interactive for my clients.  I am a full stack Web Developer. Focused on developing engaging interactive for my clients. I am a full stack Web Developer. Focused on developing engaging interactive for my clients.</p>
            <p className="about-paragraph">Hi! My name is Kyle Kearney, I am a full stack Web Developer. Focused on developing engaging interactive for my clients.  I am a full stack Web Developer. Focused on developing engaging interactive for my clients. I am a full stack Web Developer. Focused on developing engaging interactive for my clients.</p>
          </div>
        </div>
    </div>
       
    )
  }
};

export default About
