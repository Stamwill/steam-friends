import * as React from 'react'
import PropTypes from 'prop-types'
import SizeScaleOptionsContainer from './partials'
import classes from './SizeScaleSettings.module.css'

const SizeScaleSettings = React.forwardRef(function SizeScaleSettings(props, ref) {

  const { sizeOptions } = props

  return (
    <div className={classes.root}>
      {sizeOptions.map((option, idx) => (
        <SizeScaleOptionsContainer 
          key={idx}
          sizeOptions={option}
        />
      ))}
    </div>
  )
})

SizeScaleSettings.propTypes = {
  sizeOptions: PropTypes.array,
}

export default SizeScaleSettings