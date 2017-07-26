import React from 'react'
import { mount } from 'enzyme'

import Button from './'

const handleClick = jest.fn()
const wrapper = mount(
  <Button label="Hello World"/>
)

test('Works if onClick isn\'t passed', () => {
  expect(wrapper.props().onClick).toBe(Button.defaultProps.onClick)
  wrapper.simulate('click')
})
test('Displays the label', () => {
  expect(wrapper.text()).toBe('Hello World')
})
test('Calls onClick when clicked', () => {
  wrapper.setProps({onClick: handleClick})
  wrapper.simulate('click')
  expect(handleClick.mock.calls).toHaveLength(1)
})
