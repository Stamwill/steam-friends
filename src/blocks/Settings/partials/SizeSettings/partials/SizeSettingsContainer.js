import * as React from 'react'
import PropTypes from 'prop-types'
import OnOffButton from '../../../../../components/OnOffButton'
import classes from './SizeSettingsContainer.module.css'

const SizeScaleOptionsContainer = React.forwardRef(function SizeScaleOptionsContainer(props, ref) {

  const { sizeOptions } = props

  return (
    <div className={classes.root} ref={ref}>
       <div className={classes.optionContainer}>
         <h2 className={classes.option}>{sizeOptions.option}</h2>
          <div className={classes.onOffButtons}>
            <OnOffButton />
          </div>
        </div>
    </div>
  )
})

SizeScaleOptionsContainer.propTypes = {
  sizeOptions: PropTypes.object,
}

export default SizeScaleOptionsContainer