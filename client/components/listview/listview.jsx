import React, { Component } from 'react';
import { Link } from 'react-router';

import './listview.css';

class Listview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="listview-wrapper">
      I'm the list view on the left. 
        Steps: 
        { this.props.steps.map((steps, i) => (
          <div key={i}>{steps.displayName}</div>
        ))}
      </div>
    )
  }

}

export default Listview; 