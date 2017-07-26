import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import styled from 'styled-components'

import { type } from '../../../utils/style'
import Button from '../../elements/Button'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
const Centered = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Trees = styled.div`
  font-size: 32px;
`

class Landing extends Component {
  render () {
    return (
      <DocumentTitle title="Welcome to paradise">
        <Wrapper>
          <Centered>
            <Trees>🌴</Trees>
            <type.title style={{marginBottom: 16}}>
              <b>Welcome to Paradise.<br/>Built for speed.</b>
            </type.title>
            <a href="https://github.com/ThePerryR/paradise" target="__blank" style={{textDecoration: 'none'}}>
              <Button
                label={(
                  <span style={{display: 'flex', alignItems: 'center'}}>
                    <img src="/gitHubLogo-white.svg" style={{width: 16, height: 16, marginRight: 8}}/>
                    <span>Download</span>
                  </span>
                )}
              />
            </a>
          </Centered>
        </Wrapper>
      </DocumentTitle>
    )
  }
}

export default Landing
