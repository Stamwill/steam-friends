import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { FaCog } from 'react-icons/fa'; 
import UserOption from '../../blocks/UserOption/UserOption'
import UserArrow from '../../blocks/UserOption/partials'
import classes from './Topbar.module.css'

const Topbar = React.forwardRef(function Topbar(props, ref) {
  const { className, ...other } = props

  const [ toggleState, setToggleState ] = React.useState(false)

  const toggleUserOption = () => {
    if (toggleState) {
      setToggleState(false)
    } else {
      setToggleState(true)
    }
  }

  const onMouseLeave = () => {
    setToggleState(false)
  }

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <main className={classes.main}>
        <img
          className={classes.profileImage}
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b7/b75bbc8332fc6b80b85b31f8a617fdc5bfa9d6e4_full.jpg"
          alt="profile"
        />

        <div className={classes.userContainer}>
          <div className={classes.userAndArrow}>
            <h4 className={classes.userName}> Cyndraz </h4>
            
            <UserArrow toggleUserOption={toggleUserOption}/>
            <UserOption open={toggleState} onMouseLeave={onMouseLeave}/>
          </div>

          <h5 className={classes.userStatus}>Online</h5>
        </div>
        
        <div className={classes.settings}>
          <FaCog className={classes.cogWheel}/>
        </div>
      </main>
    </div>
  )
})

Topbar.propTypes = {
  toggleUserOption: PropTypes.func,
  className: PropTypes.string,
}

Topbar.uiName = 'Topbar'

export default Topbar
