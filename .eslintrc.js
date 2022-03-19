module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'import',
    'import-helpers',
    'jsx-a11y',
    'jest-dom',
    'testing-library',
  ],
  rules: {
    'prettier/prettier': 'warn',

    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    camelcase: 'off',
    'import/export': 'off',
    'no-extra-boolean-cast': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'prefer-promise-reject-errors': 'off',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
