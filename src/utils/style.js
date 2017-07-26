import PropTypes from 'prop-types'
import styled from 'styled-components'

export const colors = {
  black: '#3c3c3c',
  primary: '#1c3dcf'
}

const text = styled.div`
  ${props => `color: ${props.color || colors.black};`}
`
text.propsTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}
text.defaultProps = {
  color: null
}

export const type = {
  title: styled(text)`
    font-size: 24px;
    line-height: 40px
  `,
  label: styled(text)`
    font-size: 14px;
    line-height: 24px;
  `
}
