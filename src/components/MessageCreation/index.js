import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import './MessageCreation.css'

const styles = theme => ({
  input: {
    color: '#FFFFFF'
  },
  button: {
    margin: theme.spacing.unit,
    position: 'relative',
    bottom: '92px',
    left: '665px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
})

class MessageCreation extends React.Component {
  onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      this.props.handleSubmit()
    }
  }

  render() {
    const { text, classes, onMessageChange, handleSubmit, isValid } = this.props
    return (
      <div className="message-creation">
        <TextField
          fullWidth
          value={text}
          style={{ margin: 0 }}
          placeholder="Write a message..."
          margin="normal"
          variant="outlined"
          onKeyPress={this.onKeyPressHandler}
          onChange={onMessageChange}
          InputProps={{
            className: classes.input
          }}
        />
        <Button
          variant="fab"
          color="primary"
          disabled={!isValid()}
          className={classes.button}
          onClick={handleSubmit}>
          <SendIcon />
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(MessageCreation)
