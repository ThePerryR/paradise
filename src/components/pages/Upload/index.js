import React, { Component } from 'react'

import DropAndUpload from '../../wrappers/DropAndUpload'

class Upload extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      urls: []
    }
  }

  render () {
    return (
      <div>
        <DropAndUpload
          bucket="paradisejs"
          onStartUpload={() => this.setState({loading: true})}
          onSuccessfulUpload={urls => this.setState({loading: false, urls: [...this.state.urls, ...urls]})}
          onFailedUpload={() => this.setState({loading: false})}>
          <div>Drop Here or Click Me</div>
        </DropAndUpload>
        {this.state.loading && <div>Loading...</div>}
        <div>Successful Urls:</div>
        {this.state.urls.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </div>
    )
  }
}

export default Upload
