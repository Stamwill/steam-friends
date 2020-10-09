import PropTypes from 'prop-types'

const userType = PropTypes.shape({
  info: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  playing: PropTypes.bool,
  game: PropTypes.string,
  lastOnline: PropTypes.string,
})

export default userType
