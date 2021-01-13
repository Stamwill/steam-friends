import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import classes from './ListItem.module.css'


const ListItem = React.forwardRef(function ListItem(props, ref) {
  const { list, ...other } = props

  return (
    <div className={classnames(classes.root)} ref={ref} {...other}>
      <h3 className={classes.settingTitle}>{list.title}</h3>
    </div>
  )
})

ListItem.propTypes = {
  list: PropTypes.object,
}

export default ListItem