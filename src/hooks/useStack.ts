import { useContext } from 'react'
// import { useSafeContext } from 'react-safe-context-hooks'

import { LayoutContext } from '../context'

export const useStack = () => useContext(LayoutContext)
