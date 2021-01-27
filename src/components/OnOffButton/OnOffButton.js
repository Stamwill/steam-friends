import * as React from 'react'
import classnames from 'clsx'
import classes from './OnOffButton.module.css'

const OnOffButton = React.forwardRef(function OnOffButton(props, ref) {

  const [isOn, setIsOn] = React.useState(false)
  const [isOff, setIsOff] = React.useState(true)

  const handleClick = () => {
    setIsOn((prevState) => !prevState)
    setIsOff((prevState) => !prevState)
  }


  return (
    <div className={classnames(classes.root)} ref={ref} >
      <div className={classes.buttons} onClick={handleClick}>
        <button className={classnames(classes.buttonOff, {[classes.off]: isOff})} type="submit">Off</button>
        <button className={classnames(classes.buttonOn, {[classes.open]: isOn})} type="submit">On</button>
      </div>
    </div>
  )
})

export default OnOffButton