module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['*.json'],
  rules: {
    'no-return-assign': 0,
    'no-param-reassign': [2, { props: false }],
    'no-unmodified-loop-condition': 1,
    'no-unreachable-loop': 1,
    'no-dupe-else-if': 1,
    'block-scoped-var': 1,
    'no-else-return': 0,
    radix: 0,
  },
};
