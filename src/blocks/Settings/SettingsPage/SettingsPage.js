import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { AiFillCloseCircle } from 'react-icons/ai'
import OnOffButton from 'components/OnOffButton'
// import ChatSettings from '../partials/ChatSettings'
// import FriendSettings from '../partials/FriendSettings'
// import NotificationSettings from '../partials/NotificationSettings'
// import SizeScaleSettings from '../partials/SizeScaleSettings'
// import VoiceSettings from '../partials/VoiceSettings'
import classes from './SettingsPage.module.css'


const SettingsPage = React.forwardRef(function SettingsPage(props, ref) {
  const { open, handleSettings } = props

  return (
    <div className={classnames(classes.root, {[classes.open]: open})}>
        <div className={classes.leftContainer}>
          <h3 className={classes.settings}>Friends List Settings</h3>
          
          <h2 className={classes.leftOption}>FRIENDS LIST</h2>
          <h2 className={classes.leftOption}>CHAT</h2>
          <h2 className={classes.leftOption}>SIZE & SCALING</h2>
          <h2 className={classes.leftOption}>NOTIFICATIONS</h2>
          <h2 className={classes.leftOption}>VOICE</h2>

        </div>

        <div className={classes.rightContainer}>
          <div className={classes.rightHeader}>
            <h1 className={classes.header}>FRIENDS LIST</h1>
            <AiFillCloseCircle className={classes.cross} onClick={handleSettings}/>
          </div>

          <div className={classes.rightOption}>
            <h2 className={classes.heading}>Append nicknames to friends' names</h2>
            <div className={classes.onOffButtons}>
              <OnOffButton />
            </div>
          </div>

          <div className={classes.rightOption}>
            <h2 className={classes.heading}>Group friends together by game</h2>
            <div className={classes.onOffButtons}>
              <OnOffButton />
            </div>
          </div>

          <div className={classes.rightOption}>
            <h2 className={classes.heading}>Hide offline friends in custom categories</h2>
            <div className={classes.onOffButtons}>
              <OnOffButton />
            </div>
          </div>

          <div className={classes.rightOption}>
            <h2 className={classes.heading}>Hide categorized friends in Online/Offline Friends</h2>
            <div className={classes.onOffButtons}>
              <OnOffButton />
            </div>
          </div>

          <div className={classes.rightOption}>
            <h2 className={classes.heading}>Ignore 'Away' status when sorting friends</h2>
            <div className={classes.onOffButtons}>
              <OnOffButton />
            </div>
          </div>

          <div className={classes.rightOption}>
            <h2 className={classes.heading}>Sign in to friends when Steam Client starts</h2>
            <div className={classes.onOffButtons}>
              <OnOffButton />
            </div>
          </div>

          <div className={classes.rightOption}>
            <h2 className={classes.heading}>Enable Animated Avatars & Animated Avatar Frames in your Friends List and Chat</h2>
            <div className={classes.onOffButtons}>
              <OnOffButton />
            </div>
          </div>
        </div>
      
    </div>
  )
})

SettingsPage.propTypes = {
  open: PropTypes.bool,
  handleSettings: PropTypes.func,
}

export default SettingsPage