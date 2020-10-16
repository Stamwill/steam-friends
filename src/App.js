import React from 'react'
import * as api from 'api/mock'
import Topbar from 'components/Topbar/Topbar'
import Search from 'components/Search/Search'
import classes from 'App.module.css'
import FriendsList from './blocks/FriendsList'
import OfflineList from './blocks/OfflineList'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />

      <hr className={classes.split} />
      <h2 className={classes.onlineFriends}>Online Friends</h2>

      <FriendsList friends={api.friends} />

      <hr className={classes.onlineSplit} />
      <h2 className={classes.offlineFriends}>Offline Friends</h2>

      <OfflineList offlines={api.offline} />
    </div>
  )
}

export default App
