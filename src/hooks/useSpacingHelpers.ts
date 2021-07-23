import { useStack } from '.'

export const useSpacingHelpers = () => {
  const { spacing } = useStack()

  const multiply = (value: number) => value * spacing
  const divide = (value: number) => value / spacing

  return { multiply, divide }
}
