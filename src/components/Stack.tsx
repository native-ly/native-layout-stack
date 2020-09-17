import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useStack } from '../hooks'

import type { Padding, Spaces } from '../types'

interface Props {
  readonly spacing?: Spaces
  readonly padding?: Padding
}

export const Stack: React.FC<Props> = ({ children, spacing, padding }) => {
  const { debug } = useStack()

  const renderDivider = () => {
    if (typeof spacing !== 'number') {
      return spacing
    }

    return (
      <View
        style={StyleSheet.flatten([
          { padding, width: spacing, height: spacing },
          debug && { backgroundColor: '#f0f' },
        ])}
      />
    )
  }

  const renderStack = () => {
    // TODO any
    let elements: any[] = Array.isArray(children) ? children : [children]

    elements = elements.filter((child) => {
      return Array.isArray(child) || React.isValidElement(child)
    })

    elements = elements.reduce((children, child, index) => {
      if (children.length === 0) {
        return [child]
      }

      const addSpaces = () => {
        if (renderDivider) {
          return React.cloneElement(renderDivider, {
            key: `stack-divider-${index}`,
          })
        }

        return []
      }

      return [
        ...children,
        // ...addSpaces(),
        child,
      ]
    }, [])

    return elements
  }

  return <View style={{ padding }}>{renderStack}</View>
}
