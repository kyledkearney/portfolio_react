import React, { Component } from 'react'
import WorkCard from './workCard'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class Work extends Component {


  render() {
    return (
      <div id='work'>
        <h5 className='title-small work-title'>My</h5>
        <h5 className='title-large work-title'>Work</h5>
        <WorkCard/>
        {/* <div className="work-footer">
          <h6 className='work-footer-text'>View more of my work</h6>
          <div className='social-row'>
            <a href=""><FontAwesomeIcon icon={["fab", "instagram"]} className='social-icon' style={{color:"#000000"}} /></a>
            <a href=""><FontAwesomeIcon icon={["fab", "github"]} className='social-icon' style={{color:"#000000"}} /></a>
            <a href=""><FontAwesomeIcon icon={["fab", "behance"]} className='social-icon' style={{color:"#000000"}} /></a>
          </div>
        </div> */}
      </div>
    )
  }
};

export default Work
