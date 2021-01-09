import React from 'react'

import type { SingleSize, Padding } from '../types/Padding'

export interface BaseProps {
  readonly spaces?: SingleSize | React.ReactNode
  readonly padding?: Padding
}
