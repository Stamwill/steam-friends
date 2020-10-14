import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './OnlineFriends.module.css'

const OnlineFriends = React.forwardRef(function OnlineFriends(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
     <h1 className={classes.heading}>Online Friends (2)</h1>
    </div>
  )
})

OnlineFriends.propTypes = {
  className: PropTypes.string,
}

OnlineFriends.uiName = 'OnlineFriends'

export default OnlineFriends
