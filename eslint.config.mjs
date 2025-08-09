import next from 'eslint-config-next';

export default [
  // Next.js recommended rules (includes TypeScript support)
  ...next,
  // Global ignores
  {
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
      'public/data/**',
    ],
  },
  // Project-level tweaks
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  // Node scripts (CommonJS allowed)
  {
    files: ['scripts/**/*.{js,ts}'],
    languageOptions: {
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];
