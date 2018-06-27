import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Logo from '../'
import image from 'core/assets/images/logo.svg'
import 'setupTest'

describe('Logo.', () => {
  it('Should be render <Logo />.', () => {
    const logo = image
    const wrapper = shallow(
      <Logo logo={logo} alt="Olist logo" />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
