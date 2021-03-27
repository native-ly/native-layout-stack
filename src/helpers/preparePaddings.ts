import randomColor from 'randomcolor'
import { ViewStyle } from 'react-native'

import type { Padding } from '../types/Padding'

// TODO refactor, any type, add returned type
export const preparePaddings = (
  paddings: Padding,
  debug?: boolean
): ViewStyle => {
  const color = randomColor()

  if (typeof paddings === 'number' || typeof paddings === 'string') {
    return debug
      ? { borderWidth: paddings, borderColor: color }
      : { padding: paddings }
  }

  switch (paddings.length) {
    case 1: {
      return debug
        ? {
            // TODO parseFloat
            borderWidth: paddings[0],
            borderColor: color,
            // padding: 0, // TODO
          }
        : {
            padding: paddings[0],
          }
    }

    case 2: {
      return debug
        ? {
            borderTopWidth: paddings[0],
            borderBottomWidth: paddings[0],
            borderLeftWidth: paddings[1],
            borderRightWidth: paddings[1],
            borderColor: color,
          }
        : {
            paddingVertical: paddings[0],
            paddingHorizontal: paddings[1],
          }
    }

    case 3: {
      return debug
        ? {
            borderTopWidth: paddings[0],
            borderLeftWidth: paddings[1],
            borderRightWidth: paddings[1],
            borderBottomWidth: paddings[2],
            borderColor: color,
          }
        : {
            paddingTop: paddings[0],
            paddingHorizontal: paddings[1],
            paddingBottom: paddings[2],
          }
    }

    case 4: {
      return debug
        ? {
            borderTopWidth: paddings[0],
            borderRightWidth: paddings[1],
            borderBottomWidth: paddings[2],
            borderLeftWidth: paddings[3],
            borderColor: color,
          }
        : {
            paddingTop: paddings[0],
            paddingRight: paddings[1],
            paddingBottom: paddings[2],
            paddingLeft: paddings[3],
          }
    }

    default: {
      throw new Error('Unsupported padding value')
    }
  }
}
