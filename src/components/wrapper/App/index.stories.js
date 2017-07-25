import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, number } from '@kadira/storybook-addon-knobs'

import AppStore from '../../../stores/AppStore/index'
import App from './index'

storiesOf('Pages', module)
  .addDecorator(withKnobs)
  .add('App', () => {
    const store = new AppStore()
    return (
      <App store={store}>
        <div style={{width: '100%', height: number('Height', 200), background: 'pink'}}/>
      </App>
    )
  })
