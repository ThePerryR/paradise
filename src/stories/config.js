import React from 'react'
import { configure, addDecorator } from '@storybook/react'

function loadStories () {
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
