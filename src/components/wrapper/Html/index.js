import React from 'react'
import Helmet from 'react-helmet'

const Html = ({assets}) => {
  const helmet = Helmet.rewind()
  const attrs = helmet.htmlAttributes.toComponent()
  return (
    <html {...attrs}>
    <head>
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"/>
      {helmet.link.toComponent()}
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet"/>
    </head>
    <body>
    <main id="app"/>
    {Object.keys(assets.javascript).reverse().map((key) =>
      <script key={key} src={assets.javascript[key]}/>
    )}
    </body>
    </html>
  )
}

export default Html
