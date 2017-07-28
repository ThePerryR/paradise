import React from 'react'
import { mount } from 'enzyme'
import Dropzone from 'react-dropzone'

import DropAndUpload from './'

jest.useFakeTimers()

const onStartMock = jest.runAllTimers
let onSuccessMock = () => {}
const successPromise = new Promise((resolve) => {
  onSuccessMock = (urls) => {
    resolve(urls)
  }
})
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
    onStartUpload={onStartMock}
    onSuccessfulUpload={onSuccessMock}
    onFailedUpload={onFailMock}>
    <div>Hello world</div>
  </DropAndUpload>
)

test('Displays its children', () => {
  expect(wrapper.text()).toBe('Hello world')
})
test.only('Allows dragging and dropping files', () => {
  expect.assertions(1)
  wrapper.find(Dropzone).simulate('dragEnter', {dataTransfer: {items: files}})
  wrapper.find(Dropzone).simulate('drop', {dataTransfer: {files}})
  jest.runAllTimers()
  return successPromise.then((urls) => expect(urls).toHaveLength(2))
})
