import React from 'react'
import { mount } from 'enzyme'

import Button from './'

const handleClick = jest.fn()
const wrapper = mount(
  <Button label="Hello World" onClick={handleClick}/>
)

test('Displays the label', () => {
  expect(wrapper.text()).toBe('Hello World')
})
test('Calls onClick when clicked', () => {
  wrapper.simulate('click')
  expect(handleClick.mock.calls).toHaveLength(1)
})
