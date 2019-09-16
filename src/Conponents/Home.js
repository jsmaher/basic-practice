import React, { Component } from 'react';
class Home extends Component {
    render(){
      return(
       <div>

       <nav>
    <div class="nav-wrapper">
      <ul class="right hide-on-med-and-down">
        <li><a class="btn-large">login with Facebook</a></li>
      </ul>
    </div>
  </nav>

       <h3>{this.props.name}</h3>
       
       </div>
      )
    }
  }
  export default Home