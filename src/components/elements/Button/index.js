import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../../utils/style'

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 32px;
  background: ${colors.primary};
  color: white;
  cursor: pointer;
`

const Button = (props) => (
  <Wrapper onClick={props.onClick}>{props.label}</Wrapper>
)

Button.propTypes = {
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func
}
Button.defaultProps = {
  onClick: () => {}
}

export default Button
