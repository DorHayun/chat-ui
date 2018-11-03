import React from 'react'
import uuid from 'uuid/v1'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MessagesContainer from '../MessagesContainer'
import Logo from '../../assets/spotim-logo.png'
import './App.css'

class App extends React.PureComponent {
  state = {
    userUuid: ''
  }

  componentWillMount() {
    const userUuid = uuid()
    this.setState({ userUuid })
  }

  render() {
    return (
      <div className="app-container">
        <AppBar position="static" color="default">
          <Toolbar>
            <img src={Logo} alt="Logo" id="logo" />
          </Toolbar>
        </AppBar>
        <div className="app-sub-container">
          <MessagesContainer {...this.props} userUuid={this.state.userUuid} />
        </div>
      </div>
    )
  }
}

export default App
