import React, { useCallback, useMemo } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import randomColor from 'randomcolor'

import { useStack } from '../hooks'

import { preparePaddings } from '../helpers/preparePaddings'

import { BaseProps } from '../types/BaseProps'

interface Props extends ViewProps {}

export const Stack = ({ style, ...props }: Props) => {}
