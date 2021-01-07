import * as React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import PropTypes from 'prop-types'
import classes from './OptionArrow.module.css'

const OptionArrow = (props) => {
  const { toggleOption } = props
  return (
    <div className={classes.root}>
      <AiOutlineDown className={classes.OptionArrow} onClick={toggleOption} />
    </div>
  )
}

OptionArrow.propTypes = {
  toggleOption: PropTypes.func
}


export default OptionArrow