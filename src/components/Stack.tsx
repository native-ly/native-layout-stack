import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import { LayoutContext } from '../context'

interface Props {
  spacing?: number
  padding?: number
}

export const Stack: React.FC<Props> = ({ children, spacing, padding }) => {
  const { debug } = useContext(LayoutContext)

  const divider = () => {
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

  const stack = () => {
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
        if (divider) {
          return React.cloneElement(divider, {
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

  return <View style={{ padding }}>{stack}</View>
}
