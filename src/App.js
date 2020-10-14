import React from 'react'
import FriendsList from 'components/FriendsList/FriendsList'
import * as api from 'api/mock'
import Topbar from 'components/Topbar/Topbar'
import Search from 'components/Search/Search'
import OnlineFriends from 'OnlineFriends/OnlineFriends'
import classes from 'App.module.css'
import OfflineFriends from './OfflineFriends/OfflineFriends'
import OfflineList from './OfflineList/OfflineList'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />
      <hr className={classes.split} />
      <OnlineFriends friends={api.friends}/>
      <FriendsList friends={api.friends} />
      <hr className={classes.onlineSplit} />
      <OfflineFriends />
      <OfflineList offlines={api.offline} />
    </div>
  )
}

export default App
