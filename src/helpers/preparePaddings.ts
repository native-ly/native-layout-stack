import randomColor from 'randomcolor'
import { ViewStyle } from 'react-native'

import { typeSafePaddings } from './typeSafePaddings'

import type { Padding } from '../types/Padding'

export const preparePaddings = (
  paddings: Padding,
  debug?: boolean
): ViewStyle => {
  const color = randomColor()

  if (typeof paddings === 'number' || typeof paddings === 'string') {
    return debug
      ? { borderWidth: typeSafePaddings(paddings), borderColor: color }
      : { padding: typeSafePaddings(paddings) }
  }

  switch (paddings.length) {
    case 1: {
      return debug
        ? {
            borderWidth: typeSafePaddings(paddings[0]),
            borderColor: color,
          }
        : {
            padding: typeSafePaddings(paddings[0]),
          }
    }

    case 2: {
      return debug
        ? {
            borderTopWidth: typeSafePaddings(paddings[0]),
            borderBottomWidth: typeSafePaddings(paddings[0]),
            borderLeftWidth: typeSafePaddings(paddings[1]),
            borderRightWidth: typeSafePaddings(paddings[1]),
            borderColor: color,
          }
        : {
            paddingVertical: typeSafePaddings(paddings[0]),
            paddingHorizontal: typeSafePaddings(paddings[1]),
          }
    }

    case 3: {
      return debug
        ? {
            borderTopWidth: typeSafePaddings(paddings[0]),
            borderLeftWidth: typeSafePaddings(paddings[1]),
            borderRightWidth: typeSafePaddings(paddings[1]),
            borderBottomWidth: typeSafePaddings(paddings[2]),
            borderColor: color,
          }
        : {
            paddingTop: typeSafePaddings(paddings[0]),
            paddingHorizontal: typeSafePaddings(paddings[1]),
            paddingBottom: typeSafePaddings(paddings[2]),
          }
    }

    case 4: {
      return debug
        ? {
            borderTopWidth: typeSafePaddings(paddings[0]),
            borderRightWidth: typeSafePaddings(paddings[1]),
            borderBottomWidth: typeSafePaddings(paddings[2]),
            borderLeftWidth: typeSafePaddings(paddings[3]),
            borderColor: color,
          }
        : {
            paddingTop: typeSafePaddings(paddings[0]),
            paddingRight: typeSafePaddings(paddings[1]),
            paddingBottom: typeSafePaddings(paddings[2]),
            paddingLeft: typeSafePaddings(paddings[3]),
          }
    }

    default: {
      throw new Error('Unsupported padding value')
    }
  }
}
