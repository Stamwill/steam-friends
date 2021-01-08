import * as React from 'react'
import * as api from 'api/mock'
import Topbar from 'components/Topbar'
import Search from 'components/Search'
import classes from 'App.module.css'
import UserOption from './blocks/UserOption'
import OnlineList from './blocks/OnlineList'
import OfflineList from './blocks/OfflineList'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />
      
      <UserOption />

      <h2 className={classes.onlineFriends}>Online Friends</h2>

      <OnlineList friends={api.friends} 
      />

      <hr className={classes.onlineSplit} />
      <h2 className={classes.offlineFriends}>Offline Friends</h2>

      <OfflineList offlines={api.offline} />
    </div>
  )
}


export default App
