import { useContext } from 'react'

import { LayoutContext } from '../context'

export const useStack = () => {
  const context = useContext(LayoutContext)

  if (context === undefined) {
    throw new Error('LayoutContext is not defined')
  }

  return context
}
