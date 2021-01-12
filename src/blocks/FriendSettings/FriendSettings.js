import * as React from 'react'
import classes from './FriendSettings.module.css'

const FriendSettings = React.forwardRef(function FriendSettings(props, ref) {

  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <h3 className={classes.settings}>Friends List Settings</h3>
        
        <h2 className={classes.leftOption}>FRIENDS LIST</h2>
        <h2 className={classes.leftOption}>CHAT</h2>
        <h2 className={classes.leftOption}>SIZE & SCALING</h2>
        <h2 className={classes.leftOption}>NOTIFICATIONS</h2>
        <h2 className={classes.leftOption}>VOICE</h2>

      </div>

      <div className={classes.rightContainer}>
        <h1 className={classes.header}>FRIENDS LIST</h1>

        <div className={classes.rightOption}>
          <h2 className={classes.heading}>Append nicknames to friends' names</h2>

          <div className={classes.onOffButtons}>
            <button className={classes.buttonOff} type="submit">Off</button>
            <button className={classes.buttonOn} type="submit">On</button>
          </div>
        </div>

        <div className={classes.rightOption}>
          <h2 className={classes.heading}>Group friends together by game</h2>

          <div className={classes.onOffButtons}>
            <button className={classes.buttonOff} type="submit">Off</button>
            <button className={classes.buttonOn} type="submit">On</button>
          </div>
        </div>

        <div className={classes.rightOption}>
          <h2 className={classes.heading}>Hide offline friends in custom categories</h2>

          <div className={classes.onOffButtons}>
            <button className={classes.buttonOff} type="submit">Off</button>
            <button className={classes.buttonOn} type="submit">On</button>
          </div>
        </div>

        <div className={classes.rightOption}>
          <h2 className={classes.heading}>Hide categorized friends in Online/Offline Friends</h2>

          <div className={classes.onOffButtons}>
            <button className={classes.buttonOff} type="submit">Off</button>
            <button className={classes.buttonOn} type="submit">On</button>
          </div>
        </div>

        <div className={classes.rightOption}>
          <h2 className={classes.heading}>Ignore 'Away' status when sorting friends</h2>

          <div className={classes.onOffButtons}>
            <button className={classes.buttonOff} type="submit">Off</button>
            <button className={classes.buttonOn} type="submit">On</button>
          </div>
        </div>

        <div className={classes.rightOption}>
          <h2 className={classes.heading}>Sign in to friends when Steam Client starts</h2>

          <div className={classes.onOffButtons}>
            <button className={classes.buttonOff} type="submit">Off</button>
            <button className={classes.buttonOn} type="submit">On</button>
          </div>
        </div>

        <div className={classes.rightOption}>
          <h2 className={classes.heading}>Enable Animated Avatars & Animated Avatar Frames in your Friends List and Chat</h2>

          <div className={classes.onOffButtons}>
            <button className={classes.buttonOff} type="submit">Off</button>
            <button className={classes.buttonOn} type="submit">On</button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default FriendSettings