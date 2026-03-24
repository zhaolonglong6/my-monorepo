import node from '@repo/eslint-config/node'

export default [
  ...node,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]