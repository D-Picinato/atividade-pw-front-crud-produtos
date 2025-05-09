import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importHelpers from 'eslint-plugin-import-helpers';
import eslintPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import-helpers': importHelpers,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/react/',
            'module',
            ['parent', 'sibling', 'index'],
            '/@types/',
            '/assets/',
            '/schemas/',
            '/lib/',
            '/utils/',
            '/components/@shadcn/',
            '/components/',
            '/styles/',
            '/hooks/',
            '/views/',
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
    },
  },
  eslintPrettierRecommended,
  { rules: { 'prettier/prettier': 'warn' } },
);
