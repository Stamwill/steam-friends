import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import profileImg from '../../images/profile-image.jpg'
import classes from './Topbar.module.css'

const Topbar = React.forwardRef(function Topbar(props, ref) {
  const { children, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <main className={classes.main}>
        <image className={classes.profileImage} src={profileImg} alt="profile picture" />

        <div className={classes.userContainer}>
          <h4 className={classes.userName}>Cyndraz</h4>

          <h5 className={classes.userStatus}>Online</h5>
        </div>
      </main>
    </div>
  )
})

Topbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Topbar.uiName = 'Topbar'

export default Topbar
