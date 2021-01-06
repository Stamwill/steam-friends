import * as React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import classes from './DownArray.module.css'

const DownArrow = (props) => {
  const { toggleOption } = props;
  return (
    <div className={classes.root}>
      <AiOutlineDown className={classes.downArrow} onClick={toggleOption}/>
    </div>
  )
}


export default DownArrow