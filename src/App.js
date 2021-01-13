import * as React from 'react'
import * as api from 'api/mock'
import Topbar from 'components/Topbar'
import Search from 'components/Search'
import classes from 'App.module.css'
import SettingsPage from './blocks/Settings/SettingsPage'
import OnlineList from './blocks/OnlineList'
import OfflineList from './blocks/OfflineList'

function App() {

  const [toggleSettings, setToggleSettings] = React.useState(false)

  const handleSettings = () => {
    if (toggleSettings) {
      setToggleSettings(false)
    } else {
      setToggleSettings(true)
    }
  }

  return (
    <div className="App">
      <Topbar handleSettings={handleSettings}/>
      <Search />
      
      <SettingsPage 
        open={toggleSettings} 
        handleSettings={handleSettings} 
        className={classes.settingsTest}
        listSettings={api.listSettings}
      />
      
      <h2 className={classes.onlineFriends}>Online Friends</h2>

      <OnlineList friends={api.friends} />

      <hr className={classes.onlineSplit} />
      <h2 className={classes.offlineFriends}>Offline Friends</h2>

      <OfflineList offlines={api.offline} />
    </div>
  )
}


export default App
