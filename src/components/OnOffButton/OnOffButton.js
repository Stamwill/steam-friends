import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import classes from './OnOffButton.module.css'

const OnOffButton = React.forwardRef(function OnOffButton(props, ref) {
  const { isOn, isOff, handleClick } = props
  return (
    <div className={classnames(classes.root)} ref={ref} >
      <div className={classes.buttons} onClick={handleClick}>
        <button className={classnames(classes.buttonOff, {[classes.off]: isOff})} type="submit">Off</button>
        <button className={classnames(classes.buttonOn, {[classes.open]: isOn})} type="submit">On</button>
      </div>
    </div>
  )
})

OnOffButton.propTypes = {
  isOn: PropTypes.bool,
  isOff: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default OnOffButton