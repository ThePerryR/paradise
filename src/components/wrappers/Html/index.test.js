/**
 * @jest-environment node
 */
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Html from './'

const html = renderToStaticMarkup(<Html assets={{javascript: {'123': 'http://gooogle.com'}}}/>)

test('foo', () => {
  expect(html).toBe('<html><head><title data-react-helmet="true"></title><meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"/><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet"/></head><body><main id="app"></main><script src="http://gooogle.com"></script></body></html>')
})
