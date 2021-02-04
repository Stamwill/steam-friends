import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Online from './partials/Online'
import classes from './OnlineList.module.css'

const OnlineList = React.forwardRef(function OnlineList(props, ref) {
  const { friends, className, ...other } = props

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
    <article className={classnames(classes.root, className)} ref={ref} {...other}>
      <div>
        <div>
          {friends.map((friend, idx) => (
            <Online 
              key={idx} 
              friends={friend}  
              toggleOption={toggleOption(idx)}
              open={idx === toggleState}
              mouseLeave={mouseLeave}
            />
          ))}
        </div>
      </div>
    </article>
  )
})

OnlineList.propTypes = {
  friends: PropTypes.array.isRequired,
  className: PropTypes.string,
  toggleOption: PropTypes.func,
  open: PropTypes.bool
}

OnlineList.uiName = 'OnlineList'

export default OnlineList
