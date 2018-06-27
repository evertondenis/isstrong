import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = (props) => {
  const { type, onClick, disabled, className, form, children } = props

  return (
    <StyledButton
      type={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={className}
      form={form}
    >
      {children}
    </StyledButton>
  )
}


Button.defaultProps = {
  children: '',
  className: '',
  disabled: '',
  form: 'form',
  onClick: null,
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.any,
  form: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button
