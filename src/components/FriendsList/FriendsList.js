import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Online from '../../Online/Online'
import classes from './FriendsList.module.css'

const FriendsList = React.forwardRef(function FriendsList(props, ref) {
  const { friends, className, ...other } = props

  return (
    <article className={classnames(classes.root, className)} ref={ref} {...other}>
      <div>
        <div>
          {friends.map((friend, idx) => (
            <Online key={idx} friends={friend} />
          ))}
        </div>
      </div>
    </article>
  )
})

FriendsList.propTypes = {

  friends: PropTypes.array.isRequired,
  className: PropTypes.string,
}

FriendsList.uiName = 'FriendsList'

export default FriendsList
