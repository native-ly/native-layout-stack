import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import randomColor from 'randomcolor'

import { useStack } from '../hooks'

interface Props extends ViewProps {}

export const Spacer = ({ style, ...props }: Props) => {
  const { debug, debugColor = randomColor() } = useStack()

  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        style,
        { flex: 1 },
        // TODO refactor
        debug && { backgroundColor: debugColor },
      ])}
    />
  )
}
