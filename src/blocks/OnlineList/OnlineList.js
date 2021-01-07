import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Online from './partials/Online'
import classes from './OnlineList.module.css'

const OnlineList = React.forwardRef(function OnlineList(props, ref) {
  const { friends, toggleOption, className, ...other } = props

  return (
    <article className={classnames(classes.root, className)} ref={ref} {...other}>
      <div>
        <div>
          {friends.map((friend, idx) => (
            <Online key={idx} friends={friend} toggleOption={toggleOption} />
          ))}
        </div>
      </div>
    </article>
  )
})

OnlineList.propTypes = {
  friends: PropTypes.array.isRequired,
  toggleOption: PropTypes.func,
  className: PropTypes.string,
}

OnlineList.uiName = 'OnlineList'

export default OnlineList