import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'

import { Stack } from '../src'

describe('Stack', () => {
  it('should render component matching snapshot', () => {
    const { toJSON } = render(
      <Stack spaces={20} padding={10}>
        <Text>Hello</Text>

        <Text>World</Text>
      </Stack>
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
