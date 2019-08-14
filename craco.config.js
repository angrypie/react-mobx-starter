const babel = {
	plugins: [
		['styled-jsx/babel'],
		['babel-plugin-root-import', { rootPathSuffix: 'src' }],
		'@babel/plugin-proposal-object-rest-spread',
	],
}

//const webpack = {}

module.exports = {
	babel,
	//webpack: {
	//configure: webpack,
	//},
}
