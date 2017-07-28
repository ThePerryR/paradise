import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'

import requestSignedS3Url from '../../../utils/requestSignedS3Url'
import uploadFileToS3 from '../../../utils/uploadFileToS3'

class DropAndUpload extends Component {
  handleDrop = (files) => {
    this.props.onBeginUpload()
    const urls = []
    files.forEach((file) => {
      requestSignedS3Url(file, this.props.bucket).then(({signedRequest, url}) => {
        uploadFileToS3(file, signedRequest).then(() => {
          urls.push(url)
          if (urls.length === files.length) {
            this.props.onSuccessfulUpload(urls)
          }
        }).catch(this.props.onFailedUpload)
        this.props.onStartUpload()
      }).catch(this.props.onFailedUpload)
    })
  }

  render () {
    return (
      <Dropzone
        style={{}}
        disableClick={this.props.disableClick}
        multiple={this.props.multiple}
        maxSize={this.props.maxSize}
        minSize={this.props.minSize}
        onDrop={this.handleDrop}>
        {this.props.children}
      </Dropzone>
    )
  }
}

DropAndUpload.propTypes = {
  bucket: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disableClick: PropTypes.bool,
  multiple: PropTypes.bool,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  onBeginUpload: PropTypes.func,
  onStartUpload: PropTypes.func,
  onSuccessfulUpload: PropTypes.func.isRequired,
  onFailedUpload: PropTypes.func.isRequired
}
DropAndUpload.defaultProps = {
  disableClick: false,
  multiple: true,
  maxSize: Infinity,
  minSize: 0,
  onBeginUpload: () => {},
  onStartUpload: () => {}
}

export default DropAndUpload
