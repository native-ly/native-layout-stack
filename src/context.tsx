import React from 'react'

import { BaseProps } from './interfaces/BaseProps'

export interface Props extends BaseProps {
  readonly debug?: boolean
}

export const LayoutContext = React.createContext<Props>({
  debug: false,
  arrayDivision: undefined,
  padding: undefined,
  spaces: undefined,
  omitNull: undefined,
})

LayoutContext.displayName = 'LayoutContext'

export const LayoutProvider: React.FC<Props> = ({ children, ...props }) => (
  <LayoutContext.Provider value={props}>{children}</LayoutContext.Provider>
)
