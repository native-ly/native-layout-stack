const { defaults } = require('jest-config')

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['tsx', ...defaults.moduleFileExtensions],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
}
