import React from 'react'
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

  const options = Object.assign(globalConfig, { spaces, padding })

  const renderDivider = (): React.ReactElement => (
    <View
      style={StyleSheet.flatten([
        {
          minWidth: options.spaces,
          minHeight: options.spaces,
        },
        options.debug && { backgroundColor: '#f0f' },
      ])}
    />
  )

  const renderStack = () => {
    let elements = Array.isArray(children) ? children : [children]

    elements = elements.filter((child) => {
      return Array.isArray(child) || React.isValidElement(child)
    })

    return elements.reduce((children: React.ReactNodeArray, child, index) => {
      if (children.length === 0) {
        return [child]
      }

      const addSpaces = () => {
        if (
          typeof options.spaces !== 'number' &&
          typeof options.spaces !== 'string'
        ) {
          return []
        }

        return React.cloneElement(renderDivider(), {
          key: `stack-divider-${index}`,
        })
      }

      return [...children, addSpaces(), child]
    }, [])
  }

  return (
    <View
      {...props}
      style={StyleSheet.flatten([style, preparePaddings(options.padding || 0)])}
    >
      {renderStack()}
    </View>
  )
}
