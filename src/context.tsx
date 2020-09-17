import React from 'react'

import type { Spaces, Padding } from './types'

interface Props {
  readonly debug: boolean
  readonly spaces?: Spaces
  readonly padding?: Padding
}

export const LayoutContext = React.createContext<Props>({
  debug: false,
  spaces: undefined,
  padding: undefined,
})

export const ContextProvider: React.FC<Props> = ({ children, ...props }) => (
  <LayoutContext.Provider value={props}>{children}</LayoutContext.Provider>
)
