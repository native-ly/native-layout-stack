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

  const stackSpaces = spaces ?? globalConfig.spaces
  const stackPadding = padding ?? globalConfig.padding

  const isSpacer =
    typeof stackSpaces === 'number' || typeof stackSpaces === 'string'

  const renderStack = () => {
    let elements = Array.isArray(children) ? children : [children]

    elements = elements.filter((child) => {
      return Array.isArray(child) || React.isValidElement(child)
    })

    return elements.reduce((children: React.ReactNodeArray, child, index) => {
      if (children.length === 0) {
        return [child]
      }

      return [...children, addSpaces(index), child]
    }, [])
  }

  const addSpaces = (index: number) => {
    if (!isSpacer) return []

    return React.cloneElement(renderDivider(), {
      key: `stack-divider-${index}`,
    })
  }

  const renderDivider = (): React.ReactElement => (
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

  return (
    <View
      {...props}
      style={StyleSheet.flatten([style, preparePaddings(stackPadding || 0)])}
    >
      {renderStack()}
    </View>
  )
}
