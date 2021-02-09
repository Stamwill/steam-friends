import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import SizeScaleOptionsContainer from './partials'
import classes from './SizeSettings.module.css'

const SizeScaleSettings = React.forwardRef(function SizeScaleSettings(props, ref) {

  const { sizeOptions, sizeState, handleSize,  } = props

  const [smallBtn, setSmallBtn] = React.useState(false)
  const [defaultBtn, setDefaultBtn] = React.useState(true)
  const [largeBtn, setLargeBtn] = React.useState(false)

  const handleSmallBtn = () => {
    setSmallBtn(true)
    setDefaultBtn(false)
    setLargeBtn(false)
  }

  const handleDefaultBtn = () => {
    setDefaultBtn(true)
    setSmallBtn(false)
    setLargeBtn(false)
  }

  const handleLargeBtn = () => {
    setLargeBtn(true)
    setSmallBtn(false)
    setDefaultBtn(false)
  }

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
}

export default SizeScaleSettings