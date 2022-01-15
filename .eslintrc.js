module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'vue/setup-compiler-macros': true,
  },
  globals: {
    NodeJS: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'func-call-spacing': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'vue/valid-v-for': 'off',
    // 'vue/require-v-for-key': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
  },
}
