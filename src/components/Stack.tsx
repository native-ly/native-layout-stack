import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import randomColor from 'randomcolor'

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
  omitNull,
  style,
  ...props
}: Props) => {
  const globalConfig = useStack()

  // TODO refactor
  const stackSpaces = spaces ?? globalConfig.spaces
  const stackPadding = padding ?? globalConfig.padding
  const stackOmitNull = omitNull ?? globalConfig.omitNull

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

      // TODO refactor
      if (
        (stackOmitNull && child === null) ||
        (child as any)?.type === React.Fragment
      ) {
        return [...children, child]
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
        // TODO refactor
        globalConfig.debug && {
          backgroundColor: globalConfig.debugColor || randomColor(),
        },
      ])}
    />
  )

  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        style,
        preparePaddings(stackPadding || 0, globalConfig.debug),
      ])}
    >
      {renderStack()}
    </View>
  )
}
