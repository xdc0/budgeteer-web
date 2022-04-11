/*
eslint-disable
  @typescript-eslint/naming-convention,
  @typescript-eslint/no-magic-numbers
*/
module.exports = {
  extends: ['plugin:@typescript-eslint/all'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [`${__dirname}/../tsconfig.json`]
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true
    }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/naming-convention': ['error', {
      format: ['camelCase', 'PascalCase'],
      selector: 'default'
    }],
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    '@typescript-eslint/quotes': ['error', 'single']
  }
};
