import { useSafeContext } from 'react-safe-context-hooks'

import { LayoutContext } from '../context'

// TODO check if context exists
export const useStack = () => useSafeContext(LayoutContext)
