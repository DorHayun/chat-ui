import React from 'react'
import MessageBubble from '../MessageBubble'
import './MessagesList.css'




class MessagesList extends React.Component {
  render() {
    const { messages, name } = this.props
    return (
      <div className="messages-list">
        {
          messages.map((message, index) => (
            <MessageBubble key={index} name={message.name} text={message.text} isMine={name === message.name} />)
          )
        }
      </div>
     
    )
  }
}

export default MessagesList
