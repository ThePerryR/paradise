import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Html from '../components/wrappers/Html'

export default function (req, res) {
  const doctype = '<!doctype html>\n'
  const markup = <Html assets={global.webpackIsomorphicTools.assets()}/>
  const html = renderToStaticMarkup(markup)
  res.send(doctype + html)
}
