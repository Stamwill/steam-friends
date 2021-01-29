import * as React from 'react'
import PropTypes from 'prop-types'
import OnOffButton from '../../../../../../components/OnOffButton'
import classes from './SettingOptionsContainer.module.css'

const SettingOptionsContainer = React.forwardRef(function SettingOptionsContainer(props, ref) {

  const { friendOptions, isOn, isOff, handleClick} = props


  return (
    <div className={classes.root} ref={ref}>
       <div className={classes.optionContainer}>
         <h2 className={classes.option}>{friendOptions.option}</h2>
          <div className={classes.onOffButtons}>
            <OnOffButton isOn={isOn}
            isOff={isOff}  
            handleClick={handleClick}/>
          </div>
        </div>
    </div>
  )
})

SettingOptionsContainer.propTypes = {
  friendOptions: PropTypes.object,
}

export default SettingOptionsContainer