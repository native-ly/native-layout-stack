import randomColor from 'randomcolor'

import type { Padding } from '../types/Padding'

// TODO refactor, any type
export const preparePaddings = (paddings: Padding, debug?: boolean): any => {
  const color = randomColor()

  if (typeof paddings === 'number' || typeof paddings === 'string') {
    return { padding: paddings, borderWidth: paddings, borderColor: color }
  }

  switch (paddings.length) {
    case 1: {
      return debug
        ? {
            borderWidth: paddings[0],
            borderColor: color,
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
            borderRigthWidth: paddings[1],
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
            borderRigthWidth: paddings[1],
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
            borderRigthWidth: paddings[1],
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
