module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],

  rules: {
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],

      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'no-plusplus': 'off',
    'max-len': ['error', { code: 150 }],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
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
  },
};
