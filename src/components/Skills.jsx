import React, { Component } from 'react'
import Card from './Card'

import ball_img from '../assets/ball.png'

export default class Skills extends Component {
  render() {
    return (
      <div className='section' id='skills'>
        <Card img={ball_img} heading='Skills' headColor='rgb(84, 136, 84)' content={(
          <React.Fragment>
            <h3>Skill Title</h3>
            <p>More about this specific skill or skill group Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repellat sunt vitae autem quam quia neque, reiciendis sed odit impedit laudantium a suscipit, quod tempore, earum sint ratione praesentium harum!</p>
          </React.Fragment>
        )}/>
      </div>
    )
  }
}
