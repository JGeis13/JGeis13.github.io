import React, { Component } from 'react'
import axios from 'axios'

export class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    vName: true,
    vEmail: true,
    vMessage: true,
    valid: false,
    boxCheck: false,
    showWarning: false, 
    warning: '',
    submissionStatus: ''
  }

  verifyForm = (e = null) => {
    if(e) e.preventDefault()
    const { name, email, message } = this.state
    let vName = validName(name),
        vEmail = validEmail(email),
        vMessage = validMessage(message)
    if( vName && vEmail && vMessage){
      this.setState({
        vName, vEmail, vMessage, valid: true, showWarning: false
      }, () => {
        if(e) this.submitForm()
      })
    }
    else {
      this.setState({
        vName, vEmail, vMessage, showWarning: true
      }, this.setWarning )
    }
    
  }

  setWarning = () => {
    if( !this.state.vName ){
      this.setState({warning: 'Please enter a valid Name'})
    }
    else if ( !this.state.vEmail ){
      this.setState({warning: 'Please enter a valid Email'})
    }
    else if ( !this.state.vMessage ){
      this.setState({warning: 'Please enter a valid Message'})
    }
  }

  submitForm = () => {
    axios({
      method: 'POST',
      url: 'https://formcarry.com/s/WgRmzLq9Ft', // C
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        honeypot: this.state.boxCheck,
        _gotcha: this.state.boxCheck
      }
    }).then( res => {
        if( res.status === 200){
          // Handle Success
          this.setState({submissionStatus: 'success'}, () => {
            setTimeout( () => this.setState({submissionStatus: ''}), 5000)
          })
        }
        else {
          throw new Error('Error')
        }
    }).catch( err => {
        // Handle Error
        this.setState({submissionStatus: 'failure'}, () => {
          setTimeout( () => this.setState({submissionStatus: ''}), 5000)
        })
    })

    // After form submitted successfully
    this.setState({
      name: '',
      email: '',
      message: '',
      vName: true,
      vEmail: true,
      vMessage: true,
      valid: false,
      boxCheck: false,
      showWarning: false, 
      warning: ''
    })
  }

  toggleChecked = () => {
    this.setState(prev => ({boxCheck: !prev.boxCheck}))
  }

  updateState = (e) => {
    const type =  e.target.name
    this.setState({[type]: e.target.value})
  }

  handleUnfocus = (e) => {
    if( this.state.showWarning ) {
      this.verifyForm()
    }
  }


  render() {
    const style = this.state.showWarning ? {} : {display: 'none'}

    return (
      <div className='section' id='contact'>
        <h2>Contact Me</h2>

        <div className='contact-container'>
          <form onSubmit={this.verifyForm} >

            <div className='alert-box' style={style}>
              <span>{this.state.warning}</span>
            </div>

            <div className={'input-box ' + (this.state.vName ? '' : 'warning')}>
              <input  type='text' name='name' placeholder='John Snow'
              onChange={this.updateState} onBlur={this.handleUnfocus}
              value={this.state.name}/>
              <label >Name</label>
            </div>

            <div className={'input-box ' + (this.state.vEmail ? '' : 'warning')}>
              <input  type='email' name='email' placeholder='me@KingInTheNorth.com'
              onChange={this.updateState} onBlur={this.handleUnfocus}
              value={this.state.email}/>
              <label >Email</label>
            </div>

            <div className={'input-box ' + (this.state.vMessage ? '' : 'warning')}>
              <textarea  rows='8' name='message' placeholder='Your message here.' style={{resize: 'none'}}
              onChange={this.updateState} onBlur={this.handleUnfocus}
              value={this.state.message}></textarea>
              <label >Message</label>
            </div>

            <div className='input-box check-format'>
              <input type='checkbox' name='_gotcha' onChange={this.toggleChecked}/>
              <label >Do you agree to the terms and conditions?</label>
            </div>

            <button type='submit'>Send</button>

          </form>

          <ul className='contact-info'>
            <li><i className="material-icons">email</i> contact@jarickg.com</li>
            <li><i className="material-icons">phone</i> (385) 645-4564</li>
            <li><i className="material-icons">location_on</i> Sandy, UT</li>
          </ul>

          {
            this.state.submissionStatus === 'success' ? 
              (<div className='form-msg success-msg'>Thanks! Your submission was sent successfully.</div>) 
              : this.state.submissionStatus !== '' ? 
              (<div className='form-msg error-msg'>Oops! Something went wrong. Please try again or email me directly.</div>) 
              : null
          }

        </div>

        
        
        
  
      </div>
    )
  }
}

export default Contact


function validEmail(email){
  const trimmed = email.trim()
  const regex = /^\S+@\S+\.\S+$/
  const match = trimmed.match(regex)
  return match !== null
}

function validName(name){
  const trimmed = name.trim()
  return trimmed !== ''
}

function validMessage(msg){
  const trimmed = msg.trim()
  return trimmed !== ''
}