import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import mock from 'xhr-mock'

function loadStories () {
  mock.setup()
  mock.get(/\/sign-s3\?file-name=(.*)&file-type=(.*)&bucket=(.*)/, (req, res) => {
    return res
      .status(req.query().bucket !== 'fake-bucket' ? 200 : 500)
      .body(JSON.stringify({signedRequest: 'http://amazon.com', url: req.query()['file-name']}))
  })

  mock.put('http://amazon.com', (req, res) => res.status(200))
  require('./')
}

addDecorator((story) =>
  <div style={{
    background: 'white',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    fontFamily: '\'Open Sans\', sans-serif'
  }}>{story()}</div>
)

configure(loadStories, module)
