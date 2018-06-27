import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import StepField from '../'
import 'setupTest'

describe('Step Field.', () => {
  it('Should be render <Field />.', () => {
    const pwdLength = 'empty'
    const min = 2
    const wrapper = shallow(
      <StepField value={pwdLength} > Pelo menos {min} caracteres</StepField>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
