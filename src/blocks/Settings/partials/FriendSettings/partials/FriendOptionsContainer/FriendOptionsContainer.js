import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './FriendOptionsContainer.module.css'

const FriendOptionsContainer = React.forwardRef(function FriendOptionsContainer(props, ref) {

  const { friendOptions, isOn, handleClick } = props
  
  return (
    <div className={classes.root} ref={ref}>
       <div className={classes.optionContainer}>
         <h2 className={classes.option}>{friendOptions.option}</h2>
          <div className={classes.onOffButtons} onClick={handleClick}>
            <button className={classnames(classes.buttonOff, {[classes.off]: !isOn})} type="submit">Off</button>
            <button className={classnames(classes.buttonOn, {[classes.open]: isOn})} type="submit">On</button>
          </div>
        </div>
    </div>
  )
})

FriendOptionsContainer.propTypes = {
  friendOptions: PropTypes.object,
}

export default FriendOptionsContainer