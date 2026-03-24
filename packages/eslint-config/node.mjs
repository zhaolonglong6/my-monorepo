import base from './base.mjs'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...base,
  {
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
  },
]
