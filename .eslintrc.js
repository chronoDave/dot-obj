module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [{
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/naming-convention': 'off'
    }
  }],
  rules: {
    // TypeScript
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'variable',
      format: ['camelCase'],
      leadingUnderscore: 'allow'
    }],
    // General
    'operator-linebreak': ['error', 'after'],
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'no-nested-ternary': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'warn',
    'no-await-in-loop': 'off',
    'object-curly-newline': ['warn', {
      ObjectPattern: { minProperties: 4 },
      ImportDeclaration: { minProperties: 4 }
    }],
    // Import
    'import/prefer-default-export': 'off',
    'import/order': ['error', {
      'newlines-between': 'always-and-inside-groups',
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
      ]
    }]
  }
};
