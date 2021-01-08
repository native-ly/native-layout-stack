export type SingleSize = number | string

export type Padding =
  | SingleSize
  | [SingleSize]
  | [SingleSize, SingleSize]
  | [SingleSize, SingleSize, SingleSize]
  | [SingleSize, SingleSize, SingleSize, SingleSize]
