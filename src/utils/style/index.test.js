import React from 'react'
import { shallow } from 'enzyme'

import { type, colors, createColorStyleFromProps } from './'

test('type components display with proper color', () => {
  const title = shallow(<type.title color="red">Hello World</type.title>)
  expect(title.text()).toBe('Hello World')
  expect(createColorStyleFromProps()).toBe(`color: ${colors.black};`)
  expect(createColorStyleFromProps({color: 'red'})).toBe('color: red;')
})
