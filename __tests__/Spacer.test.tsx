import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'

import { Spacer, LayoutContextProvider } from '../src'

describe('Spacer', () => {
  it('should render component without context provider', () => {
    const { toJSON } = render(
      <>
        <Text>Hello</Text>

        <Spacer />

        <Text>World</Text>
      </>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render component with custom styles', () => {
    const { toJSON } = render(
      <>
        <Text>Hello</Text>

        <Spacer style={{ backgroundColor: 'orange' }} />

        <Text>World</Text>
      </>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render component with context provider', () => {
    const Component = () => (
      <>
        <Text>Hello</Text>

        <Spacer />

        <Text>World</Text>
      </>
    )

    const { toJSON } = render(
      <LayoutContextProvider>
        <Component />
      </LayoutContextProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render component with debug mode enabled', () => {
    const Component = () => (
      <>
        <Text>Hello</Text>

        <Spacer />

        <Text>World</Text>
      </>
    )

    const { toJSON } = render(
      <LayoutContextProvider debug>
        <Component />
      </LayoutContextProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
