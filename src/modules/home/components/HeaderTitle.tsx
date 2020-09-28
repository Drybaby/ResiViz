import { css } from '@emotion/core'
import * as React from 'react'
import { Text } from '~/components/chungking-core'

const HeaderTitle: React.FC = ({ children }) => {
  return (
    <Text
      as="h1"
      m={0}
      fontSize="36px"
      lineHeight="42px"
      fontWeight={600}
      css={css`
        &:not(:first-child) {
          margin-top: 24px;
        }
      `}
    >
      {children}
    </Text>
  )
}

export default HeaderTitle