import * as React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import PropTypes from 'prop-types'
import classes from './UserArrow.module.css'

const OptionArrow = (props) => {
  const { toggleUserOption } = props
  return (
    <div className={classes.root}>
      <AiOutlineDown className={classes.OptionArrow} onClick={toggleUserOption} />
    </div>
  )
}

OptionArrow.propTypes = {
  toggleUserOption: PropTypes.func
}


export default OptionArrow