module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'react-native'],
  env: {
    'react-native/react-native': true,
    node: true,
    jest: true,
  },
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': ['off'],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
