import React, { Component } from 'react'
import Card from './Card'
import img from '../assets/portrait.jpeg'

export default class About extends Component {
  render() {
    return (
      <div className='section' id='about'>
        <Card img={img} heading='About Me' headColor='rgb(206, 159, 87)'  content={(
          <React.Fragment>
            <h3>About me</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quos reprehenderit, quo nemo, nobis numquam eaque consequatur praesentium quae rem velit neque assumenda perspiciatis, eum dolores. Dignissimos, soluta quas! Blanditiis.</p>
          </React.Fragment>
        )}/>
      </div>
    )
  }
}
