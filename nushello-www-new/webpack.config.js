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
      'jquery',
      'moment',
      'numeral',
      './src/js/vendor/bootstrap-checkbox-radio-switch.js',
      './src/js/vendor/bootstrap-notify.js',
      './src/js/vendor/bootstrap-select.js',
      './src/js/vendor/light-bootstrap-dashboard.js',
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
        exclude: /(node_modules|vendor)/,
        loaders: ['babel-loader?stage=0&optional=runtime']
      },

      {
        test: /\.jsx?$/,
        exclude: /(node_modules|vendor)/,
        loader: 'eslint-loader'
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
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
        test: /\.(ttf|eot|woff)$/,
        loader: 'file-loader'
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
