import React, { Component } from 'react';
import { Link } from 'react-router';

import './processdetail.css';

class ProcessDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(e){
    e.preventDefault();
    const displayName = this.refs.displayName.value; 
    const description = this.refs.description.value; 
    this.props.editProcess({displayName, description})
  }

  render() {
    return (
      <div className="process-title">
        <h3 data-toggle="collapse" data-target="#edit-process">{this.props.process.displayName}
          <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
        </h3>

        <div id="edit-process" className="collapse">

          <div className="process-details">
            <label htmlFor="processDisplayName">Display Name</label>
            <span className='glyphicon glyphicon-pencil'></span>
            <input type="text" className="input-text details" placeholder={this.props.process.displayName} ref="displayName"/>
          </div>
          <div className="process-details">
            <label htmlFor="processDisplayName">Description</label>
            <span className='glyphicon glyphicon-pencil'></span>
            <input type="text" className="input-text details" placeholder={this.props.process.description} ref="description"/>
          </div>

          <div className="process-details">
            <label htmlFor="owner">Owner</label><br />
            <span className="details">{this.props.process.owner}</span><br />
          </div>
          <div className="process-details">
            <label htmlFor="category">Category</label><br />
            <span className="details">{this.props.process.category}</span><br />
          </div>
          <button className="btn save-btn" onClick={(e) => this.handleSubmit(e)}>Save</button>

        </div>
      </div>
    )
  }

}

export default ProcessDetail; 