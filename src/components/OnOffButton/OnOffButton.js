import * as React from 'react'
import classes from './OnOffButton.module.css'

const OnOffButton = React.forwardRef(function OnOffButton(props, ref) {
  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <button className={classes.buttonOff} type="submit">Off</button>
        <button className={classes.buttonOn} type="submit">On</button>
      </div>
    </div>
  )
})

export default OnOffButton