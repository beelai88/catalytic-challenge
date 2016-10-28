import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Detailview from './detailview.jsx';

class Detailviewcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      process: [], 
    };
  }

  componentDidMount() {
    axios.get('/process.json')
      .then(function(process){
        this.setState({process: process.data})
      }.bind(this))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Detailview process={this.state.process}/>
      </div>
    )
  }

}

export default Detailviewcontainer; 