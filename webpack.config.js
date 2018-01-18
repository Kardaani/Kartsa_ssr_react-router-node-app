var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
<<<<<<< HEAD
	entry: ['./app/index.js'],
	output: {
		path: path.join(__dirname, 'build'),
=======
        entry: ['./app/index.js'],
	output: {
		path:path.join(__dirname, 'build'),
>>>>>>> 8478cfc76c40a4ed42a4c04cc7f1dbafa479e142
		filename: 'bundle.js'
	},
	module: {
		loaders: [
<<<<<<< HEAD
		    {	
=======
		{
>>>>>>> 8478cfc76c40a4ed42a4c04cc7f1dbafa479e142
			test: /.js$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'app'),
			exclude: /node_modules/,
			query: {
<<<<<<< HEAD
				presets: ['es2015', 'react']
			}
		    }
		]
	}
=======
			presets: ['es2015', 'react']
			}
		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/public/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
	],
>>>>>>> 8478cfc76c40a4ed42a4c04cc7f1dbafa479e142
};
