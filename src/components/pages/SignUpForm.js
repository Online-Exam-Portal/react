import React, { Component } from 'react';
import './styles/QuestionForm.css';
import axios from 'axios';

export default class QuestionForm extends Component {
state = {
  role: "",
  id: "",
  name: "",
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
  console.log(this.state)

  axios
  .post("http://localhost:5000/register", {
    role: this.state.role,
    id: this.state.id,
    name: this.state.name,
    password: this.state.password
  })
  .then((res) => {
      alert(JSON.stringify(res.data.msg))
    });
    
  this.setState({
    role: "",
    id: "",
    name: "",
    password: "",
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
        <select
        id='role'
        name='role' style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
        value={this.state.role}
        onChange={e => this.change(e)}>
        <option>Choose role</option>
        <option>student</option>
        <option>teacher</option>
        </select><br/>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.change(e)}
            style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
          />
          <br/>
          <input
            name="id"
            placeholder="ID"
            value={this.state.id}
            onChange={e => this.change(e)}
            style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
          />
          <br/>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
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
