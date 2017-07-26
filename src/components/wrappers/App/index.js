import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
`

class App extends Component {
  render () {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

App.propTypes = {
  store: PropTypes.shape({
    TransportLayer: PropTypes.object.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
}

export default App
