import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Playing.module.css'

const Playing = React.forwardRef(function Playing(props, ref) {
  const { children, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>

    </div>
  )
})

Playing.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Playing.uiName = 'Playing'

export default Playing
