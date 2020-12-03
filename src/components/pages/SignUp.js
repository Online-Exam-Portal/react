import React, { Component } from 'react'
import '../../App.css';
import './CreateTest.css'
import SignUpForm from './SignUpForm'

class SignUp extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className='Container'>
      <div className="App">
        <SignUpForm onChange={fields => this.onChange(fields)} />
      </div>
      </div>
    );
  }
}

export default SignUp;