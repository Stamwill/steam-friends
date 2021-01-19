import * as React from 'react'
import PropTypes from 'prop-types'
import ChatOptionsContainer from './partials/ChatOptionsContainer'
import classes from './ChatSettings.module.css'

const ChatSettings = React.forwardRef(function ChatSettings(props, ref) {
  const { chatOptions } = props

  return (
    <div className={classes.root} ref={ref} >
      <h2 className={classes.header}>CHAT</h2>
      {chatOptions.map((option, idx) => (
        <ChatOptionsContainer 
        key={idx}
        chatOptions={option}
        />
      ))}
    </div>
  )
})

ChatSettings.propTypes = {
  chatOptions: PropTypes.array
}

export default ChatSettings