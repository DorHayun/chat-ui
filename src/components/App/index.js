import React from 'react'
import MessagesContainer from '../MessagesContainer'

class App extends React.PureComponent {
  render() {
    return <MessagesContainer {...this.props}/>
  }
}

export default App
