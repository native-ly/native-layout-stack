import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'

import { Spacer } from '../src'

describe('Spacer', () => {
  it('should render component without provider', () => {
    const { toJSON } = render(
      <>
        <Text>Hello</Text>

        <Spacer />

        <Text>World</Text>
      </>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it.skip('should render component with provider', () => {})
})
