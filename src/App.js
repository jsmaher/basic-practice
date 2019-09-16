
import React, { Component } from 'react';
import Home from './Conponents/Home'
import Login from './Conponents/Login';



class App extends Component {
  constructor(){
    super();
    this.state={
      flag:false
    }
  }

  getData=(data)=>{
    if(data.email === ""){
      alert("enter email address");
    }
    else if(data.password === ""){
      alert("enter password")
    }
    else{    this.setState({
      flag:true,
      email:data.email
    })
  }

  }
  render(){
    return(
     <div id="mainDIv">
        
       <center>
         {
        <Home name={  <h1>Quiz App</h1> } />
        

        }
   
     </center>
     </div>
   
    )
  }
}
export default App