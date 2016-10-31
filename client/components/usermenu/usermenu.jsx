import React, { Component } from 'react';
import User from '../user/user.jsx'

import './usermenu.css'

class UserMenu extends Component {
  constructor(props) {
    super(props); 
    this.state = {};
  }

  handleClick(event) {
    event.preventDefault();
    this.props.clearUsersOnStep(this.props.currentStep);
    this.setState({noUsersAssigned: true});
  }

  render() {
    return(
      <div id="users" className="user-menu collapse">
          <div className="user-tile" onClick={(e) => this.handleClick(e)}>
            <span className="glyphicon glyphicon-remove-circle user-icon"
              aria-hidden="true">
            </span>
            <div className="user-username">None</div>
          </div>
          {this.props.users.map((user, i)=> 
            <User {...this.props} key={i} user={user} noUsersAssigned={ this.state.noUsersAssigned } />
          )}
      </div>
    )
  }

}

export default UserMenu;
