import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { passwordLength, passwordCapitalLetter, passwordNumber, statusInput } from './utils'
import StepField from './StepField'
// import "font-awesome/css/font-awesome.css"
import { ContainerValidation, StyledStages, StyledConfirm } from './styled'

class Password extends Component {
  state = {
    field: '',
    status: {
      pwdLength: '',
      pwdCapital: '',
      pwdNumber: '',
      pwdEqual: ''
    }
  }

  inputRef = React.createRef()
  confirmRef = React.createRef()

  onChange = () => {
    const { min, max } = this.props
    this.setState({
      field: this.inputRef.current.value,
      status: {
        pwdLength: passwordLength(this.inputRef, min, max),
        pwdCapital: passwordCapitalLetter(this.inputRef),
        pwdNumber: passwordNumber(this.inputRef),
      }
    }, this.checkFields)
  }

  checkFields = () => {
    const { passwordValid, confirmPwd } = this.props
    const { field } = this.state

    if (confirmPwd) {
      const confirm = this.confirmRef.current.value
      const pwdEqual = confirm === field ? '' : 'is-invalid'
      this.setState({ pwdEqual })
      return confirm === field
        ? this.validPassword()
        : passwordValid(false, field)
    }
    return this.validPassword()
  }

  validPassword = () => {
    const { passwordValid } = this.props
    const { field } = this.state
    return statusInput(this.state.status) === 'isStrong'
      ? passwordValid(true, field)
      : passwordValid(false, field)
  }

  render() {
    const { min, confirmPwd, placeholder } = this.props
    const { status, pwdEqual } = this.state
    const { pwdLength, pwdCapital, pwdNumber } = status
    const styleStatus = statusInput(status)

    return (
      <Fragment>
        <ContainerValidation>
          <label>Senha</label>
          <input
            className={`pwd ${styleStatus}`}
            ref={this.inputRef}
            type="password"
            onChange={() => this.onChange()}
            placeholder={placeholder}
            required
          />
          <StyledStages className={`${styleStatus}`}>
            <div className="stage">
              <div className="progress">stage 1</div>
            </div>
            <div className="stage">
              <div className="progress">stage 2</div>
            </div>
            <div className="stage">
              <div className="progress">stage 3</div>
            </div>
          </StyledStages>
          <StepField value={pwdLength} > Pelo menos {min} caracteres</StepField>
          <StepField value={pwdCapital} > Pelo menos 1 letra maiúscula</StepField>
          <StepField value={pwdNumber} > Pelo menos 1 número</StepField>

          {confirmPwd && (
            <StyledConfirm>
              <label>Confirme sua senha</label>
              <input
                className={`confirm-pwd ${pwdEqual}`}
                ref={this.confirmRef}
                type="password"
                onChange={() => this.checkFields()}
                required
              />
            </StyledConfirm>
          )}
        </ContainerValidation>
      </Fragment>
    )
  }
}

Password.defaultProps = {
  confirmPwd: false,
  min: 6,
  max: 16,
  placeholder: ''
}

Password.propTypes = {
  confirmPwd: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  passwordValid: PropTypes.func
}

export default Password
