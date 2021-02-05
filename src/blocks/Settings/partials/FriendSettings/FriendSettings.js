import * as React from 'react'
import PropTypes from 'prop-types'
import FriendOptionsContainer from './partials/FriendOptionsContainer'
import classes from './FriendSettings.module.css'


const FriendSettings = React.forwardRef(function FriendSettings(props, ref) {

  const { friendOptions, isOn, isOff, handleClick } = props

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.closeOptions}>
        <h1 className={classes.header}>FRIENDS LIST</h1>
      </div>

      <div className={classes.rightContainer}>
        {friendOptions.map((option, idx) => (
          <FriendOptionsContainer 
            key={idx}
            friendOptions={option}
            isOn={isOn}
            isOff={isOff}
            handleClick={handleClick}
          />
        ) 
        )}
      </div>
    </div>
  )
})

FriendSettings.propTypes = {
  friendOptions: PropTypes.array,
}

export default FriendSettings