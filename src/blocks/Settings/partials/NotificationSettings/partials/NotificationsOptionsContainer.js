import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './NotificationsOptionsContainer.module.css'

const NotificationOptionsContainer = React.forwardRef(function NotificationOptionsContainer(props, ref) {

  const { notificationOptions } = props

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.optionContainer}>
        <h2 className={classes.option}>{notificationOptions.option}</h2>
          
        <input className={classes.firstCheck} type="checkbox" />
        <input className={classes.secondCheck} type="checkbox" />
      </div>
    </div>
  )
})

NotificationOptionsContainer.propTypes = {
  notificationOptions: PropTypes.object,
}

export default NotificationOptionsContainer