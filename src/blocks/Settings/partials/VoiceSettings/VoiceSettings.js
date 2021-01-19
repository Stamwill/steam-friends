import * as React from 'react'
import classes from './VoiceSettings.module.css'

const VoiceSettings = React.forwardRef(function VoiceSettings(props, ref) {
  return (
    <div className={classes.root} ref={ref}>
      <h1 className={classes.header}>VOICE</h1>
      <div className={classes.micTestContainer}>
        <div className={classes.micTest}>
          <button className={classes.button} type="submit">Start Microphone Test</button>
        </div>
      </div>

      <div className={classes.voiceInpDev}>
        <label htmlFor="Voice Input Device">VOICE INPUT DEVICE</label>
        <select>
          <option>Default</option>
          <option>Headphone</option>
          <option>Speakers</option>
        </select>
      </div>
    </div>
  )
})

export default VoiceSettings