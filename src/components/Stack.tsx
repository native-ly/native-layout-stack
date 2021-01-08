import React, { useCallback } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

import { useStack } from '../hooks'

import { preparePaddings } from '../helpers/preparePaddings'

import { BaseProps } from '../interfaces/BaseProps'

interface Props extends ViewProps, BaseProps {
  readonly children: React.ReactNode | React.ReactNodeArray
}

export const Stack = ({
  children,
  spaces,
  padding,
  style,
  ...props
}: Props) => {
  const globalConfig = useStack()

  // TODO refactor
  const stackSpaces = spaces ?? globalConfig.spaces
  const stackPadding = padding ?? globalConfig.padding

  const renderDivider = (): React.ReactElement => (
    <View
      style={StyleSheet.flatten([
        {
          minWidth: stackSpaces,
          minHeight: stackSpaces,
        },
        // TODO random color
        globalConfig.debug && { backgroundColor: '#f0f' },
      ])}
    />
  )

  const renderStack = useCallback(() => {
    // TODO const
    let elements = Array.isArray(children) ? children : [children]

    elements = elements.filter((child) => {
      return Array.isArray(child) || React.isValidElement(child)
    })

    // TODO move to new function/split
    return elements.reduce((children: React.ReactNodeArray, child, index) => {
      if (children.length === 0) {
        return [child]
      }

      const addSpaces = () => {
        if (
          typeof stackSpaces !== 'number' &&
          typeof stackSpaces !== 'string'
        ) {
          return []
        }

        return React.cloneElement(renderDivider(), {
          key: `stack-divider-${index}`,
        })
      }

      return [...children, addSpaces(), child]
    }, [])
    // TODO fix updaters
  }, [])

  return (
    <View
      {...props}
      style={StyleSheet.flatten([style, preparePaddings(stackPadding || 0)])}
    >
      {renderStack()}
    </View>
  )
}
