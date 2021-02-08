import * as React from 'react'
import PropTypes from 'prop-types'
import ChatOptionsContainer from './partials/ChatOptionsContainer'
import classes from './ChatSettings.module.css'

const ChatSettings = React.forwardRef(function ChatSettings(props, ref) {
  const { chatOptions, handleChat, chatState } = props

  return (
    <div className={classes.root} ref={ref} >
      <h2 className={classes.header}>CHAT</h2>
      {chatOptions.map((option, idx) => (
        <ChatOptionsContainer 
        key={idx}
        chatOptions={option}
        isOn={chatState[idx] === 'on' }
        isOff={chatState[idx] === 'off' }
        handleChat={handleChat(idx)}
        />
      ))}
    </div>
  )
})

ChatSettings.propTypes = {
  chatOptions: PropTypes.array,
  handleChat: PropTypes.func,
  chatState: PropTypes.array
}

export default ChatSettings