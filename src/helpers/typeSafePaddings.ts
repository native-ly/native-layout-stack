import type { SingleSize } from '../types/Padding'

export const typeSafePaddings = (padding: SingleSize) => {
  if (typeof padding === 'string') {
    return parseFloat(padding)
  }

  return padding
}
