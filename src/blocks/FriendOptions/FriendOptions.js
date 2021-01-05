import * as React from 'react'
import classes from './FriendOptions.module.css'

const FriendOptions = React.forwardRef(function FriendOptions(props, ref) {
  return (
    <div className={classes.root}>
      <div className={classes.optionList}>
        <h3 className={classes.option}>Send Message</h3>
          <hr />
        <h3 className={classes.option}>Start Voice Chat</h3>
          <hr />
        <h3 className={classes.option}>View Profile</h3>
          <hr />
        <h3 className={classes.option}>Trading</h3>
          <hr />
        <h3 className={classes.option}>Manage</h3>
      </div>
    </div>
  )
})



export default FriendOptions