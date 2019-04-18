import React, { Component } from 'react'


const ulStyle = {
  listStyleType: 'none',
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'center',
  color: '#8D8D8D',
  padding: '0'
}

const aStyle = {
  textDecoration: 'inherit',
  color: 'inherit',
  cursor: 'pointer',
}

export default class Navbar extends Component {
  state = {
    className: '',
    lastScroll: 0,
    hasShadow: false,
    timeout: null
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  // change header when scrolling
  handleScroll = (e) => {
    this.scrollTimeout()

    if(window.scrollY < 20 && this.state.className === 'hidden'){
      this.setState({className: '', lastScroll: window.scrollY})
    } 
    else if(window.scrollY >= 20 && window.scrollY >= this.state.lastScroll){
      this.setState({className: 'hidden', lastScroll: window.scrollY})
    }
    else if(window.scrollY < this.state.lastScroll){
      this.setState({className: '', lastScroll: window.scrollY, hasShadow: true})
    }

    if(window.scrollY < 20 && this.state.hasShadow){
      this.setState({hasShadow: false})
    }

  }

  scrollTimeout = () => {
    // Hide navbar after 5 seconds without scroll and if not at top of page
    // Cleared if mouseover navbar with handleNavbarMouseOver
    if(this.state.timeout !== null){ clearTimeout(this.state.timeout)}
    this.setState({
      timeout: setTimeout( () => {
        console.log('scroll timeout')
        if(window.scrollY > 20){
          this.setState({className: 'hidden', hasShadow: false})
        }
      }, 3000)
    })
  }

  handleNavbarMouseOver = () => {
    if(this.state.timeout !== null){
      clearTimeout(this.state.timeout)
    }
  }

  handleLink = (e) => {
    e.preventDefault()
    let target = e.target.getAttribute('data-id')
    if( target !== '#' && target !== '' ){
      let el = document.querySelector(target)
      let top = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
    } 
    
  }

  render() {
    const shadow = this.state.hasShadow ? {boxShadow: '1px 1px 1px rgba(18, 18, 18, 0.25)'} : null

    return (
      <nav id='main-nav' style={shadow} className={this.state.className} onMouseEnter={this.handleNavbarMouseOver} onMouseLeave={this.scrollTimeout}>
        <ul style={ulStyle}>
          {
            this.props.navlinks.map( (link,i) => (
              <li key={i} ><a data-id={link.link} href={link.link} onClick={this.handleLink} style={aStyle} className="navLink btn-waves">{link.name}</a></li>
            ))
          }
        </ul>
      </nav>
    )
  }
}
