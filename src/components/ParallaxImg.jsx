import React from 'react'

export default function ParallaxImg(props) {
  return (
    <div className="parallax" style={{
      backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url(${props.src})`,
      backgroundSize: 'cover',
      backgrounPosition: 'center center',
      mixBlendMode: 'normal',
      width: '100%',
      ...props.style
    }}>
      {props.subComp}
    </div>
  )
}
