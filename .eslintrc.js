module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		jest: true,
	},
	parserOptions: { ecmaVersion: 8, sourceType: 'module' },
	ignorePatterns: [
		'node_modules/*',
		'.husky/*',
		'generators/*',
		'public',
		'!.prettierrc.js',
	],
	extends: ['eslint:recommended'],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			settings: { react: { version: 'detect' } },
			env: {
				browser: true,
				node: true,
				es6: true,
			},
			plugins: ['react', '@typescript-eslint'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:react/recommended',
				'plugin:react-hooks/recommended',
				'plugin:jsx-a11y/recommended',
			],
			rules: {
				'react/no-unescaped-entities': 0,
				'react/prop-types': 'off', // ts types used instead
				'react/react-in-jsx-scope': 'off', // no need to import React when using next
				'jsx-a11y/no-onchange': 'off', // this is only relevant below ie11
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': ['error'],
				'@typescript-eslint/explicit-function-return-type': [
					'warn',
					{
						allowExpressions: true,
						allowConciseArrowFunctionExpressionsStartingWithVoid: true,
					},
				],
			},
		},
	],
};
