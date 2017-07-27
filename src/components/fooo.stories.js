import React from 'react'
import { storiesOf } from '@storybook/react'
import Dropzone from 'react-dropzone'

import uploadFilesToS3 from '../utils/uploadFilesToS3'

storiesOf('testing', module)
  .add('fooo', () => (
    <Dropzone onDrop={uploadFilesToS3}>
      <div>testing</div>
    </Dropzone>
  ))