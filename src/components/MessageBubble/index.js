import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange'
import deepPurple from '@material-ui/core/colors/deepPurple'
import './MessageBubble.css'

const styles = {
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500]
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  }
}

class MessageBubble extends React.Component {
  getInitials = (name = '') => {
    const splittedName = name.split(' ')
    const firstName = splittedName[0]
    const lastName = splittedName[1]
    if (firstName && lastName) {
      const firstNameFirstChar = firstName[0].toUpperCase()
      const lastNameFirstChar = lastName[0].toUpperCase()
      return `${firstNameFirstChar}${lastNameFirstChar}`
    } else if (firstName) {
      return firstName[0].toUpperCase()
    } else {
      return 'ME'
    }
  }
  render() {
    const { name, text, isMine, classes } = this.props
    return (
      <div
        className="message-bubble"
        style={{
          background: isMine ? '#355f8c' : '#45464e',
          left: isMine ? '447px' : 'initial'
        }}>
        <Avatar className={classes.avatar}>{this.getInitials(name)}</Avatar>
        <div className="message-bubble-text">
          <p>
            <strong>{name}</strong>
          </p>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MessageBubble)
