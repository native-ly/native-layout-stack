import { useStack } from '.'

export const useSpacing = (value: number) => {
  const { spacing } = useStack()

  return spacing * value
}
