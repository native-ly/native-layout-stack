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
  arrayDivision,
  padding,
  spaces,
  style,
  ...props
}: Props) => {
  const globalConfig = useStack()

  const stackArrayDivision = arrayDivision || globalConfig.arrayDivision
  const stackPadding = padding ?? globalConfig.padding
  const stackSpaces = spaces ?? globalConfig.spaces

  const renderDivider = (): React.ReactElement => {
    if (typeof stackSpaces !== 'number' && typeof stackSpaces !== 'string') {
      return stackSpaces as React.ReactElement
    }

    return (
      <View
        style={StyleSheet.flatten([
          {
            minWidth: stackSpaces,
            minHeight: stackSpaces,
          },
          globalConfig.debug && { backgroundColor: '#f0f' },
        ])}
      />
    )
  }

  const renderStack = () => {
    let elements = Array.isArray(children) ? children : [children]

    elements = elements.filter((child) => {
      return Array.isArray(child) || React.isValidElement(child)
    })

    elements = elements.reduce(
      (children: React.ReactNodeArray, child) =>
        stackArrayDivision && Array.isArray(child)
          ? [...children, ...child]
          : [...children, child],
      []
    )

    return elements.reduce((children: React.ReactNodeArray, child, index) => {
      if (children.length === 0) {
        return [child]
      }

      const addSpaces = () => {
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
      style={StyleSheet.flatten([style, preparePaddings(stackPadding || 0)])}
    >
      {renderStack()}
    </View>
  )
}
