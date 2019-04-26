import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className='project-card'>
      <div className='card-left'>
        <img src={props.img} alt=''/>
      </div>
      <div className='card-right'>
        <h3>{props.name}</h3>
        <p><a href={props.url} target="_blank" rel="noopener noreferrer">{props.urlText}</a></p>
        <p>{props.summary}</p>
      </div>
    </div>
  )
}
