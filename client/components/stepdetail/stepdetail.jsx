import React, { Component } from 'react';
import { Link } from 'react-router';
import UserMenu from '../usermenu/usermenu.jsx'
import './stepdetail.css';

class StepDetail extends Component {
  constructor(props) {
    super(props); 
  }

  findDependencies(step){
    let map = {}; 
    let dependencies = [];
    this.props.steps.map(function(step){
      map[step.stepName] = step.stepNumber;
    })
    step.requiredPreviousSteps.forEach(function(step){
      if (map.hasOwnProperty(step)) {
        dependencies.push(map[step])
      }
    })
    return dependencies;
  }

  handleSubmit(e){
    e.preventDefault();
    const displayName = this.refs.displayName.value; 
    const description = this.refs.description.value; 
    this.props.editStep({displayName, description}, this.props.currentStep.index)
  }

  // I couldn't get the input value to update with the correct currentStep after the form was submitted - seems like defaultValue loads only on initialization but using a controlled form using "value" didn't yield better results either - but the state is updating correctly, I added two p tags that show that they are updating underneath the inputs themselves as you click on the different states 
  onChangeFunction(event){
    // console.log('this', this)
    // console.log('event.target.value', event.target.value)
  }

  render() {   
    const index = this.props.currentStep.index;
    const step = this.props.steps[index];

    if (this.props.currentStep.index > -1) {
      return (
        <div className="step-details">
          <h4>Configuration Settings</h4>
          <div className="step-detail">
            <label htmlFor="stepDisplayName">Display Name</label>
            <span className='glyphicon glyphicon-pencil'></span>
            <input type="text" className="input-text details" defaultValue={step.displayName} ref="displayName"/>
            <p>{step.displayName}</p>
          </div>
          <div className="step-detail">
            <label htmlFor="stepDisplayName">Description</label>
            <span className='glyphicon glyphicon-pencil'></span>
            <input type="text" className="input-text details" defaultValue={step.description} ref="description"/>
            <p>{step.description}</p>
          </div>
          <div className="step-detail">
            <label htmlFor="dependencies">Dependencies</label><br />
            <span className="details">{this.findDependencies(step)}</span><br />
          </div>
          <div className="step-detail">
            <label htmlFor="conditions">Conditions</label><br />
            <span className="details">{step.conditions.join(', ')}</span><br />
          </div>
          <div className="step-detail">
            <label htmlFor="category">Fields</label><br />
            <span className="details">{step.category}</span><br />
          </div>
          <button className="btn save-btn" onClick={(e) => this.handleSubmit(e)}>Save</button>
          
          <h4>
            <span data-toggle="collapse" className="user-title" data-target="#users">
            Assign Users:
              <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
            </span>
          </h4>
          <UserMenu id="user-menu" {...this.props} />

        </div>
      )
    } else {
      return null;
    }
  }

}

export default StepDetail; 

