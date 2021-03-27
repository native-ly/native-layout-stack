import React from 'react'

import { BaseProps } from './interfaces/BaseProps'

export interface Props extends BaseProps {
  readonly debug?: boolean
  readonly debugColor?: string
}

// TODO
export const LayoutContext = React.createContext<Props>({
  padding: undefined,
  spaces: undefined,
  arrayDivision: undefined,
  omitNull: undefined, // TODO
  // omitElements: [null, React.Fragment],
  // omitElements: React.Fragment,
  debug: false,
  debugColor: undefined,
  // debugColor: {
  //   stack: '#f00',
  //   spacer: '#000',
  // }
})

LayoutContext.displayName = 'LayoutContext'

export const LayoutProvider: React.FC<Props> = ({ children, ...props }) => (
  <LayoutContext.Provider value={props}>{children}</LayoutContext.Provider>
)
