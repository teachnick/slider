import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <HW data="world" />
    );
  }
}

function HW(props) {
  return(
    <div>
      <p>Hello {props.data}!</p>
    </div>
  )
}

export default App;
