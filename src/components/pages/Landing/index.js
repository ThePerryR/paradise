import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { observer } from 'mobx-react'

@observer
class Landing extends Component {
  render () {
    return (
      <DocumentTitle title="TeachOK | Learn something new">
        <div>Testing this out on Landing</div>
      </DocumentTitle>
    )
  }
}

export default Landing
