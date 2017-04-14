import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}> {user.userName}</li>)
    debugger
    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

///--------///
//We create the mapStatetoProps at the SPECIFIC LEVEL where we need to rerender.
//We also provide SPECIFIC STATE VALUES for the React Component to render.  In this case, it's users and primary users.

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0],
  }
}

 export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
