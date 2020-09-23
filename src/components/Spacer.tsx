import React from 'react'
import { View, StyleSheet } from 'react-native'

import { useStack } from '../hooks'

export const Spacer = () => {
  const { debug } = useStack()

  return (
    <View
      style={StyleSheet.flatten([
        { flex: 1 },
        debug && { backgroundColor: '#f00' },
      ])}
    />
  )
}
