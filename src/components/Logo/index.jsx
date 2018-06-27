import React from 'react'
import PropTypes from 'prop-types'
import StyledLogo from './styled'

const Logo = ({ logo, alt, className }) => (
  <StyledLogo className={className}>
    <img src={logo} alt={alt} />
  </StyledLogo>
)

Logo.defaultProps = {
  className: ''
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Logo