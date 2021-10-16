import randomColor from 'randomcolor'

import { useStack } from '.'

export const useDebugStyle = (debug?: boolean) => {
  const { debug: globalDebug } = useStack()

  return debug ?? globalDebug ? { backgroundColor: randomColor() } : undefined
}
