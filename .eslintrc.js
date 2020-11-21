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
    radix: 0,
  },
};
