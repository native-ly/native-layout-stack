import React from 'react'

type Spaces = number | [number, number]

type Padding =
  | Spaces
  | [number, number, number]
  | [number, number, number, number]

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
