import * as React from 'react'
import classes from './NotificationSettings.module.css'

const NotificationSettings = React.forwardRef(function NotificationSettings(props, ref) {
  return (
    <div className={classes.root}>
      <h1>NotificationSettings</h1>
    </div>
  )
})

export default NotificationSettings