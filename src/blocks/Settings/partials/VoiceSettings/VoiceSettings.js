import * as React from 'react'
import PropTypes from 'prop-types'
import VoiceTransmission from './partials/VoiceTransmission'
import VoiceThreshold from './partials/VoiceThreshold'
import classes from './VoiceSettings.module.css'

const VoiceSettings = React.forwardRef(function VoiceSettings(props, ref) {

  const { offBtn, mediumBtn, highBtn,
          handleOffBtn, handleMediumBtn, handleHighBtn
  } = props

  return (
    <div className={classes.root} ref={ref}>
      <h1 className={classes.header}>VOICE</h1>
      <div className={classes.micTestContainer}>
        <div className={classes.micTest}>
          <button className={classes.button} type="submit">Start Microphone Test</button>
        </div>
      </div>

      <div className={classes.voiceInpDev}>
        <label className={classes.voiceInpLabel} htmlFor="Voice Input Device">VOICE INPUT DEVICE</label>
        <select className={classes.selectVoiceInput}>
          <option>Default</option>
          <option>Headphone</option>
          <option>Speakers</option>
        </select>
      </div>

      <div className={classes.voiceOutDev}>
        <label className={classes.voiceOutLabel} htmlFor="Voice Input Device">VOICE INPUT DEVICE</label>
        <select className={classes.selectVoiceInput}>
          <option>Default</option>
          <option>Headphone</option>
          <option>Speakers</option>
        </select>
      </div>

      <div className={classes.volumeSliderContainer}>
        <div className={classes.volumeSlider}>
          <h3 className={classes.volumeHeader}>Input volume/gain</h3>
          <input className={classes.volumeRange} type="range" />
          <p className={classes.userMic}>(My microphone)</p>
        </div>

        <div className={classes.volumeSlider}>
          <h3 className={classes.volumeHeader}>Output volume/gain</h3>
          <input className={classes.volumeRange} type="range" />
          <p className={classes.userMic}>(My friends)</p>
        </div>
      </div>

      <VoiceTransmission />
      <VoiceThreshold 
        offBtn={offBtn} 
        mediumBtn={mediumBtn} 
        highBtn={highBtn}
        handleOffBtn={handleOffBtn}
        handleMediumBtn={handleMediumBtn}
        handleHighBtn={handleHighBtn}
        />
    </div>
  )
})

VoiceSettings.propTypes = {
  offBtn: PropTypes.bool,
  mediumBtn: PropTypes.bool,
  highBtn: PropTypes.bool,
  handleOffBtn: PropTypes.func,
  handleMediumBtn: PropTypes.func,
  handleHighBtn: PropTypes.func,
}

export default VoiceSettings