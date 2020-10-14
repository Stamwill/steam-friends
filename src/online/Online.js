import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Online.module.css'

const Online = React.forwardRef(function Online(props, ref) {
  const { friends, className, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>


       <a className={classes.userImg} href="/">
        <img src="//source.unsplash.com/45x45?gaming" alt="" />
      </a>

      <div className={classes.userContainer}>
        <h4 className={classes.userName}>{friends.userName}</h4>

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
