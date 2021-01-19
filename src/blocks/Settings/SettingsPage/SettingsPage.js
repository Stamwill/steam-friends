import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { AiFillCloseCircle } from 'react-icons/ai'
import FriendSettings from '../partials/FriendSettings'
import ChatSettings from '../partials/ChatSettings'
import NotificationSettings from '../partials/NotificationSettings'
import SizeScaleSettings from '../partials/SizeScaleSettings'
import VoiceSettings from '../partials/VoiceSettings'
import classes from './SettingsPage.module.css'
import ListItem from './partials/ListItem'


const SettingsPage = React.forwardRef(function SettingsPage(props, ref) {
  const { 
    open, 
    listSettings, 
    friendOptions, 
    chatOptions, 
    sizeOptions,
    notificationOptions, 
    onClose,
  } = props

  const [pageIndex, setPageIndex] = React.useState(0)
  
  const handlePageIndex = (idx) => () => {
    setPageIndex(idx)
  }



  return (
    <div className={classnames(classes.root, {[classes.open]: open} )} ref={ref}>
      <div className={classes.leftContainer}>
        <h3 className={classes.settings}>Friends List Settings</h3>
        
        {listSettings.map((list,idx) => (
          <div key={list.id}>
            <ListItem 
              key={idx}
              list={list}
              onClick={handlePageIndex(idx)}
            />
          </div>
        ))} 
      </div>

      <div className={classes.rightContainer}>
          <AiFillCloseCircle className={classes.cross} onClick={onClose} />
          { pageIndex === 0 && <FriendSettings friendOptions={friendOptions} /> }
          { pageIndex === 1 && <ChatSettings chatOptions={chatOptions} /> }
          { pageIndex === 2 && <SizeScaleSettings sizeOptions={sizeOptions}/> }
          { pageIndex === 3 && <NotificationSettings notificationOptions={notificationOptions}/> }
          { pageIndex === 4 && <VoiceSettings /> }
      </div>
    </div>
  )
})

SettingsPage.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  listSettings: PropTypes.array,
  friendOptions: PropTypes.array,
  chatOptions: PropTypes.array,
  notificationOptions: PropTypes.array,
  sizeOptions: PropTypes.array
}

export default SettingsPage