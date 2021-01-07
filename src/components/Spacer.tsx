import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

import { useStack } from '../hooks'

interface Props extends ViewProps {}

export const Spacer = ({ style, ...props }: Props) => {
  const { debug } = useStack()

  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        style,
        { flex: 1 },
        debug && { backgroundColor: '#f00' },
      ])}
    />
  )
}
