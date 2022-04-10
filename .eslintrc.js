module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'eslint:all',
  ignorePatterns: ['dist/*', 'node_modules/*'],
  root: true,
  rules: {
    'array-bracket-newline': ['error', {
      minItems: 3,
      multiline: false
    }],
    'array-element-newline': ['error', {
      minItems: 3,
      multiline: false
    }],
    // eslint-disable-next-line no-magic-numbers
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'require-unicode-regexp': 0,
    'strict': 0
  }

};
