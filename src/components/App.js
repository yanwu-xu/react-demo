import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/home/sub">sub</Link>
        <div>{ this.props.children }</div>
      </div>
    );
  }
}

export default App;