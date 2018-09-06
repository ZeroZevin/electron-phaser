var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  devtool: 'cheap-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  // watch: true,
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.HotModuleReplacementPlugin({
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
