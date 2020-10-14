import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './FriendsList.module.css'

const FriendsList = React.forwardRef(function FriendsList(props, ref) {
  const { friends, className, ...other } = props

  return (
    <article className={classnames(classes.root, className)} ref={ref} {...other}>
      <a className={classes.userImg} href="/">
        <img src="//source.unsplash.com/45x45?gaming" alt="" />
      </a>

      <div className={classes.userContainer}>
        <h4 className={classes.userName}>{friends.userName}</h4>

        <h5 className={classes.userStatus}>{friends.userStatus}</h5>
      </div>
    </article>
  )
})

FriendsList.propTypes = {
  friends: PropTypes.object.isRequired,
  className: PropTypes.string,
}

FriendsList.uiName = 'FriendsList'

export default FriendsList
