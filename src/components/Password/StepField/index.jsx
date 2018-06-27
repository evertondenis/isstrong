import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from './styled'

const Circle = ({ className, color }) => (
  <svg className={className} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="5" fill={color}/>
  </svg>
)

class StepField extends PureComponent {
  render() {
    const { value, children } = this.props
    const status = {
      valid: '#1fe6a8',
      invalid : '#f79682'
    }[value] || '#eaeaf4'

    return (
      <Field>
        <Circle className="icon" color={status} />
        {children}
      </Field>
    )
  }
}

StepField.defaultProps = {
  children: ''
}

StepField.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string.isRequired
}

export default StepField
