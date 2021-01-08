type SinglePadding = number | string

export type Padding =
  | SinglePadding
  | [SinglePadding]
  | [SinglePadding, SinglePadding]
  | [SinglePadding, SinglePadding, SinglePadding]
  | [SinglePadding, SinglePadding, SinglePadding, SinglePadding]
