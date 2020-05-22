module.exports = {
  env: {
    es6: true,
    browser: true,
    'react-native/react-native': true,
    jest: true
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:react-native/all'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // 'react/jsx-one-expression-per-line': [{
  //   'allow': 'single-child'
  // }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    "indent": 0,
    'eol-last': 0,
    'no-console': 1,
    // 'import/extensions': [2, 'ignorePackages', {
    //   js: 'never',
    //   ts: 'never',
    //   jsx: 'never',
    //   tsx: 'never'
    // }],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    "react/jsx-props-no-spreading": 0,
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles' : 0,
    'react-native/split-platform-components': 2,
    'react-native/no-color-literals' : 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
  },
};
