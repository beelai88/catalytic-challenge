import React, { Component } from 'react';
import { Link } from 'react-router';

import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="logo">
          <img id="pushbot-peeker" src="/images/pushbot-peeker.png"/>
        </div>
        <div className="navbar-items">
          <span className="navbar-item"><a className="navbar-link">TASKS</a></span>
          <span className="navbar-item"><a className="navbar-link">ROUTINES</a></span>
          <span className="navbar-item"><a className="navbar-link">TEMPLATES</a></span>
        </div>
      </div>
    )
  }

}

export default Navbar; 