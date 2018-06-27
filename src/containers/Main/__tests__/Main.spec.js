import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Main from '../'
import 'setupTest'

describe('Main.', () => {
  it('Should be render <Main />.', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper).toMatchSnapshot()
  })
})
