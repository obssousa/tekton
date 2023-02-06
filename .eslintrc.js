module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:gridsome/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'gridsome/format-query-block': 'error'
  }
}
