# [native-layout-stack](https://github.com/native-ly/native-layout-stack)

[![NPM version](https://img.shields.io/npm/v/native-layout-stack?style=flat-square)](https://www.npmjs.com/package/native-layout-stack)
[![NPM downloads](https://img.shields.io/npm/dm/native-layout-stack?style=flat-square)](https://www.npmjs.com/package/native-layout-stack)
[![NPM license](https://img.shields.io/npm/l/native-layout-stack?style=flat-square)](https://www.npmjs.com/package/native-layout-stack)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/native-layout-stack)
[![Codecov](https://img.shields.io/codecov/c/github/native-ly/native-layout-stack?style=flat-square)](https://codecov.io/gh/native-ly/native-layout-stack)
[![Travis](https://img.shields.io/travis/native-ly/native-layout-stack/master?style=flat-square)](https://travis-ci.org/native-ly/native-layout-stack)

## About

[SwiftUI](https://developer.apple.com/xcode/swiftui/) like layout management for React Native

### Idea

This library recreates SwiftUI components in React Native:

**Stack**

- [HStack](https://developer.apple.com/documentation/swiftui/hstack/)
- [VStack](https://developer.apple.com/documentation/swiftui/vstack/)

**Spacer**

- [Spacer](https://developer.apple.com/documentation/swiftui/spacer/)

### Alternatives

- [Stacks](https://github.com/mobily/stacks/) by [Marcin Dziewulski](https://github.com/mobily/)
- [react-native-divisible-view](https://github.com/kangsu-dev/react-native-divisible-view/) by [kangsu](https://github.com/kangsu-dev/)
- [React Native Spacing System](https://github.com/hirokazutei/react-native-spacing-system/) by [Hirokazu Nakano Tei](https://github.com/hirokazutei/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install native-layout-stack
```

Or Yarn:

```sh
$ yarn add native-layout-stack
```

## Getting Started

**• Connect libary with project using ES6 import:**

```js
import { LayoutProvider, Stack, Spacer } from 'native-layout-stack'
```

## Options

### LayoutProvider

| **name** | **type**                                                                                    | **description** |
| -------- | ------------------------------------------------------------------------------------------- | --------------- |
| padding  | Space or [Space] or [Space, Space] or [Space, Space, Space] or [Space, Space, Space, Space] |                 |
| spaces   | Space                                                                                       |                 |
| debug    | boolean                                                                                     |                 |

### Stack

Stack extends ViewProps

| **name** | **type**                                                                                    | **description** |
| -------- | ------------------------------------------------------------------------------------------- | --------------- |
| padding  | Space or [Space] or [Space, Space] or [Space, Space, Space] or [Space, Space, Space, Space] |                 |
| spaces   | Space                                                                                       |                 |

### Spacer

ViewProps

### types

| **name** | **type**         |
| -------- | ---------------- |
| Space    | number or string |

## Example

```jsx
import { LayoutProvider, Stack, Spacer } from 'native-layout-stack'

const MyComponent = () => {
  return (
    <Stack padding={[20, 10]} spaces={20}>
      <View />
      <View />
      <View />
    </Stack>
  )
}

const App = () => {
  return (
    <LayoutProvider spaces={10} padding={20}>
      <MyComponent />
    </LayoutProvider>
  )
}

export default App
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
