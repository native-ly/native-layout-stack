import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

import { useStack } from '../hooks'

import { preparePaddings } from '../helpers/preparePaddings'

import type { Padding } from '../types/Padding'

interface Props extends ViewProps {
  readonly children: React.ReactNode | React.ReactNodeArray
  readonly spacing?: number
  readonly padding?: Padding
}

export const Stack = ({
  children,
  spacing,
  padding,
  style,
  ...props
}: Props) => {
  const globalConfig = useStack()

  const options = Object.assign(globalConfig, { spacing, padding })

  const renderDivider = (): React.ReactElement => {
    // if (typeof options.spacing !== 'number') {
    //   return options.spacing
    // }

    return (
      <View
        style={StyleSheet.flatten([
          {
            width: options.spacing,
            height: options.spacing,
          },
          options.debug && { backgroundColor: '#f0f' },
        ])}
      />
    )
  }

  const renderStack = () => {
    let elements = Array.isArray(children) ? children : [children]

    elements = elements.filter((child) => {
      return Array.isArray(child) || React.isValidElement(child)
    })

    return elements.reduce((children, child, index) => {
      // if (children?.length === 0) {
      //   return [child]
      // }

      const addSpaces = () => {
        if (renderDivider) {
          return React.cloneElement(renderDivider(), {
            key: `stack-divider-${index}`,
          })
        }

        return []
      }

      return [children, addSpaces(), child]
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
