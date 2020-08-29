import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'

import { LayoutContext } from '../context'

export const Spacer: React.FC = () => {
  const { debug } = useContext(LayoutContext)

  return (
    <View
      style={StyleSheet.flatten([
        { flex: 1 },
        debug && { backgroundColor: '#f00' },
      ])}
    />
  )
}
