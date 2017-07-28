import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs'

import DropAndUpload from './'

storiesOf('wrappers', module)
  .addDecorator(withKnobs)
  .add('DropAndUpload', () => (
    <DropAndUpload
      bucket={text('Bucket', 'paradisejs')}
      disableClick={boolean('Disable Click', false)}
      multiple={boolean('Multiple', true)}
      maxSize={number('Max Size', 1000000)}
      minSize={number('Min Size', 0)}
      onStartUpload={action('onStartUpload')}
      onSuccessfulUpload={action('onSuccessfulUpload')}
      onFailedUpload={action('onFailedUpload')}>
      <div>Click or drop a file here!</div>
    </DropAndUpload>
  ))
