/* eslint-disable no-magic-numbers */

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
    'func-style': 0,
    'indent': ['error', 2],
    'max-len': ['error', 120],
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'require-unicode-regexp': 0,
    'sort-imports': ['error', {
      allowSeparatedGroups: true,
      memberSyntaxSortOrder: [
        'none',
        'all',
        'multiple',
        'single'
      ]
    }],
    'strict': 0
  }

};
