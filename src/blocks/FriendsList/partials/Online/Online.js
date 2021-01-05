import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import DownArrow from '../../../../components/DownArrow'
import classes from './Online.module.css'

const Online = React.forwardRef(function Online(props, ref) {
  const { friends, className, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>


       <a className={classes.userImg} href="/">
        <img src="//source.unsplash.com/40x40?gaming" alt="" />
      </a>

      <div className={classes.userContainer}>
        <div className={classes.friendAndOptions}>
          <h4 className={classes.userName}>{friends.userName}</h4>
          <div className={classes.userArrow}>
            <DownArrow />
          </div>
        </div>
        <h5 className={classes.userStatus}> {friends.userStatus} </h5>
      </div>


    </div>
  )
})

Online.propTypes = {
  friends: PropTypes.object.isRequired,
  className: PropTypes.string,

}

Online.uiName = 'Online'

export default Online
