var webpack = require('webpack')
var path = require('path')
var CommonsChunkPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin')
var chunks = ['app']
var config = require('./package.json')

module.exports = {

	entry: {
		app: './src/index.js'
	},
	output: {
		path: __dirname+'/dist',
		filename: 'bundle/[name].js',
        sourceMapFilename: 'bundle/[name].map'
	},
	devtool: '#source-map',	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			},
			{
		        test: /\.json$/,
		        loader: 'json-loader'
		    }
		]
	}
}

