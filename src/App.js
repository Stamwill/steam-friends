import * as React from 'react'
import * as api from 'api/mock'
import Topbar from 'components/Topbar'
import Search from 'components/Search'
import classes from 'App.module.css'
import SettingsPage from './blocks/Settings/SettingsPage'
import OnlineList from './blocks/OnlineList'
import OfflineList from './blocks/OfflineList'

function App() {

  const [settingsOpen, setSettingsOpen] = React.useState(false)

  const [filterText, setFilterText] = React.useState("");

  const filteredFriends = api.friends.filter(
    friends =>
      friends.userName.toLowerCase().includes(filterText) 
  );

  const onlineStatuses = ["Online", "Away", "Busy"]
  const onlineFriends = []
  const offlineFriends = []

  for (let i = 0; i < filteredFriends.length; i++) {
    if(onlineStatuses.includes(filteredFriends[i].userStatus)) {
      onlineFriends.push(filteredFriends[i])
    } else {
      offlineFriends.push(filteredFriends[i])
    }
  }

  const handleSearch = (e) => {
    setFilterText(e.target.value.toLowerCase())
  }

  const handleToggleSettings = () => {
    setSettingsOpen((prevState) => !prevState)
  }

  return (
    <div className="App">
      <Topbar onToggleSettings={handleToggleSettings}/>
      <Search handleSearch={handleSearch}/>

      <SettingsPage 
        open={settingsOpen} 
        onClose={handleToggleSettings} 
        listSettings={api.listSettings}
        friendOptions={api.friendOptionList}
        chatOptions={api.chatOptionList}
        sizeOptions={api.sizeOptionList}
        notificationOptions={api.notificationOptionList}
      />
      
      <h2 className={classes.onlineFriends}>Online Friends</h2>

      {onlineFriends ? 
      <OnlineList friends={onlineFriends} />
      : filterText }

      <hr className={classes.onlineSplit} />
      <h2 className={classes.offlineFriends}>Offline Friends</h2>

      <OfflineList offlines={offlineFriends} />
    </div>
  )
}

export default App
