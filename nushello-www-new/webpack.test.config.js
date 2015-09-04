var path = require('path');

module.exports = {
  resolve: {
    root: [
      path.join(__dirname, 'src/js'),
      path.join(__dirname, 'src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?stage=0']
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!raw-loader'
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'null-loader'
      },

      {
        test: /\.(png|jpg|jpeg|bmp|ico)$/,
        loader: 'url-loader'
      },

      {
        test: /\.(svg)$/,
        loader: 'raw-loader'
      }
    ]
  }
};
