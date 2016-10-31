import React, { Component } from 'react';
import classNames from 'classnames';

import './user.css'

class User extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isActive: false
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.state.isActive = true; 
    this.props.assignUserToStep(this.props.user.userID, this.props.currentStep)
  }

  render() {
    const { user, i } = this.props;
    // const isActive = this.state.isActive;
    // const cx = classNames('active-user', { isActive })

    var userTileClass = 'user-tile';
    if (this.state.isActive) {
      userTileClass += ' active-user';
    }

    if (this.props.noUsersAssigned) {
      userTileClass += ' inactive-user';
    }
    
    return (
      // <div className={cx} onClick={(e) => this.handleClick(e)}>
      <div className={userTileClass} onClick={(e) => this.handleClick(e)}>
        <img className="user-icon" src="images/avatars/pb_1.jpg" />
        <div className="user-username">{user.username}</div>
      </div>
    )
  }

}

export default User;
