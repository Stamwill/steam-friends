import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Topbar.module.css'

const Topbar = React.forwardRef(function Topbar(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <main className={classes.main}>
        <img
          className={classes.profileImage}
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b7/b75bbc8332fc6b80b85b31f8a617fdc5bfa9d6e4_full.jpg"
          alt="profile"
        />

        <div className={classes.userContainer}>
          <h4 className={classes.userName}>Cyndraz</h4>

          <h5 className={classes.userStatus}>Online</h5>
        </div>
      </main>
    </div>
  )
})

Topbar.propTypes = {
  className: PropTypes.string,
}

Topbar.uiName = 'Topbar'

export default Topbar
