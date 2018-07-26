import React, { Component } from 'react';
import './ohai.css';

export class Hello extends Component{
  render(){
    return(
      <div className='f1 tc'>
      <h1>Hello World.</h1>
      <p>Alrighty then.</p>
      <h1>I'm watching you, dog.</h1>
      <h3>{this.props.dog}</h3>
      </div>
    );
  }
}
export default Hello;
