# [Native Layout Stack](https://github.com/native-ly/native-layout-stack)

[![NPM version](https://flat.badgen.net/npm/v/native-layout-stack)](https://www.npmjs.com/package/native-layout-stack)
[![NPM downloads](https://flat.badgen.net/npm/dm/native-layout-stack)](https://www.npmjs.com/package/native-layout-stack)
[![NPM license](https://flat.badgen.net/npm/license/native-layout-stack)](https://www.npmjs.com/package/native-layout-stack)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/native-layout-stack)
[![Codecov](https://flat.badgen.net/codecov/c/github/native-ly/native-layout-stack)](https://codecov.io/gh/native-ly/native-layout-stack)
[![Travis](https://flat.badgen.net/travis/native-ly/native-layout-stack)](https://travis-ci.com/native-ly/native-layout-stack)
[![Bundle size](https://flat.badgen.net/packagephobia/install/native-layout-stack)](https://packagephobia.com/result?p=native-layout-stack)

## About

[SwiftUI](https://developer.apple.com/xcode/swiftui/) like layout management for React Native

### Idea

This library recreates the SwiftUI components in React Native:

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

**Connect the library with the project using ES6 import:**

```js
import { LayoutProvider, Stack, Spacer } from 'native-layout-stack'
```

## Options

### LayoutProvider

| **name**      | **type**                                                                                    | **description**                                   |
| ------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| padding       | Space or [Space] or [Space, Space] or [Space, Space, Space] or [Space, Space, Space, Space] | Outer space                                       |
| spaces        | Space                                                                                       | Space between children                            |
| debug         | boolean                                                                                     | Add random color to spaces                        |

### Stack

Stack extends [ViewProps](https://reactnative.dev/docs/view#props) and implements all [`LayoutProvider`](#layoutprovider) props without `debug`

### Spacer

Component uses [ViewProps](https://reactnative.dev/docs/view#props)

### Types

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
