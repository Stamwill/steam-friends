import * as React from 'react'
import classes from './UserOption.module.css'

const UserOption = React.forwardRef(function userOption(props, ref) {
  return (
    <div className={classes.root}>
      <div className={classes.optionContainer}>
        <h4 className={classes.option}><span className={classes.online}>Online</span></h4>
        <h4 className={classes.option}>Away</h4>

          <div className={classes.invisibleOption}>
            <h4 className={classes.option}>Invisible</h4>
            <p className={classes.optionInfo}> Appear Offline, but you can still chat </p>
          </div>

          <div className={classes.offline}>
            <h4 className={classes.option}>Offline</h4>
            <p className={classes.optionInfo}> Sign out of Friends & Chat </p>
          </div>

          <hr />

          <div className={classes.doNotDisturb}>

            <div className={classes.checkDisturb}>
              <input type="checkbox" />
              <h4 className={classes.option}>Do Not Disturb</h4>
            </div>

            <p className={classes.optionInfo}>Disables all chat notifications</p>
          </div>

          <hr />

        <h4 className={classes.option}>Edit Profile Name</h4>
      </div>
    </div>
  )
})

export default UserOption;