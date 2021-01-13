import * as React from 'react'
import classes from './ChatSettings.module.css'

const ChatSettings = React.forwardRef(function ChatSettings(props, ref) {
  return (
    <div className={classes.root}>
      <h1>ChatSettings</h1>
    </div>
  )
})

export default ChatSettings