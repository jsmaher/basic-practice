import React, { Component } from 'react';
import "./../Conponents/Login.css"
import Input from './Input';
import Home from './Home'
class Login extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }
    render(){
      console.log(this.state);
      return(
       <div>
     <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">React</a>
      <ul class="right hide-on-med-and-down">
      </ul>
    </div>
  </nav>
       {/* <h1>Hello App.js</h1> */}
       <h2>Log In</h2>
       <Input type="email" onChange={(e)=>this.setState({email:e.target.value})}/>
       <Input type="password" onChange={(e)=>this.setState({password:e.target.value})}/>
       <button id="LoginBtn" onClick={()=>this.props.func(this.state)}>Login</button>
       
       </div>
      )
    }
  }
  export default Login