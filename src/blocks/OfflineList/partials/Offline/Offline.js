import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { userType } from 'utils/index'
import OptionArrow from '../../../../components/OptionArrow'
import classes from './Offline.module.css'

const Offline = React.forwardRef(function Offline(props, ref) {
  const { offlines, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
          <a className={classes.userImg} href="/">
        <img src="//source.unsplash.com/40x40?gaming" alt="" />
      </a>

      <div className={classes.userContainer}>
        <div className={classes.friendAndOptions}>
          <h4 className={classes.userName}>{offlines.userName}</h4>
          <div className={classes.userArrow}>
            <OptionArrow />
          </div>
        </div>
        <h5 className={classes.userStatus}> {offlines.userStatus} </h5>
      </div>
    </div>
  )
})

Offline.propTypes = {
  userType: PropTypes.arrayOf(userType),
  offlines: PropTypes.object,
  className: PropTypes.string,
}

Offline.uiName = 'Offline'

export default Offline
