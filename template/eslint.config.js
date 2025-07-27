import tseslint from 'typescript-eslint'

export default [
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'build', 'coverage', '/*.js'],
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'prefer-const': 'warn',
      curly: 'warn',
    }
  }
]