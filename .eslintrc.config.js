module.exports = {
	parserOptions: {
		project: './tsconfig.json',
	},
	extends: ['plugin:@stencil/recommended'],
	standard: {
		env: ['mocha'],
	},
};
