import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Listview from './listview.jsx';

class Listviewcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [], 
    };
  }

  componentDidMount() {
    axios.get('/steps.json')
      .then(function(steps){
        this.setState({steps: steps.data})
      }.bind(this))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Listview steps={this.state.steps}/>
      </div>
    )
  }

}

export default Listviewcontainer; 