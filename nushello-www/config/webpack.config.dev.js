var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    app: path.join(__dirname, '../entry.js'),
    // vendor: ['jquery', 'bootstrap-sass'],
  },
  output: {
    path: __dirname + '/public',
    filename: "app.js"
  },
  resolve: {
    alias: {
      'app'   : path.join(__dirname, '../app'),
      'config': path.join(__dirname, '../config'),
      'public': path.join(__dirname, '../public')
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass!import-glob' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?stage=0' }
    ]
  },
  plugins: [
    // new UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new CommonsChunkPlugin('vender', 'vender.js')
  ],
  devtool : 'eval',
  debug   : true,
  progress: true
};
