import React from 'react'
import { mount } from 'enzyme'
import Dropzone from 'react-dropzone'

import DropAndUpload from './'

const onBeginMock = jest.fn()
const onStartMock = jest.fn()
const onSuccessMock = jest.fn()
const onFailMock = jest.fn()
global.window.URL = {
  createObjectURL: function createObjectURL (arg) {
    return 'data://' + arg.name
  }
}

const files = [
  new File([''], 'filename.txt', {type: 'text/plain', lastModified: new Date()}),
  new File([''], 'filename.txt', {type: 'text/plain', lastModified: new Date()})
]

const wrapper = mount(
  <DropAndUpload
    bucket="paradisejs"
    onBeginUpload={onBeginMock}
    onStartUpload={onStartMock}
    onSuccessfulUpload={onSuccessMock}
    onFailedUpload={onFailMock}>
    <div>Hello world</div>
  </DropAndUpload>
)

test('Displays its children', () => {
  expect(wrapper.text()).toBe('Hello world')
})
test('Allows dragging and dropping files with defaults', () => {
  const wrapper = mount(
    <DropAndUpload bucket="paradisejs" onSuccessfulUpload={onSuccessMock} onFailedUpload={onFailMock}>
      <div>Test</div>
    </DropAndUpload>
  )
  wrapper.find(Dropzone).simulate('dragEnter', {dataTransfer: {items: files}})
  wrapper.find(Dropzone).simulate('drop', {dataTransfer: {files}})
})
