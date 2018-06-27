import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'
import Password from '../'
import 'setupTest'

describe('Password.', () => {
  it('Should be render <Password />.', () => {
    const min = 2
    const max = 6
    const wrapper = shallow(
      <Password min={min} max={max} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should pass a input value to the onChange handler', () => {
    const min = 2
    const max = 6
    const wrapper = mount(
      <Password min={min} max={max} passwordValid={(valid, pwd) => null} />
    )
    expect(wrapper.find('.pwd').length).toEqual(1)
    wrapper.find('.pwd').simulate('change')
    expect(wrapper.find('.pwd').length).toEqual(1)
  })

  it('should pass a input value to confirm handler', () => {
    const min = 2
    const max = 6
    const wrapper = mount(
      <Password min={min} max={max} confirmPwd passwordValid={(valid, pwd) => null} />
    )
    expect(wrapper.find('.pwd').length).toEqual(1)
    wrapper.find('.pwd').simulate('change')
    expect(wrapper.find('.pwd').length).toEqual(1)

    expect(wrapper.find('.confirm-pwd').length).toEqual(1)
    wrapper.find('.confirm-pwd').simulate('change')
    expect(wrapper.find('.confirm-pwd').length).toEqual(1)
  })
})
