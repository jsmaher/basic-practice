import React, { Component } from 'react';
class Js extends Component {
    render(){
      return(
       <div>
       {/* <h1>Hello App.js</h1> */}
       <h1 style={{backgroundColor:`blue`}}>{this.props.children}</h1>
       
       </div>
      )
    }
  }
  export default Js
  