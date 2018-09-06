var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/assets'),
    publicPath: "assets/"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html', filename: '../index.html'  }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname,'../assets'), to: path.resolve(__dirname,'../dist', 'assets') }
    ]),
    new UglifyJsPlugin()
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
