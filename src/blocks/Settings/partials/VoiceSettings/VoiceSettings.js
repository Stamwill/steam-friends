import * as React from 'react'
import classes from './VoiceSettings.module.css'

const VoiceSettings = React.forwardRef(function VoiceSettings(props, ref) {
  return (
    <div className={classes.root}>
      <h1>VoiceSettings</h1>
    </div>
  )
})

export default VoiceSettings