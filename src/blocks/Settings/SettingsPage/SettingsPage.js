import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import FriendSettings from '../partials/FriendSettings'
import ChatSettings from '../partials/ChatSettings'
// import NotificationSettings from '../partials/NotificationSettings'
// import SizeScaleSettings from '../partials/SizeScaleSettings'
// import VoiceSettings from '../partials/VoiceSettings'
import classes from './SettingsPage.module.css'
import ListItem from './partials/ListItem'


const SettingsPage = React.forwardRef(function SettingsPage(props, ref) {
  const { open, listSettings, handleSettings } = props
  
  const [togglePage, setTogglePage] = React.useState(false)
  const [toggleChat, setToggleChat] = React.useState(false)

  const handleTogglePage = () => {
    if (togglePage) {
      setTogglePage(false)
      console.log('false')
    } else {
      setTogglePage(true)
      console.log('true')
    }
  }

  const handleToggleChat = (idx) => () => {
    if (toggleChat) {
      setToggleChat(false)
      console.log('chat')
    } else {
      setToggleChat(idx)
    }
  }

  return (
    <div className={classnames(classes.root, {[classes.open]: open})}>
      <div className={classes.leftContainer}>
        <h3 className={classes.settings}>Friends List Settings</h3>
        
        {listSettings.map((list,idx) => (
          <div key={idx}>
            <ListItem 
              key={idx}
              list={list}
              handleTogglePage={handleTogglePage}
            />
          </div>
        ))} 
      </div>

      <div className={classes.rightContainer}>
        <div>
          <FriendSettings handleSettings={handleSettings} open={togglePage}/>
          <ChatSettings open={toggleChat} />
        </div>
      
      </div>
    </div>
  )
})

SettingsPage.propTypes = {
  open: PropTypes.bool,
  handleSettings: PropTypes.func,
  listSettings: PropTypes.array,
}

export default SettingsPage

//     RIGHT CONTAINER 
// <div className={classes.rightHeader}>
//             <h1 className={classes.header}>FRIENDS LIST</h1>
//             <AiFillCloseCircle className={classes.cross} onClick={handleSettings}/>
//           </div>

//           <div className={classes.rightOption}>
//             <h2 className={classes.heading}>Append nicknames to friends' names</h2>
//             <div className={classes.onOffButtons}>
//               <OnOffButton />
//             </div>
//           </div>

//           <div className={classes.rightOption}>
//             <h2 className={classes.heading}>Group friends together by game</h2>
//             <div className={classes.onOffButtons}>
//               <OnOffButton />
//             </div>
//           </div>

//           <div className={classes.rightOption}>
//             <h2 className={classes.heading}>Hide offline friends in custom categories</h2>
//             <div className={classes.onOffButtons}>
//               <OnOffButton />
//             </div>
//           </div>

//           <div className={classes.rightOption}>
//             <h2 className={classes.heading}>Hide categorized friends in Online/Offline Friends</h2>
//             <div className={classes.onOffButtons}>
//               <OnOffButton />
//             </div>
//           </div>

//           <div className={classes.rightOption}>
//             <h2 className={classes.heading}>Ignore 'Away' status when sorting friends</h2>
//             <div className={classes.onOffButtons}>
//               <OnOffButton />
//             </div>
//           </div>

//           <div className={classes.rightOption}>
//             <h2 className={classes.heading}>Sign in to friends when Steam Client starts</h2>
//             <div className={classes.onOffButtons}>
//               <OnOffButton />
//             </div>
//           </div>

//           <div className={classes.rightOption}>
//             <h2 className={classes.heading}>Enable Animated Avatars & Animated Avatar Frames in your Friends List and Chat</h2>
//             <div className={classes.onOffButtons}>
//               <OnOffButton />
//             </div>
//           </div>