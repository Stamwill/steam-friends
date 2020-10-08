import React from 'react'
import Topbar from 'components/Topbar/Topbar'
import Search from 'components/Search/Search'
import Online from 'Online/Online'
import classes from 'App.module.css'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />
      <hr className={classes.split} />
      <Online />
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>
    </div>
  )
}

export default App
