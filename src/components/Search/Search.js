import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { HiUserAdd } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import classes from './Search.module.css'

const Search = React.forwardRef(function Search(props, ref) {
  const {  className, handleSearch, ...other } = props

  const [showGlass, setShowGlass] = React.useState(false)

  const test = () => {
    console.log('test1', 'test2')
  }

  const handleGlass = () => {
    if (showGlass) {
      setShowGlass((prevState) => !prevState)
      document.addEventListener('click', test )
    } else {
      document.addEventListener('click', test)
    }
  }


  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
    
      <label className={classes.searchLabel} name="friends">
        Friends
      </label>

      <div className={classes.searchField}>
        <input 
          className={classes.searchInput} 
          type="search" name="friends" 
          placeholder="search friends" 
          onChange={handleSearch}
          onClick={handleGlass}
        />
      </div>
        <AiOutlineSearch className={classnames(classes.magnifying, {[classes.glass]: showGlass})} />

      <div className={classes.searchIcons}>
        <HiUserAdd className={classes.add}/>
      </div>
    </div>
  )
})

Search.propTypes = {
  className: PropTypes.string,
  handleSearch: PropTypes.func,
  handleGlass: PropTypes.func,
  showGlass: PropTypes.bool,
}

Search.uiName = 'Search'

export default Search
