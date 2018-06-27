import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { STATIC_ARRAY } from './data'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dynamicElements: [],
      staticElements: false
    };
  }

  addElements = () => {
    //TODO: Add Const vs Let in ES6
    const updatedArr = []
    for (let i = 20000; i > 0; i--) {
      updatedArr.push({ label: i });
    }
    this.setState({ dynamicElements: updatedArr })
  }

  reset = () => {
    this.setState({
      dynamicElements: [],
      staticElements: false
    })
  }

  render() {
    const { dynamicElements, staticElements } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Perfomance Optimization</h2>
        </div>
        <button onClick={this.reset}>Reset</button>
        <div className="flex">
          <button onClick={() => this.setState({ staticElements: !staticElements })}>
            Static Add
            </button>
          <button onClick={this.addElements}>
            Dynamic Add
          </button>
        </div>
        <div className="container">
          {dynamicElements.length > 0 ? dynamicElements.map(element => {
            return <Box key={element.label} label={element.label} />
          }) : null}
        </div>
        <div className="container">
          {staticElements ? STATIC_ARRAY.map(element => {
            return <Box key={element.label} label={element.label} />
          }) : null}
        </div>
      </div>
    );
  }
}

export default App;


class Box extends Component {
  render() {
    return (
      <div className="box">
        <p>{this.props.label}</p>
      </div>
    );
  }
}
