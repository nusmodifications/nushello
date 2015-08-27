var webpack = require('webpack');
var path = require('path');
var StringReplacePlugin = require('string-replace-webpack-plugin');

// The development config file. Please refer to `src/config.json` for details.
var config = require('./src/config.json');

var devServerConfig = {
  host: 'localhost',
  port: '3600',
  contentBase: './dist',
  publicPath: '/',
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  inline: false,
  watchDelay: 500,
  historyApiFallback: true,
  stats: {
    colors: true
  }
};

module.exports = {
  devServer: devServerConfig,
  entry: {
    app: [
      './src/js/app.js'
    ],
    vendor: [
      'react',
      'react-select',
      'react-router',
      'react-bootstrap',
      'react-router-bootstrap',
      'axios',
      'lodash',
      'moment',
      'leaflet',
      'leaflet.markercluster',
      'jquery',
      'numeral'
    ]
  },

  resolve: {
    root: [
      path.join(__dirname, 'src/js'),
      path.join(__dirname, 'src')
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.min.js'),
    new StringReplacePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?stage=0&optional=runtime']
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader!compass-loader'
      },

      {
        test: /\.(png|jpg|jpeg|bmp|ico|gif)$/,
        loader: 'url-loader'
      },

      {
        test: /\.(svg)$/,
        loader: 'raw-loader'
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: StringReplacePlugin.replace({
          replacements: [
            {
              pattern: /APP_ROOT/g,
              replacement: function () {
                return config.APP_ROOT;
              }
            },

            {
              pattern: /API_HOST/g,
              replacement: function () {
                return config.API_HOST;
              }
            },

            {
              pattern: /API_PORT/g,
              replacement: function () {
                return config.API_PORT;
              }
            }
          ]
        })
      }
    ]
  }
};
