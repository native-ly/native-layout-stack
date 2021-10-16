import React, { useCallback, useMemo } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import randomColor from 'randomcolor'

import { useStack } from '../hooks'

import { preparePaddings } from '../helpers/preparePaddings'

import { BaseProps } from '../types/BaseProps'

interface Props extends ViewProps {}

// TODO
export const Stack = ({ children, style, spaces,
  padding, ...props }: Props) => {
  const globalConfig = useStack()

  // TODO refactor
  const stackSpaces = useMemo(
    () => spaces ?? globalConfig.spaces,
    [globalConfig.spaces, spaces]
  )

  const stackPadding = useMemo(
    () => padding ?? globalConfig.padding,
    [globalConfig.padding, padding]
  )
  const stackOmitNull = useMemo(
    () => omitNull ?? globalConfig.omitNull,
    [globalConfig.omitNull, omitNull]
  )

  const isSpacer = useMemo(
    () => typeof stackSpaces === 'number' || typeof stackSpaces === 'string',
    [stackSpaces]
  )

  const divider = useCallback(
    (): React.ReactElement => (
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
    ),
    [globalConfig.debug, globalConfig.debugColor, stackSpaces]
  )

  const addSpaces = useCallback(
    (index: number) => {
      if (!isSpacer) return []

      return React.cloneElement(divider, {
        key: `stack-divider-${index}`,
      })
    },
    [isSpacer, divider]
  )


  const stack = useMemo(() => {
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
  }, [addSpaces, children, stackOmitNull])
  
  return (
    <View>
      {stack}
    </View>
  )
}
