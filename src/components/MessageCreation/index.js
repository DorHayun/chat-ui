import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import './MessageCreation.css'





const styles = {
  input: {
    color: 'white'
  }
}

class MessageCreation extends React.Component {
  render() {
    const {text, classes, onMessageChange, handleSubmit} = this.props
    return (
      <div className="message-creation">
        <TextField
          fullWidth
          value={text}
          style={{ margin: 0 }}
          placeholder="Write a message..."
          margin="normal"
          variant="outlined"
          onKeyPress={handleSubmit}
          onChange={onMessageChange}
          InputProps={{
            className: classes.input
          }}
         
        

        />
            <Button  variant="contained" color="secondary" disabled className={classes.button}>
          Disabled
          </Button>

      </div>
    )
  }
}

export default withStyles(styles)(MessageCreation)
