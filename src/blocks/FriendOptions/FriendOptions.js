import * as React from 'react'
import classnames from 'clsx'
import propTypes from 'prop-types'
import classes from './FriendOptions.module.css'

const FriendOptions = React.forwardRef(function FriendOptions(props, ref) {
  const { open, ...other } = props
  
  return (
    <div className={classnames(classes.root,{ [ classes.open ]: open } )} {...other}>
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

FriendOptions.propTypes = {
  open: propTypes.bool,
}

export default FriendOptions