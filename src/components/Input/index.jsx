import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledGroup } from './styled'

class Input extends Component {
  render() {
    const { type, focus, onChange, className, label, placeholder, required } = this.props
    return (
      <StyledGroup>
        {label && <label>{label}</label>}
        <input
          className={className}
          ref="inputRef"
          type={type}
          onChange={() => onChange()}
          placeholder={placeholder}
          autoFocus={focus}
          required={required}
        />
      </StyledGroup>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  className: '',
  label: '',
  placeholder: '',
  focus: false,
  required: false
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  focus: PropTypes.bool,
  required: PropTypes.bool
}

export default Input
