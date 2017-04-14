import React, { Component } from 'react'
import UserInput from './components/UserInput'
import { ConnectedUsers } from './components/Users' //use brackets to pull the constant vs. component



export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers />
      </div>
    );
  }
}

export default App
