import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/todo" replace>todo</Link>----
        <Link to="/about">About</Link>
        <div todos={[]}>{ this.props.children }</div>
      </div>
    );
  }
}

export default App;