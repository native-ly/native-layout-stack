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
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
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
