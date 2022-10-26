module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': ['error', 'never'],
    'react/react-in-jsx-scope': ['error', 'never'],
    'react/space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
  },
}
