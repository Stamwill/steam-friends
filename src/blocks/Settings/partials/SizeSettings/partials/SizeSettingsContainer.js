import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './SizeSettingsContainer.module.css'

const SizeSettingsContainer = React.forwardRef(function SizeSettingsContainer(props, ref) {

  const { sizeOptions, isOn, handleSize} = props

  return (
    <div className={classes.root} ref={ref}>
       <div className={classes.optionContainer}>
         <h2 className={classes.option}>{sizeOptions.option}</h2>
          <div className={classes.onOffButtons} onClick={handleSize}>
            <button className={classnames(classes.buttonOff, {[classes.off]: !isOn})} type="submit">Off</button>
            <button className={classnames(classes.buttonOn, {[classes.open]: isOn})} type="submit">On</button>
          </div>
        </div>
    </div>
  )
})

SizeSettingsContainer.propTypes = {
  sizeOptions: PropTypes.object,
  isOn: PropTypes.bool,
  handleSize: PropTypes.func,
}

export default SizeSettingsContainer