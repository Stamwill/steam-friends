import * as React from 'react'
import classes from './VoiceThreshold.module.css'

const VoiceThreshold = React.forwardRef(function VoiceThreshold(props, ref) {
  return (
    <div className={classes.root} ref={ref}>
      <h3 className={classes.header}>VOICE TRANSMISSION THRESHOLD</h3>
      <p>When your microphone is on, we won't transmit noise below this threshold:</p>
      
      <div className={classes.buttons}>
        <button className={classes.button} type="submit">Off</button>
        <button className={classes.button} type="submit">Medium <span className={classes.recommended}>RECOMMENDED</span></button>
        <button className={classes.button} type="submit">High</button>
      </div>
    </div>
  )
})

export default VoiceThreshold