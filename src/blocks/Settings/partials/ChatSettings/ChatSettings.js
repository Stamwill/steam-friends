import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import classes from './ChatSettings.module.css'

const ChatSettings = React.forwardRef(function ChatSettings(props, ref) {

  const { open } = props 

  return (
    <div className={classnames(classes.root, {[ classes.open]: open })}>
      <h1>ChatSettings</h1>
    </div>
  )
})

ChatSettings.propTypes = {
  open: PropTypes.bool,
}

export default ChatSettings