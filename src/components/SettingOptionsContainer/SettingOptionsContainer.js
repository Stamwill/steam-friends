import * as React from 'react'
import OnOffButton from '../OnOffButton'
import classes from './SettingOptionsContainer.module.css'

const SettingOptionsContainer = React.forwardRef(function SettingOptionsContainer(props, ref) {
 
  const { friendOptions } = props

  console.log(friendOptions.option)

  return (
    <div className={classes.root} ref={ref}>
       <div className={classes.rightOption}>
          <h2 className={classes.heading}>{friendOptions.option}</h2>
          <div className={classes.onOffButtons}>
            <OnOffButton />
          </div>
        </div>
    </div>
  )
})

export default SettingOptionsContainer