import * as React from 'react'
import PropTypes from 'prop-types'
import ChatOptionsContainer from './partials/ChatOptionsContainer'
import classes from './ChatSettings.module.css'

const ChatSettings = React.forwardRef(function ChatSettings(props, ref) {
  const { chatOptions } = props

  return (
    <div className={classes.root} ref={ref} >
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