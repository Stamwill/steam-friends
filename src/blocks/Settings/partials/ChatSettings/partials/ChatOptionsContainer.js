import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './ChatOptionsContainer.module.css'

const ChatOptionsContainer = React.forwardRef(function ChatOptionsContainer(props, ref) {

  const { chatOptions, isOn, handleChat } = props


  return (
    <div className={classes.root} ref={ref}>
       <div className={classes.optionContainer}>
          <div className={classes.infoContainer}>
            <h2 className={classes.option}>{chatOptions.option}</h2>
            <h6 className={classes.info}>{chatOptions.info}</h6>
          </div>
          <div className={classes.onOffButtons} onClick={handleChat}>
            <button className={classnames(classes.buttonOff, {[classes.off]: !isOn})} type="submit">Off</button>
            <button className={classnames(classes.buttonOn, {[classes.open]: isOn})} type="submit">On</button>
          </div>
        </div>
    </div>
  )
})

ChatOptionsContainer.propTypes = {
  chatOptions: PropTypes.object,
  isOn: PropTypes.bool,
  handleChat: PropTypes.func,
}

export default ChatOptionsContainer