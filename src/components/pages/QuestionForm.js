import React, { Component } from 'react';
import './QuestionForm.css';

export default class QuestionForm extends Component {
state = {
  Topic: "",
  Question: "",
  lastName: "",
  username: "",
  email: "",
  password: ""
};

change = e => {
  this.props.onChange({ [e.target.name]: e.target.value });
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = e => {
  e.preventDefault();
  // this.props.onSubmit(this.state);
  this.setState({
    Topic: "",
    Question: "",
    OptionA: "",
    OptionB: "",
    OptionC: "",
    OptionD: "",
    CorrectOption: ""
  });
};

render() {
  return (
    <form>
    <div className='Topic'>
    <label>Topic : </label>
     <input
       name="Topic "
       placeholder="Topic "
       value={this.state.Topic}
       onChange={e => this.change(e)}
       style={{ width: "350px", height: "40px", marginLeft: "50px", marginBottom: "50px"}}
     />
    </div>
     <div className='Question'>
     <label>QUESTION : </label>
      <input
        name="Question"
        placeholder="Question"
        value={this.state.Question}
        onChange={e => this.change(e)}
        style={{ width: "550px", height: "50px", marginLeft: "50px"}}
      />
     </div>
     <div className='Option-Container'>
     <label>Option A : </label>
      <input
        name="OptionA"
        placeholder="Option A"
        value={this.state.OptionA}
        onChange={e => this.change(e)}
        style={{marginBottom: "30px", marginTop: "50px", marginLeft: "20px"}}
      />
      <br />
      <label>Option B : </label>
      <input
        name="OptionB"
        placeholder="Option B"
        value={this.state.OptionB}
        onChange={e => this.change(e)}
        style={{marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
      />
      <br />
      <label>Option C : </label>
      <input
        name="OptionC"
        placeholder="Option C"
        value={this.state.OptionC}
        onChange={e => this.change(e)}
        style={{marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
      />
      <br />
      <label>Option D : </label>
      <input
        name="OptionD"
        placeholder="Option D"
        value={this.state.OptionD}
        onChange={e => this.change(e)}
        style={{marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
      />
      </div>
      <div className='Correct-Option'>
      <label>Correct Option : </label>
      <input
        name="CorrectOption"
        placeholder="Correct Option"
        value={this.state.CorrectOption}
        onChange={e => this.change(e)}
        style={{width: "230px", height: "40px", marginBottom: "30px", marginTop: "30px", marginLeft: "20px"}}
      />
      </div>
      <br />
      <button onClick={e => this.onSubmit(e)}
      style={{height:"40px",width:"120px",color: "green",}}>Submit</button>
    </form>
  );
}
}
