/**
 * @jest-environment node
 */
import serveApp from './'

const send = jest.fn()
global.webpackIsomorphicTools = {
  assets: () => ({javascript: {'123': 'http:gooogle.com'}})
}

serveApp(null, {send})

test('Calls res.send', () => {
  expect(send.mock.calls).toHaveLength(1)
  expect(send.mock.calls[0][0]).toBe('<!doctype html>\n' +
    '<html><head><title data-react-helmet="true"></title><meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"/><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet"/></head><body><main id="app"></main><script src="http:gooogle.com"></script></body></html>')
})
