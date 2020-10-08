import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Search.module.css'

const Search = React.forwardRef(function Search(props, ref) {
  const { children, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <label className={classes.searchLabel} name="friends">
        Friends
      </label>
      <input className={classes.searchInput} type="search" name="friends" />
    </div>
  )
})

Search.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Search.uiName = 'Search'

export default Search
