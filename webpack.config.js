const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var isPrd = process.env.NODE_ENV === 'production';
var folder =  isPrd ? '/dist' : '/public';

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + folder,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.ejs',
      filename: __dirname + '/' + folder +  '/index.html',
      lang: 'pt-BR',
      title: 'Xewards Delivery Coupon',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1'
      }
    }),
    // new CspHtmlWebpackPlugin(),
    new GoogleFontsPlugin({
      fonts: [
        {
          family: 'Roboto',
          variants: ['300', '400', '500', '700']
        }
      ],
      formats: ['ttf']
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  devServer: {
    contentBase: './public',
    compress: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
}