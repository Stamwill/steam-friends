import * as React from 'react'
import PropTypes from 'prop-types'
import OnOffButton from '../../../../../components/OnOffButton'
import classes from './ChatOptionsContainer.module.css'

const ChatOptionsContainer = React.forwardRef(function ChatOptionsContainer(props, ref) {

  const { chatOptions } = props

  return (
    <div className={classes.root} ref={ref}>
       <div className={classes.optionContainer}>
          <div className={classes.infoContainer}>
            <h2 className={classes.option}>{chatOptions.option}</h2>
            <h6 className={classes.info}>{chatOptions.info}</h6>
          </div>
          <div className={classes.onOffButtons}>
            <OnOffButton />
          </div>
        </div>
    </div>
  )
})

ChatOptionsContainer.propTypes = {
  chatOptions: PropTypes.object,
}

export default ChatOptionsContainer