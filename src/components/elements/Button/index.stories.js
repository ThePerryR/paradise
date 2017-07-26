import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './'

storiesOf('elements', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Button
      label={text('Label', 'Click Me!')}
      onClick={action('Click')}
    />
  ))
