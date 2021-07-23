import randomColor from 'randomcolor'

import { useStack } from '.'

export const useDebugStyle = () => {
  const { debug } = useStack()

  return debug ? { backgroundColor: randomColor() } : undefined
}
