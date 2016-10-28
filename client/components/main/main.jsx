import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Navbar from '../navbar/navbar.jsx';
import Detailviewcontainer from '../detailview/detailviewcontainer.jsx';
import Listviewcontainer from '../listview/listviewcontainer.jsx';

import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-wrapper">
        <Navbar/>
        <Listviewcontainer/>
        <Detailviewcontainer />
      </div>
    )
  }

}

export default Main; 