const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client'
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../build/assets/project_name/'),
		publicPath: '/assets/project_name/'
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};