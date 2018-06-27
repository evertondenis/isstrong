import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Button from '../'
import 'setupTest'

describe('Button.', () => {
  it('Should be render <Button />.', () => {
    const wrapper = shallow(
      <Button>Send</Button>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Should be render disabled <Button />.', () => {
    const wrapper = shallow(
      <Button disabled>Send</Button>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should be clicked', () => {
    const onClick = jest.fn()
    const component = shallow(
      <Button onClick={onClick}>
        Content
      </Button>
    )
    component.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
