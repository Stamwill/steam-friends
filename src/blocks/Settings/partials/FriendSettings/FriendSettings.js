import * as React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import OnOffButton from '../../../../components/OnOffButton'
import classes from './FriendSettings.module.css'

const FriendSettings = React.forwardRef(function FriendSettings(props, ref) {
  const { handleSettings, open } = props
  return (
    <div className={classnames(classes.root, {[ classes.open ]: open })}>
      <div className={classes.rightContainer}>
        <div className={classes.closeOptions}>
          <h1 className={classes.header}>FRIENDS LIST</h1>
          <AiFillCloseCircle className={classes.cross} onClick={handleSettings} />
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

FriendSettings.propTypes = {
  handleSettings: PropTypes.func,
}

export default FriendSettings