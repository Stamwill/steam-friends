import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Offline from './partials/Offline'
import classes from './OfflineList.module.css'

const OfflineList = React.forwardRef(function OfflineList(props, ref) {
  const { offlines, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
        <div>
          {offlines.map((offline, idx) => (
            <Offline key={idx} offlines={offline} />
          ))}
        </div>
    </div>
  )
})

OfflineList.propTypes = {
  offlines: PropTypes.array.isRequired,
  className: PropTypes.string,
}

OfflineList.uiName = 'OfflineList'

export default OfflineList
