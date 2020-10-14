import React from 'react'
import * as api from 'api/mock'
import Topbar from 'components/Topbar/Topbar'
import Search from 'components/Search/Search'
import Online from 'Online/Online'
import OnlineFriends from 'OnlineFriends/OnlineFriends'
import classes from 'App.module.css'


function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />
      <hr className={classes.split} />
      <OnlineFriends />
      <Online friends={api.friends}/>
      {/* <FriendsList friends={api.friends}/> */}

    </div>
  )
}

export default App
