import randomColor from 'randomcolor'

import type { Padding } from '../types/Padding'

export const preparePaddings = (paddings: Padding) => {
  const color = randomColor()

  if (typeof paddings === 'number' || typeof paddings === 'string') {
    return { padding: paddings, borderWidth: paddings, borderColor: color }
  }

  switch (paddings.length) {
    case 1: {
      return {
        padding: paddings[0],
        borderWidth: paddings[0],
        borderColor: color,
      }
    }

    case 2: {
      return {
        paddingVertical: paddings[0],
        paddingHorizontal: paddings[1],
        borderTopWidth: paddings[0],
        borderBottomWidth: paddings[0],
        borderLeftWidth: paddings[1],
        borderRigthWidth: paddings[1],
        borderColor: color,
      }
    }

    case 3: {
      return {
        paddingTop: paddings[0],
        borderTopWidth: paddings[0],
        paddingHorizontal: paddings[1],
        borderLeftWidth: paddings[1],
        borderRigthWidth: paddings[1],
        paddingBottom: paddings[2],
        borderBottomWidth: paddings[2],
        borderColor: color,
      }
    }

    case 4: {
      return {
        paddingTop: paddings[0],
        borderTopWidth: paddings[0],
        paddingRight: paddings[1],
        borderRigthWidth: paddings[1],
        paddingBottom: paddings[2],
        borderBottomWidth: paddings[2],
        paddingLeft: paddings[3],
        borderLeftWidth: paddings[3],
        borderColor: color,
      }
    }

    default: {
      throw new Error('Unsupported padding value')
    }
  }
}
