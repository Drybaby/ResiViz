/* eslint-disable import/no-extraneous-dependencies */
import { css } from '@emotion/core'
import { colors } from './variables'

const OverlayGlobal = css`
  html,
  body {
    color: ${colors.grey90};
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
    border-bottom: 2px solid ${colors.white};
    border-top: 2px solid transparent;
  }

  a:hover,
  a:focus {
    background-color: ${colors.white};
    color: ${colors.grey90};
    border-top-color: ${colors.white};
  }
`

export default OverlayGlobal