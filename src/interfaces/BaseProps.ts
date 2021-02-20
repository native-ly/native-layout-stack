import React from 'react'

import type { SingleSize, Padding } from '../types/Padding'

export interface BaseProps {
  readonly padding?: Padding
  readonly spaces?: SingleSize
  readonly arrayDivision?: boolean
  readonly omitNull?: boolean
}
