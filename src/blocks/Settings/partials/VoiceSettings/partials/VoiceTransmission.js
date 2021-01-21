import * as React from 'react'
import classes from './VoiceTransmission.module.css'

const VoiceTransmission = React.forwardRef(function VoiceTransmission(props, ref) {
  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.buttons}>
        <button className={classes.button} type="submit">Open Microphone</button>
        <button className={classes.button} type="submit">Push-to-Talk</button>
        <button className={classes.button} type="submit">Push-to-Mute</button>
      </div>

      <div className={classes.muteToggle}>
        <p className={classes.muteP}>Mute toggle hotkey assigned as</p>
        <button className={classes.muteButton} type="submit">None</button>
        <button className={classes.muteCancel} type="submit">X</button>
      </div>

      <div className={classes.soundOn}>
        <p className={classes.soundP}>Play a short sound on microphone toggle</p>
        <label className={classes.soundSwitch}>
          <input className={classes.soundCheck} type="checkbox" />
          <span className={classes.slider} />
        </label>
      </div>
    </div>
  )
})

export default VoiceTransmission