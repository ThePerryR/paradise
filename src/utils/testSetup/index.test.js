import { XMLHttpRequest } from './'

test('Setup attaches mock XHR to global object', () => {
  expect(global.XMLHttpRequest).toBe(XMLHttpRequest)
})
test('dat', () => {
  const xhr = new XMLHttpRequest()
  xhr.open('FAKEMETHOD', 'fake-route.html')
  xhr.send()
  expect(xhr.readyState).toBe(2)
})
test('gettso', () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET')
  expect(xhr.readyState).toBe(1)
})
test('bar', () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', `/sign-s3?file-name=${Date.now() + (Math.floor(Math.random() * 100) + 1)}&file-type=text/plain&bucket=test`)
})

test('foo', () => {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = jest.fn()
  xhr.open('GET', `/sign-s3?file-name=${Date.now() + (Math.floor(Math.random() * 100) + 1)}&file-type=text/plain&bucket=test`)
  xhr.send()
})
