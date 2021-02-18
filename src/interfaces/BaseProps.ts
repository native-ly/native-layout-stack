import React from 'react'

import type { SingleSize, Padding } from '../types/Padding'

export interface BaseProps {
  readonly arrayDivision?: boolean
  readonly padding?: Padding
  readonly spaces?: SingleSize
}
