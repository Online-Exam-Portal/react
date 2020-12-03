import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import loginlogo from './loginlogo.png';
import axios from 'axios';

export default function App() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log("Data" + data);
    try {
      axios
        .post("http://localhost:5000/login", {
          role: data.role,
          id: data.id,
          password: data.password
        })
        .then((res) => {
            alert(JSON.stringify(res.data.msg))
            if(res.data.code===200) {
              localStorage.setItem("role", data.role);
              localStorage.setItem("id", data.id);
            }

          });
          
    } catch (e) {
      alert("Axios error!" + e);
    }

    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="all"> 
    
    <div className="log">      
    <img src={loginlogo} alt="logo" />
    </div>
      <select
      id='role'
      name='role' style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "-40px"}}
      ref={register({required: true})}>
      <option>student</option>
      <option>teacher</option>
      </select><br/>
      <input name="id" placeholder="ID" ref={register({required: true})} 
      style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "-40px"}}/> 
      {errors.email && ' ID is required.'} 
      <br/>
      <input name="password" placeholder="Password" ref={register({ required: true})} 
      style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "-40px"}}/>
      {errors.password && ' Password is required.'}
      <div className="l_btn">
      <input type="submit" value="Login" 
      style={{height:"40px",width:"120px",color: "white",marginLeft: "90px",marginTop: "30px",background: "rgb(87, 169, 250)"}}/>
      </div>
      </div>
    </form>
  );
}

