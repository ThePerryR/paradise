import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import Html from '../components/pages/Html'

/*
 * serveApp
 * This middleware/route acts as a catch all for GET request
 * It renders and serves our application
 */
export default function (req, res) {
  const doctype = '<!doctype html>\n'
  const markup = <Html assets={global.webpackIsomorphicTools.assets()}/>
  const html = renderToStaticMarkup(markup)
  res.send(doctype + html)
}
