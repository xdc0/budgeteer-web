/*
eslint-disable
  @typescript-eslint/naming-convention,
  @typescript-eslint/no-magic-numbers
*/
module.exports = {
  extends: ['plugin:@typescript-eslint/all'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json']
  },
  plugins: ['@typescript-eslint'],
  rules: {

    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single']
  }
};
