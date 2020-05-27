import React, { Component } from 'react'
import JSONData from '../../../data/content.json'
import Image from '../../image'

export default class SkillDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeOption: JSONData.Skills[0]
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(activeOption) {
    this.setState({ activeOption });
  }

  renderSkills(activeOption) {
    activeOption.Children.map(data => {
      return(
        <div className='skill-card'>
          <h6>{data.Title}</h6>
        </div>
      )
    })
  }


  renderFilters(data, activeOption) {
    return(
      <>
        <ul className='skill-filter'>
          {data.map(data => {
            return (
            <li key={data.Type}><button className={`${activeOption.Type === data.Type? "skill-active" : ""} skill-filter-item`} onClick={() => this.handleFilterClick(data)}>{data.Type}</button></li>
            )
          })}
        </ul>
      </>
    )
  }


  render() {
    const { activeOption } = this.state;
    const data = JSONData.Skills
    
    
    return (
      <>
        {this.renderFilters(data, activeOption)}
      <div className="skill-display-container">
            {activeOption.Children.map(data => {
      return(
        <div className='skill-card'>
          <div className="skill-logo-container">
            <Image filename={data.LogoUrl}/>
          </div>
          <h6 className='skill-card-title'>{data.Title}</h6>
        </div>
      )
    })}
        
      </div>
      </>
    
    )
}};
