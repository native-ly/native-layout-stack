import React from 'react'

import { BaseProps } from './interfaces/BaseProps'

export interface Props extends BaseProps {
  readonly debug?: boolean
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
