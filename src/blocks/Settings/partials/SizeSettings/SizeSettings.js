import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import SizeScaleOptionsContainer from './partials'
import classes from './SizeSettings.module.css'

const SizeScaleSettings = React.forwardRef(function SizeScaleSettings(props, ref) {

  const { sizeOptions, sizeState, handleSize,
          smallBtn, defaultBtn, largeBtn,
          handleSmallBtn, handleDefaultBtn, handleLargeBtn,
  } = props

  return (
    <div className={classes.root} ref={ref}>
      <h2 className={classes.header}>SIZE & SCALING</h2>
      {sizeOptions.map((option, idx) => (
        <SizeScaleOptionsContainer 
          key={idx}
          sizeOptions={option}
          isOn={sizeState[idx] === 'on'}
          isOff={sizeState[idx] === 'off'}
          handleSize={handleSize(idx)}
        />
      ))}

      <h2 className={classes.fontSize}>CHAT FONT SIZE</h2>
      <div className={classes.buttonContainer}>
        <button className={classnames(classes.button, {[classes.active]: smallBtn})} onClick={handleSmallBtn} type="submit">small</button>
        <button className={classnames(classes.button, {[classes.active]: defaultBtn})} onClick={handleDefaultBtn} type="submit">Default</button>
        <button className={classnames(classes.button, {[classes.active]: largeBtn})} onClick={handleLargeBtn} type="submit">Large</button>
      </div>
    </div>
  )
})

SizeScaleSettings.propTypes = {
  sizeOptions: PropTypes.array,
  sizeState: PropTypes.array,
  handleSize: PropTypes.func,
  smallBtn: PropTypes.bool,
  defaultBtn: PropTypes.bool,
  largeBtn: PropTypes.bool,
  handleSmallBtn: PropTypes.func,
  handleDefaultBtn: PropTypes.func,
  handleLargeBtn: PropTypes.func,
}

export default SizeScaleSettings