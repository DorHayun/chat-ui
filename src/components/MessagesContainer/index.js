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
      this.setState({ messages: this.state.messages.concat(message) })
    })
  }

  clearMessage = () => {
    this.setState({ text: '' })
  }

  onSenderChange = event => {
    const name = event.target.value
    this.setState({ name })
  }

  onMessageChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  isValid = () => {
    const name = this.state.name
    const text = this.state.text
    return name.length > 0 && text.length > 0
  }

  handleSubmit = () => {
    if (this.isValid()) {
      const message = {
        name: this.state.name,
        text: this.state.text,
        userUuid: this.props.userUuid
      }
      this.props.socket.emit('spotim/chat', message)
      this.clearMessage()
    }
  }

  render() {
    const { onSenderChange, onMessageChange, handleSubmit, isValid } = this
    const { userUuid } = this.props
    const { name, text, messages } = this.state
    return (
      <div className="message-container">
        <MessagesList messages={messages} userUuid={userUuid} />
        <MessageSender name={name} onSenderChange={onSenderChange} />
        <MessageCreation
          text={text}
          onMessageChange={onMessageChange}
          handleSubmit={handleSubmit}
          isValid={isValid}
        />
      </div>
    )
  }
}

export default MessagesContainer
