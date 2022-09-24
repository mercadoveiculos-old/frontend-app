module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@typescript-eslint/parser'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    'no-empty': 'off',
    'node --trace-deprecation': 'off'
  }
}
