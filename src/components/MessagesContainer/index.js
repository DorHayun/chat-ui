import React from 'react'
import MessagesList from '../MessagesList'
import MessageSender from '../MessageSender'
import MessageCreation from '../MessageCreation'
import './MessagesContainer.css'

class MessagesContainer extends React.Component {
  state = {
    name: '',
    text: '',
    messages: []
  }

  componentDidMount() {
    this.props.socket.on('spotim/chat', message => {
      this.setState({messages: this.state.messages.concat(message)})
    })
  }

  clearMessage = () => {
    this.setState({text: ''})
  }

  onSenderChange = event => {
    const name = event.target.value
    this.setState({name})
  }

  onMessageChange = event => {
    const text = event.target.value
    this.setState({text})
  }

  handleSubmit = event => {
    if (event.key === 'Enter') {
      const message = {name: this.state.name, text: this.state.text}
      this.props.socket.emit('spotim/chat', message)
      this.clearMessage()
    }
  }

  render() {
    const {onSenderChange, onMessageChange, handleSubmit} = this
    const {name, text, messages} = this.state
    return (
      <div className="message-list">
        <MessagesList messages={messages} name={name}/>
        <MessageSender name={name} onSenderChange={onSenderChange} />
        <MessageCreation text={text} onMessageChange={onMessageChange} handleSubmit={handleSubmit}/>
      </div>
    )
  }
}

export default MessagesContainer
