import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { HiUserAdd } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import classes from './Search.module.css'

const Search = React.forwardRef(function Search(props, ref) {
  const {  className, handleSearch, ...other } = props



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
        />
      </div>
        <AiOutlineSearch className={classnames(classes.magnifying)} />

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
