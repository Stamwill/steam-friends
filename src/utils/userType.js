import PropTypes from 'prop-types'

const userType = PropTypes.shape({
  userName: PropTypes.string.isRequired,
  userStatus: PropTypes.string.isRequired,
})

export default userType
