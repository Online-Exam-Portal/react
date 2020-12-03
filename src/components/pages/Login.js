import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import loginlogo from './loginlogo.png';


export default function App() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="all"> 
    
    <div className="log">      
    <img src={loginlogo} alt="logo" />
    </div>
      <input name="email" placeholder="Email" ref={register({required: true})} 
      style={{width: "360px",height: "40px",marginBottom: "30px", marginTop: "10px", marginLeft: "-40px"}}/> 
      {errors.email && ' Email is required.'} 
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

