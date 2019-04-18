import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <div className='header' style={{background: props.headColor}}>
        <h2>{props.heading}</h2>
      </div>
      <div className='img-container'>
        <img src={props.img} alt=''/>
      </div>
      <div className='card-right'>
        {props.content}
      </div>
    </div>
  )
}