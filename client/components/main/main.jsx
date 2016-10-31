import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../navbar/navbar.jsx';
import Detailview from '../detailview/detailview.jsx';
import Listview from '../listview/listview.jsx';

import './main.css';

class Main extends Component {

  componentDidMount(){
    fetch('/api/process')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.props.setProcess(data.processes);
      this.props.setSteps(data.steps);
    })
    .catch(err => console.error(err));

    fetch('/api/users')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.props.setUsers(data.users);
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="main-wrapper">
        <Navbar/>
        <Listview {...this.props}/>
        <Detailview {...this.props}/>
      </div>
    )
  }

}

export default Main; 