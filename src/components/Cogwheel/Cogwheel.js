import * as React from 'react'
import PropTypes from 'prop-types'
import { FaCog } from 'react-icons/fa'; 
import classes from './Cogwheel.module.css'

const Cogwheel = React.forwardRef(function Cogwheel(props, ref) {
  const { handleSettings } = props
  return (
    <div className={classes.cogWheel}>
      <FaCog className={classes.cogWheel} onClick={handleSettings}/>
    </div>
  )
})

Cogwheel.propTypes = {
  handleSettings: PropTypes.func,
}

export default Cogwheel