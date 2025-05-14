import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import nextEslintPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier'; 

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      browser: true,
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: reactPlugin,
      'prettier': prettierPlugin,
      '@next/next': nextEslintPlugin,
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-extra-semi': 'warn',
      'eqeqeq': 'error',
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...nextEslintPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error', 
    },
  },
];