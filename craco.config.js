const path = require('path')

const babel = {
	plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['styled-jsx/babel'],
	]
}

const webpack = {
	resolve: {
		alias: {
			...createAliases(['resources', 'components', 'routes', 'layouts', 'store']),
		}
	}
}

module.exports = {
	babel,
	webpack: {
		configure: webpack,
	},
}

// WEBPACK HELPER FUNCTIONS

function createAliases(aliases) {
	return aliases.reduce((ac, cur) => {
		ac[cur] = path.resolve(__dirname, `src/${cur}/`)
		return ac
	}, {})
}
