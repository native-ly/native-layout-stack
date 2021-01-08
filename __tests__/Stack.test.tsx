import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'

import { Stack, LayoutProvider } from '../src'

const BareComponent = () => (
  <Stack>
    <Text>Hello</Text>

    <Text>World</Text>
  </Stack>
)

describe('Stack', () => {
  it('should render component without context provider', () => {
    const { toJSON } = render(
      <Stack spaces={20} padding={10}>
        <Text>Hello</Text>

        <Text>World</Text>
      </Stack>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render component with custom styles', () => {
    const { toJSON } = render(
      <Stack
        spaces={20}
        padding={10}
        style={{ backgroundColor: 'green', padding: 5 }}
      >
        <Text>Hello</Text>

        <Text>World</Text>
      </Stack>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render component with context provider', () => {
    const { toJSON } = render(
      <LayoutProvider spaces={15} padding={30}>
        <BareComponent />
      </LayoutProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render component with debug mode enabled', () => {
    const { toJSON } = render(
      <LayoutProvider spaces={15} padding={30} debug>
        <BareComponent />
      </LayoutProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should overwrite global options', () => {
    const Component = () => (
      <Stack spaces={12} padding={16}>
        <Text>Hello</Text>

        <Stack spaces={5}>
          <Text>World</Text>
        </Stack>
      </Stack>
    )

    const { toJSON } = render(
      <LayoutProvider spaces={15} padding={30}>
        <Component />
      </LayoutProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it.each([
    12,
    [12],
    [12, 6],
    [5, 10, 15],
    [10, 20, 30, 40],
    '12',
    ['12'],
    ['12', '6'],
    ['5', '10', '15'],
    ['10', '20', '30', '40'],
    ['12', 6],
    [5, '10', '15'],
    ['10', 20, 30, '40'],
  ])('', (padding: any) => {
    const { toJSON } = render(
      <Stack spaces={20} padding={padding}>
        <Text>Hello</Text>

        <Text>World</Text>
      </Stack>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  // TODO update test
  it.skip('sholud throw an error', () => {
    render(
      <Stack padding={[1, 2, 3, 4, 5] as any}>
        <Text>Hello</Text>

        <Text>World</Text>
      </Stack>
    )
  })

  // TODO update test
  it.skip('sholud throw an error', () => {
    render(
      <Stack spaces={[] as any}>
        <Text>Hello</Text>

        <Text>World</Text>
      </Stack>
    )
  })

  it('should render component with horizontal layout', () => {
    const { toJSON } = render(
      <Stack spaces={20} padding={10} style={{ flexDirection: 'row' }}>
        <Text>Hello</Text>

        <Text>World</Text>
      </Stack>
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
