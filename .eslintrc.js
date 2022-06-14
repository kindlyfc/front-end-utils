module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'eslint-config-airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': 0,
    'no-console': 0,
    '@typescript-eslint/ban-types': 0
  },
  env: {
    jest: true
  }
}
