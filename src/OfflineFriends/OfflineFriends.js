import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './OfflineFriends.module.css'

const OfflineFriends = React.forwardRef(function OfflineFriends(props, ref) {
  const {  className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1 className={classes.heading}>Offline Friends</h1>
    </div>
  )
})

OfflineFriends.propTypes = {

  className: PropTypes.string,
}

OfflineFriends.uiName = 'OfflineFriends'

export default OfflineFriends
