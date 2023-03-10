module.exports = {
	rules: {
		'color-no-invalid-hex': true,
		'declaration-colon-space-after': 'always',
		'declaration-no-important': true,
		'max-empty-lines': 2,
		'max-nesting-depth': 4,
		'number-no-trailing-zeros': true,
		'string-quotes': 'single',
		'length-zero-no-unit': true,
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-trailing-semicolon': 'always',
		'block-no-empty': true,
		'no-duplicate-selectors': true,
		'no-eol-whitespace': true,
		'no-extra-semicolons': true,
		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['composes', 'composes-with'],
			},
		],
	},
};
