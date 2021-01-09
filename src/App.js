import * as React from 'react'
import * as api from 'api/mock'
import Topbar from 'components/Topbar'
import Search from 'components/Search'
import classes from 'App.module.css'
import UserOption from './blocks/UserOption'
import OnlineList from './blocks/OnlineList'
import OfflineList from './blocks/OfflineList'

function App() {

  const [ toggleState, setToggleState ] = React.useState(undefined)

  const toggleUserOption = (idx) => {
    if (idx === toggleState) {
      setToggleState(undefined)
    } else {
      setToggleState(idx)
    }
    console.log('clicked')
  }

  return (
    <div className="App">
      <Topbar toggleUserOption={toggleUserOption}/>
      <Search />
      
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
