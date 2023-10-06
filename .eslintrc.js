module.exports = {
   'env': {
      'browser': true,
      'es2021': true,
      'jest': true
   },
   'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:react-hooks/recommended'],
   'overrides': [],
   'parser': '@typescript-eslint/parser',
   'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
   },
   'plugins': ['react', '@typescript-eslint'],
   'rules': {
      'indent': ['error', 3],
      'linebreak-style': ['error', 'windows'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'react/react-in-jsx-scope': 0,
      'react/prop-types': 1
   }
};