import * as React from 'react'
import PropTypes from 'prop-types'
import NotificationOptionsContainer from './partials/NotificationsOptionsContainer'
import classes from './NotificationSettings.module.css'

const NotificationSettings = React.forwardRef(function NotificationSettings(props, ref) {
  
  const { notificationOptions } = props
  
  return (
    <div className={classes.root}>
      <h2 className={classes.header}>NOTIFICATIONS</h2>
     {notificationOptions.map((option, idx) => (        
      <NotificationOptionsContainer 
        key={idx}
        notificationOptions={option}
       />
     ))}
    </div>
  )
})

NotificationSettings.propTypes = {
  notificationOptions: PropTypes.array,
}

export default NotificationSettings