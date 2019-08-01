const babel = {
	plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['styled-jsx/babel'],
		['babel-plugin-root-import', { rootPathSuffix: 'src' }],
	],
}

//const webpack = {}

module.exports = {
	babel,
	//webpack: {
	//configure: webpack,
	//},
}
