import React, { Component } from 'react';
import { Link } from 'react-router';
import Step from '../step/step.jsx';

import './listview.css';

class Listview extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="listview-wrapper">
        <div className="title-box"><span>STEPS</span></div>
        {this.props.steps.map((step, i) => 
          <Step {...this.props} key={i} i={i} step={step} />
        )}
      </div>
    )
  }

}

export default Listview; 