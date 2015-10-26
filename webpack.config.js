var webpack = require('webpack');
var path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
  entry: {
    app: './modules/app.js',
    about: ['./modules/about/index.js'],
    createhook: ['./modules/createhook/index.js']
  },
  output: {
    path: 'public/bundle',
    publicPath: '/bundle/',
    filename: '[name].js'
  },
  plugins: [commonsPlugin],
  module: {
    loaders: [
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.js(x)?$/, loader: 'babel', exclude: /.*node_modules.*/ },
    ],
  }
};


module.exports = config;
