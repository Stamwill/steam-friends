import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import FriendsList from '../components/FriendsList/FriendsList'
import classes from './Online.module.css'

const Online = React.forwardRef(function Online(props, ref) {
  const { friends, className, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div>
        {friends.map((friend, idx) => (
          <FriendsList key={idx} friends={friend} />
        ))}
      </div>

      <hr className={classes.onlineHr} />
    </div>
  )
})

Online.propTypes = {
  friends: PropTypes.array.isRequired,
  className: PropTypes.string,

}

Online.uiName = 'Online'

export default Online
