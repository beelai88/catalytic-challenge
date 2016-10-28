var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/codingchallenge.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js|jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.css/, 
      loaders: ['style', 'css'],
      include: path.join(__dirname, 'client'),
    }
    ]
  }
};
