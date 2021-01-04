import * as React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import classes from './DownArray.module.css'

const DownArrow = React.forwardRef(function DownArrow(props, ref) {
  return (
    <div className={classes.root}>
      <AiOutlineDown className={classes.downArrow} />
    </div>
  )
})

export default DownArrow