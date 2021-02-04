import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Offline from './partials/Offline'
import classes from './OfflineList.module.css'

const OfflineList = React.forwardRef(function OfflineList(props, ref) {
  const { offlines, className, ...other } = props

  const [toggleState, setToggleState] = React.useState(undefined)

  const toggleOption = (idx) => () => {
    if (idx === toggleState) {
      setToggleState(undefined)
    } else {
      setToggleState(idx)
    }
  }

  const mouseLeave = () => {
    setToggleState(undefined)
  }

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
        <div>
          {offlines.map((offline, idx) => (
            <Offline 
              key={idx} 
              offlines={offline} 
              toggleOption={toggleOption(idx)}  
              open={idx === toggleState}
              mouseLeave={mouseLeave}
            />
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
