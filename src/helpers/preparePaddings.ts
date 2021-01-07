import type { Padding } from '../types/Padding'

export const preparePaddings = (paddings: Padding) => {
  if (typeof paddings === 'number' || typeof paddings === 'string') {
    return { padding: paddings }
  }

  switch (paddings.length) {
    case 1: {
      return {
        padding: paddings[0],
      }
    }

    case 2: {
      return {
        paddingVertical: paddings[0],
        paddingHorizontal: paddings[1],
      }
    }

    case 3: {
      return {
        paddingTop: paddings[0],
        paddingHorizontal: paddings[1],
        paddingBottom: paddings[2],
      }
    }

    case 4: {
      return {
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
