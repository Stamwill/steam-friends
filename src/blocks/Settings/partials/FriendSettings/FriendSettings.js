import * as React from 'react'
import PropTypes from 'prop-types'
import SettingOptionsContainer from './partials/SettingOptionsContainer'
import classes from './FriendSettings.module.css'


const FriendSettings = React.forwardRef(function FriendSettings(props, ref) {

  const { friendOptions } = props

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.closeOptions}>
        <h1 className={classes.header}>FRIENDS LIST</h1>
      </div>

      <div className={classes.rightContainer}>
        {friendOptions.map((option, idx) => (
          <SettingOptionsContainer 
            key={idx}
            friendOptions={option}
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