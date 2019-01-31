module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'global-require': 0,
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false
      },
      {
        enforceForRenamedProperties: false
      }
    ]
  }
};
