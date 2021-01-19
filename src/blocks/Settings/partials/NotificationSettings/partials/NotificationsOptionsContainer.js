import * as React from 'react'
import PropTypes from 'prop-types'
import OnOffButton from '../../../../../components/OnOffButton'
import classes from './NotificationsOptionsContainer.module.css'

const NotificationOptionsContainer = React.forwardRef(function NotificationOptionsContainer(props, ref) {

  const { notificationOptions } = props

  return (
    <div className={classes.root} ref={ref}>
       <div className={classes.optionContainer}>
         <h2 className={classes.option}>{notificationOptions.option}</h2>
          <div className={classes.onOffButtons}>
            <OnOffButton />
          </div>
        </div>
    </div>
  )
})

NotificationOptionsContainer.propTypes = {
  notificationOptions: PropTypes.object,
}

export default NotificationOptionsContainer