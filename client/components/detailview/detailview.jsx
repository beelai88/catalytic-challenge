import React, { Component } from 'react';
import { Link } from 'react-router';

import './detailview.css';

class Detailview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="detailview-wrapper">
        I'm the detail block on the right. 
        Process: 
        { this.props.process.map((process, i) => (
          <div key={i}>{process.displayName}</div>
        ))}
      </div>
    )
  }

}

export default Detailview; 