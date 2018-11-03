import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import './MessageSender.css'

const styles = {
  input: {
    color: 'white'
  }
}

class MessageSender extends React.Component {
  render() {
    return (
      <div className="message-sender">
        <TextField
          autoFocus
          fullWidth
          value={this.props.name}
          style={{ margin: 0 }}
          placeholder="Your name"
          margin="normal"
          variant="outlined"
          onChange={this.props.onSenderChange}
          InputProps={{
            className: this.props.classes.input
          }}
        />
      </div>
    )
  }
}

export default withStyles(styles)(MessageSender)
