import React from 'react';
import {render} from 'react-dom'; 

import './index.css';
import Main from './components/main/main.jsx';

import { Router, Route, IndexRoute, browserHistory} from 'react-router'; 

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)

render(
  router, 
  document.getElementById('root')
)

