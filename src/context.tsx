import React from 'react'

import type { Padding } from './types/Padding'

export interface Props {
  readonly debug: boolean
  readonly spaces?: number
  readonly padding?: Padding
}

export const LayoutContext = React.createContext<Props>({
  debug: false,
  spaces: undefined,
  padding: undefined,
})

LayoutContext.displayName = 'LayoutContext'

export const LayoutContextProvider: React.FC<Props> = ({
  children,
  ...props
}) => <LayoutContext.Provider value={props}>{children}</LayoutContext.Provider>
