import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { AiFillCloseCircle } from 'react-icons/ai'
import FriendSettings from '../partials/FriendSettings'
import ChatSettings from '../partials/ChatSettings'
import NotificationSettings from '../partials/NotificationSettings'
import SizeSettings from '../partials/SizeSettings'
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

  const [buttonState, setbuttonState] = React.useState(
    friendOptions.reduce((acc, cur) => {
      return [...acc, 'off'] 
    },[ ])
  )  

  const handleClick = (idx) => () => {
    setbuttonState((prevState) => {
      const newState = [...prevState]
      newState[idx] = newState[idx] === 'off' ? 'on' : 'off' 
      return newState
    })
  }

  const [chatState, setChatState] = React.useState(
    chatOptions.reduce((acc, cur) => {
      return [...acc, 'off']
    },[ ])
  )

  const handleChat = (idx) => () => {
    setChatState((prevState) => {
      const newState = [...prevState]
      newState[idx] = newState[idx] === 'off' ? 'on' : 'off'
      return newState
    })
  }

  const [sizeState, setSizeState] = React.useState(
    sizeOptions.reduce((acc, cur) => {
      return [...acc, 'off']
    },[ ])
  )

  const handleSize = (idx) => () => {
    setSizeState((prevState) => {
      const newState = [...prevState]
      newState[idx] = newState[idx] === 'off' ? 'on' : 'off'
      return newState
    })
  }

  const [alwaysBtn, setAlwaysBtn] = React.useState(false)
  const [miniBtn, setMiniBtn] = React.useState(true)
  const [neverBtn, setNeverBtn] = React.useState(false)
  
  const handleAlwaysBtn = () => {
    setAlwaysBtn(true)
    setMiniBtn(false)
    setNeverBtn(false)
  }

  const handleMiniBtn = () => {
    setMiniBtn(true)
    setAlwaysBtn(false)
    setNeverBtn(false)
  }

  const handleNeverBtn = () => {
    setNeverBtn(true)
    setAlwaysBtn(false)
    setMiniBtn(false)
  }

  const [smallBtn, setSmallBtn] = React.useState(false)
  const [defaultBtn, setDefaultBtn] = React.useState(true)
  const [largeBtn, setLargeBtn] = React.useState(false)

  const handleSmallBtn = () => {
    setSmallBtn(true)
    setDefaultBtn(false)
    setLargeBtn(false)
  }

  const handleDefaultBtn = () => {
    setDefaultBtn(true)
    setSmallBtn(false)
    setLargeBtn(false)
  }

  const handleLargeBtn = () => {
    setLargeBtn(true)
    setSmallBtn(false)
    setDefaultBtn(false)
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
        <div className={classes.rightBox}>
          <AiFillCloseCircle className={classes.cross} onClick={onClose} />
          { pageIndex === 0 && <FriendSettings 
            friendOptions={friendOptions}
            buttonState={buttonState}
            handleClick={handleClick}
          /> }
          
          { pageIndex === 1 && <ChatSettings 
            chatOptions={chatOptions}
            chatState={chatState}
            handleChat={handleChat}
          /> }

          { pageIndex === 2 && <SizeSettings 
            sizeOptions={sizeOptions}
            sizeState={sizeState}
            handleSize={handleSize}
            smallBtn={smallBtn}
            defaultBtn={defaultBtn}
            largeBtn={largeBtn}
            handleSmallBtn={handleSmallBtn}
            handleDefaultBtn={handleDefaultBtn}
            handleLargeBtn={handleLargeBtn}
          /> }

          { pageIndex === 3 && <NotificationSettings 
            notificationOptions={notificationOptions}
            alwaysBtn={alwaysBtn}
            miniBtn={miniBtn}
            neverBtn={neverBtn}
            handleAlwaysBtn={handleAlwaysBtn}
            handleMiniBtn={handleMiniBtn}
            handleNeverBtn={handleNeverBtn}
          /> }
          
          { pageIndex === 4 && <VoiceSettings /> }
        </div>
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