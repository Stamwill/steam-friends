import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Online.module.css'

const Online = React.forwardRef(function Online(props, ref) {
  const { children, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <img
        className={classes.friendImage}
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b7/b75bbc8332fc6b80b85b31f8a617fdc5bfa9d6e4_full.jpg"
        alt="friend-profile-img"
      />
      <div className={classes.friendContainer}>
        <h3 className={classes.friendName}>Stamboya</h3>
        <h2 className={classes.friendPlaying}>7 days to die</h2>
      </div>
    </div>
  )
})

Online.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Online.uiName = 'Online'

export default Online
