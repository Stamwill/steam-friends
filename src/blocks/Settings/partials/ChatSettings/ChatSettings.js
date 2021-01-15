import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './ChatSettings.module.css'

const ChatSettings = React.forwardRef(function ChatSettings(props, ref) {

  return (
    <div className={classes.root}>
      <h1>ChatSettings</h1>
    </div>
  )
})

ChatSettings.propTypes = {
  open: PropTypes.bool,
}

export default ChatSettings