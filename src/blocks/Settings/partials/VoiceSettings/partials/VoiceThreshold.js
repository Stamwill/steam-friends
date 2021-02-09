import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './VoiceThreshold.module.css'

const VoiceThreshold = React.forwardRef(function VoiceThreshold(props, ref) {

  const { offBtn, mediumBtn, highBtn,
          handleOffBtn, handleMediumBtn, handleHighBtn,
  } = props

  return (
    <div className={classes.root} ref={ref}>
      <h3 className={classes.header}>VOICE TRANSMISSION THRESHOLD</h3>
      <p>When your microphone is on, we won't transmit noise below this threshold:</p>
      
      <div className={classes.buttons}>
        <button className={classnames(classes.button, {[ classes.active]: offBtn})} onClick={handleOffBtn}type="submit">Off</button>
        <button className={classnames(classes.button, {[ classes.active]: mediumBtn})} onClick={handleMediumBtn}type="submit">Medium <span className={classes.recommended}>RECOMMENDED</span></button>
        <button className={classnames(classes.button, {[ classes.active]: highBtn})} onClick={handleHighBtn}type="submit">High</button>
      </div>
    </div>
  )
})

VoiceThreshold.propTypes = {
  offBtn: PropTypes.bool,
  mediumBtn: PropTypes.bool,
  highBtn: PropTypes.bool,
  handleOffBtn: PropTypes.func,
  handleMediumBtn: PropTypes.func,
  handleHighBtn: PropTypes.func,
}

export default VoiceThreshold