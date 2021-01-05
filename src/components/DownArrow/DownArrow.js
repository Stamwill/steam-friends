import * as React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import classes from './DownArray.module.css'

const DownArrow = () => {
  return (
    <div className={classes.root}>
      <AiOutlineDown className={classes.downArrow} />
    </div>
  )
}

export default DownArrow