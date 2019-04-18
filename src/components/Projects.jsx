import React from 'react'
import ProjectCard from './ProjectCard';

// project images
import pom_img from '../assets/Pomodoro.png'
import calc_img from '../assets/calculator.png'
import gameOfLife_img from '../assets/gameOfLife.png'
import wikiViewer_img from '../assets/wikiViewer.png'

const projects = [
  { name: 'Pomodoro Clock', 
    url: 'https://jarickg.com/pomodoro-react',
    urlText: '/pomodoro-react',
    img: pom_img,
    summary: 'Timer to help work efficiency. Built with React.',
  },
  { name: 'Calculator', 
    url: 'https://codepen.io/jarickg/pen/GBbLQR',
    urlText: '/codepen.com',
    img: calc_img,
    summary: 'Basic calculator built with React.',
  },
  { name: 'Game of Life', 
    url: 'https://codepen.io/jarickg/pen/aqPmbj',
    urlText: '/codepen.com',
    img: gameOfLife_img,
    summary: 'Simulation based on "Conway\'s Game of Life". Built with React',
  },
  { name: 'Wikipedia Viewer', 
    url: 'https://jarickg.com/wikiViewer',
    urlText: '/wikiViewer',
    img: wikiViewer_img,
    summary: 'User interface for searching and viewing wikipedia entries. Utilizes wikipedia REST API.',
  },
]



export default function Projects() {
  return (
    <div className='section' id='portfolio'>
      <h2>A Few Things I've Made</h2>
      {
        projects.map( (proj,i) => (
          <ProjectCard  key={i} {...proj}/>
        ))
      }
    </div>
  )
}
