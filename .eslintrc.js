module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:import/typescript'],
  plugins: ['import'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index', 'unknown'],
        ],
        pathGroups: [
          {
            pattern: 'app/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {order: 'asc'},
        'newlines-between': 'always',
      },
    ],
  },
};
