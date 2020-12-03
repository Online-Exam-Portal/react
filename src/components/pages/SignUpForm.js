import React, { Component } from 'react';
import './QuestionForm.css';

export default class QuestionForm extends Component {
state = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  C_password: ""
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
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    C_password: "",
  });
};

render() {
  return (
    <form>
    <div className="section">
    <div className='Topic'>
    <h2>Sign Up </h2>
    <p>Please fill your details to crearte an account.</p>
    </div>
     <div className='Option-Container'>
      <input
        name="FirstName"
        placeholder=" First Name"
        value={this.state.OptionA}
        onChange={e => this.change(e)}
        style={{width: "170px",height: "40px",marginBottom: "30px", marginTop: "50px", marginLeft: "20px"}}
      />
      <input
        name="LastName"
        placeholder="Last Name"
        value={this.state.OptionA}
        onChange={e => this.change(e)}
        style={{width: "170px",height: "40px",marginBottom: "30px", marginTop: "50px", marginLeft: "20px"}}
      />
      <br />
      <input
        name="Email"
        placeholder="Email"
        value={this.state.OptionB}
        onChange={e => this.change(e)}
        style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
      />
      <br/>
      <input
      name="password"
      placeholder="Password"
      value={this.state.OptionC}
      onChange={e => this.change(e)}
      style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
    />
      <br />
      <input
        name="C_password"
        placeholder="Confirm Password"
        value={this.state.OptionC}
        onChange={e => this.change(e)}
        style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
      />
      <br />
      </div>
      <br />
      <button onClick={e => this.onSubmit(e)}
      style={{height:"40px",width:"120px",color: "white",marginLeft: "140px",background: "rgb(87, 169, 250)"}}>Sign Up</button>
      <br />
      </div>
      </form>
  );
}
}
