import React from 'react'
import Dropzone from 'react-dropzone'

import uploadFilesToS3 from '../../../utils/uploadFilesToS3'

const Upload = () => (
  <div>
    <Dropzone onDrop={(files) => uploadFilesToS3(files, (urls) => console.log(urls))}>
      <div>Drop Here</div>
    </Dropzone>
  </div>
)

export default Upload
