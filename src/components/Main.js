import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/main/todo" replace>todo</Link>----
        <Link to="/main/about">About</Link>
        <div todos={[]}>{ this.props.children }</div>
      </div>
    );
  }
}

export default Main;