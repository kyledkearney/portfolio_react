import React, { Component } from 'react'


export default class ColorChange extends Component {

  

  render() {

    const changeColor = (color, color2) => {
      document.body.style.backgroundColor = color
      document.body.style.color = color2
    
    
    
    }

    const renderCircles = () => {
      const colors = ['rgb(239, 233, 244)', 'rgb(165, 195, 247)', 'rgb(36, 35, 37)', '#D2302C', '#358597', '#F4B5B7', '#132A13']
      const altColors = ['#000000', '#05265E', '#ffffff', '#FFFFFF', '#F4A896', '#2F004F', '#E5BE9E']
      const circles = []
      const activeColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color')
    
      for (let i = 0; i < colors.length; i++) {
            if (colors[i] === activeColor ) {
              circles.push(<span className='color-circle color-circle-active' key={colors[i]} onClick={() => changeColor(colors[i], altColors[i])} style={{backgroundColor: colors[i]}}></span>)
            } else (
              circles.push(<span className='color-circle' key={colors[i]} onClick={() => changeColor(colors[i], altColors[i] )} style={{backgroundColor: colors[i]}}></span>)
            )
        }
    
    
        return(
          <div className='color-row'>
          {circles}
          </div>
        )
      }
    
    return (

    )
  }
};
