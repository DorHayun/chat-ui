import React from 'react'
import MessagesContainer from '../MessagesContainer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.PureComponent {
  render() {
    return (<div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            SPOT.IM
          </Typography>
        </Toolbar>
      </AppBar>
      <MessagesContainer {...this.props}/>
    </div>)
  }
}

export default App
