module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  globals: {
    RTXMemberMap: false,
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 2,
    // semi: [2, 'always']
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};
