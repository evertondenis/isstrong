import React, { Component, Fragment } from 'react'
import { Logo, Input, Password, Button } from 'components'
import { Checked, Loading } from 'core/assets/images'
import { StyledMain, StyledBox } from './styled'

class Main extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordValid: false,
    validEmail: '',
    validForm: false,
    sendDisabled: true,
    sending: false
  }

  onChange = () => {
    this.setState({
      name: this.refs.inputRefName.refs.inputRef.value,
      email: this.validationEmail(this.refs.inputRefEmail.refs.inputRef.value)
    }, this.enabledButton)
  }

  validationEmail = email => {
    const valid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    const validEmail = (!valid && email !== '') ? 'is-invalid' : ''
    this.setState({ validEmail })
    return valid ? email : 'invalid'
  }

  checkPassword = (valid, value) => {
    this.setState({
      password: value,
      passwordValid: valid,
    }, this.enabledButton)
  }

  enabledButton = () => {
    const { name, email, passwordValid } = this.state
    if (name !== '' && email !== 'invalid' && passwordValid) {
      return this.setState({ sendDisabled: false })
    }
    return this.setState({ sendDisabled: true })
  }

  createCount = data => {
    const { name, email, password } = this.state
    data.preventDefault()
    this.setState({ validForm: true })
    console.log('form: ', name, email, password)
  }

  renderLabel = () => {
    const { sending } = this.state
    return !sending ? 'Criar conta' : <img src={Loading} className="loading" alt="enviando"/>
  }

  render() {
    const { validForm, validEmail, sendDisabled } = this.state
    return (
      <StyledMain>
        <StyledBox>
          {/* <Logo logo={Brand} alt="Olist logo" /> */}

          {validForm ? (
            <Fragment>
              <Logo className="box__img" logo={Checked} alt="Cadastro efetuado" />
              <h1>Tudo certo</h1>
              <div className="box__msg">
                <p>Verifique sua caixa de entrada</p>
                <p>para confirmar seu e-mail</p>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <h1>Crie sua conta</h1>
              <form className="form__create-count">
                <Input
                  focus
                  label="Nome completo"
                  ref="inputRefName"
                  onChange={this.onChange}
                  required
                />
                <Input
                  className={validEmail}
                  label="E-mail"
                  ref="inputRefEmail"
                  onChange={this.onChange}
                  required
                />
                <Password
                  confirmPwd
                  passwordValid={this.checkPassword}
                />
                <Button
                  type="submit"
                  form="createCount"
                  onClick={data => this.createCount(data)}
                  disabled={sendDisabled}
                >
                  {this.renderLabel()}
                </Button>
              </form>
            </Fragment>
          )}
        </StyledBox>
      </StyledMain>
    )
  }
}

export default Main
