import * as React from 'react'
import PropTypes from 'prop-types'
import SizeScaleOptionsContainer from './partials'
import classes from './SizeSettings.module.css'

const SizeScaleSettings = React.forwardRef(function SizeScaleSettings(props, ref) {

  const { sizeOptions } = props

  return (
    <div className={classes.root} ref={ref}>
      <h2 className={classes.header}>SIZE & SCALING</h2>
      {sizeOptions.map((option, idx) => (
        <SizeScaleOptionsContainer 
          key={idx}
          sizeOptions={option}
        />
      ))}

      <h2 className={classes.fontSize}>CHAT FONT SIZE</h2>
      <div className={classes.buttonContainer}>
        <button className={classes.button} type="submit">small</button>
        <button className={classes.button} type="submit">Default</button>
        <button className={classes.button} type="submit">Large</button>
      </div>
    </div>
  )
})

SizeScaleSettings.propTypes = {
  sizeOptions: PropTypes.array,
}

export default SizeScaleSettings