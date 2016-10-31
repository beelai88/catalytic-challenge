import React, { Component } from 'react';
import ProcessDetail from '../processdetail/processdetail.jsx';
import StepDetail from '../stepdetail/stepdetail.jsx';

import './detailview.css';

class Detailview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="detailview-wrapper">
        <ProcessDetail {...this.props}></ProcessDetail>
        <StepDetail {...this.props}></StepDetail>
      </div>
    )
  }

}

export default Detailview; 