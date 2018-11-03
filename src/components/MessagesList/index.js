import React from 'react'
import ReactDOM from 'react-dom'
import MessageBubble from '../MessageBubble'
import './MessagesList.css'

class MessagesList extends React.Component {
  state = {
    scrollableList: null
  }

  componentDidMount() {
    const scrollableList = ReactDOM.findDOMNode(this.refs.scrollableList)
    this.setState({scrollableList})
  }

  scrollToPosition = () => {
    if (this.state.scrollableList) {
      this.state.scrollableList.scrollTo(0, this.state.scrollableList.scrollHeight)
    }
  }
  
  render() {
    const { messages, userUuid } = this.props
    this.scrollToPosition()
    return (
      <div className="messages-list" ref="scrollableList">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            name={message.name}
            text={message.text}
            isMine={userUuid === message.userUuid}
          />
        ))}
      </div>
    )
  }
}

export default MessagesList
