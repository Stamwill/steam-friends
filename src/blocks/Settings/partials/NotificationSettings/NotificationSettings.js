import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import NotificationOptionsContainer from './partials/NotificationsSettingsContainer'
import classes from './NotificationSettings.module.css'

const NotificationSettings = React.forwardRef(function NotificationSettings(props, ref) {
  
  const { notificationOptions, 
          alwaysBtn, miniBtn, neverBtn,
          handleAlwaysBtn, handleMiniBtn, handleNeverBtn 
        } = props

  return (
    <div className={classes.root} ref={ref}>
      <h2 className={classes.header}>NOTIFICATIONS</h2>
      <div className={classes.inputHeaders}>
            <h3 className={classes.friendNotification}>FRIEND NOTIFICATIONS</h3>
            <h3 className={classes.showNotification}>Show a notification</h3>
            <h3 className={classes.playSound}>Play a sound</h3>
          </div>
      {notificationOptions.map((option, idx) => (        
        <NotificationOptionsContainer 
          key={idx}
          notificationOptions={option}
        />
      ))}

      <h2 className={classes.chatMessageHeader}>FLASH WINDOW WHEN I RECIEVE A CHAT MESSAGE:</h2>
      <div className={classes.buttons}>
        <button className={classnames(classes.button, {[classes.active]: alwaysBtn })} onClick={handleAlwaysBtn} type="submit">Always</button>
        <button className={classnames(classes.button, {[classes.active]: miniBtn })} onClick={handleMiniBtn} type="submit">Only when minimized</button>
        <button className={classnames(classes.button, {[classes.active]: neverBtn })} onClick={handleNeverBtn} type="submit">Never</button>
      </div>
    </div>
  )
})

NotificationSettings.propTypes = {
  notificationOptions: PropTypes.array,
  alwaysBtn: PropTypes.bool,
  miniBtn: PropTypes.bool,
  neverBtn: PropTypes.bool,
  handleAlwaysBtn: PropTypes.func,
  handleMiniBtn: PropTypes.func,
  handleNeverBtn: PropTypes.func,
}

export default NotificationSettings