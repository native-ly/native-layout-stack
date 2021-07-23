import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

import { useDebugStyle } from '../hooks'

interface Props extends ViewProps {}

export const Spacer = ({ style, ...props }: Props) => {
  const debugStyle = useDebugStyle()

  return (
    <View
      {...props}
      style={StyleSheet.flatten([style, { flex: 1 }, debugStyle])}
    />
  )
}
