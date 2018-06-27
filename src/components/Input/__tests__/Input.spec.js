import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'
import Input from '../'
import 'setupTest'

describe('Input.', () => {
  it('Should be render <Input />.', () => {
    const onChange = jest.fn()
    const component = shallow(
      <Input
        className="class"
        label="E-mail"
        ref="inputRefEmail"
        onChange={onChange}
        required
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should be onChange', () => {
    const onChange = jest.fn()
    const component = mount(
      <Input
        className="class"
        label="E-mail"
        ref="inputRefEmail"
        onChange={onChange}
        required
      />
    )

    component.find('input').simulate('change')
    expect(onChange).toHaveBeenCalled()
  })
})
