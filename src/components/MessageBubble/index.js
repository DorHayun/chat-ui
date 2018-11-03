import React from 'react'
import './MessageBubble.css'

class MessageBubble extends React.Component {
  render() {
    const { name, text, isMine } = this.props
    return (
      <div
        className="message-bubble"
        style={{
          background: isMine ? '#355f8c' : '#45464e',
          left: isMine ? '447px' : 'initial'
        }}>
        <p>
          <strong>{name}</strong>
        </p>
        <p>{text}</p>
      </div>
    )
  }
}

export default MessageBubble
