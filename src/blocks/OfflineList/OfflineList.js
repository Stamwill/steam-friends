import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Offline from './partials/Offline'
import classes from './OfflineList.module.css'

const OfflineList = React.forwardRef(function OfflineList(props, ref) {
  const { offlines, className, ...other } = props

  const [toggleState, setToggleState] = React.useState(undefined)
  const myRef = React.useRef()

  const toggleOption = (idx) => () => {
    if (idx === toggleState) {
      setToggleState(undefined)
    } else {
      setToggleState(idx)
    }
  }

  const closeOptions = (e) => {
    if (!myRef.current.contains(e.target)) {
      setToggleState(undefined)
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', closeOptions);
    return () => document.removeEventListener('mousedown', closeOptions)
  })

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
        <div>
          {offlines.map((offline, idx) => (
            <Offline 
              key={idx} 
              offlines={offline} 
              toggleOption={toggleOption(idx)}  
              open={idx === toggleState}
              ref={myRef}
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
