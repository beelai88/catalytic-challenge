import React, { Component } from 'react';
import { Link } from 'react-router';

import './step.css';

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getNames(userIds){
    let map = {}; 
    let usernames = [];
    this.props.users.map(function(user){
      map[user.userID] = user.username;
    })
    userIds.forEach(function(id){
      if (map.hasOwnProperty(id)) {
        usernames.push(map[id])
      }
    })
    return usernames;
  }

  findDependencies(step){
    let map = {}; 
    let dependencies = [];
    this.props.steps.map(function(step){
      map[step.stepName] = step.stepNumber;
    })
    step.forEach(function(step){
      if (map.hasOwnProperty(step)) {
        dependencies.push(map[step])
      }
    })
    return dependencies;
  }

  handleClick(event){
    event.preventDefault();
    let positionInArray = this.props.i;
    this.props.setCurrentStep({index: positionInArray});
  }

  render() {
    const { step, i } = this.props
    return (
      <div className="step-box" onClick={(e) => {this.handleClick(e)}}>
        <div className="step-number">
          <h3>{step.stepNumber}</h3>
        </div>
        <div className="step-info">
          <h4>{step.displayName.length > 22 ? step.displayName.slice(0,22) + "..." : step.displayName}</h4>
          <h5>{ step.role.users.length ?
              'Assigned to ' + this.getNames(step.role.users).join(', ') : '' }</h5>
          <h5>{ step['requiredPreviousSteps'].length > 0 ? "Depends on: " + this.findDependencies(step.requiredPreviousSteps).join(", ") : ""}</h5>
        </div>
      </div>
    )
  }

}

export default Step; 


