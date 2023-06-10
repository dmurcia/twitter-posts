module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'standard', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-handler-names': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off'
  },
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: '18.2', // React version
    },
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  globals: {
    JSX: true,
  },
}
