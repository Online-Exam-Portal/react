import React, { Component } from 'react'
import '../../App.css';
import './CreateTest.css'
import QuestionForm from './QuestionForm'


class CreateTest extends Component {
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
        <QuestionForm onChange={fields => this.onChange(fields)} />
      </div>
      </div>
    );
  }
}

export default CreateTest;