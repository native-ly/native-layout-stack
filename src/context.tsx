import React from 'react'

import { BaseProps } from './types/BaseProps'

export interface Props extends BaseProps {
  readonly debug?: boolean
}

// TODO? undefined
// export const LayoutContext = React.createContext<Props | undefined>(undefined)
export const LayoutContext = React.createContext<Props>({
  spacing: undefined,
  align: undefined,
  horizontal: false,
  debug: false,
})

LayoutContext.displayName = 'LayoutContext'

export const LayoutProvider = ({
  children,
  ...props
}: Props & { readonly children: React.ReactNode }) => (
  <LayoutContext.Provider value={props}>{children}</LayoutContext.Provider>
)
