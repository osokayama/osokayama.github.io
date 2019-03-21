'use strict'
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    faq: './src/js/faq.js',
    index: './src/js/index.js',
    past: './src/js/past.js',
    // sponsor: './src/js/sponsor.js',
    // timetable: './src/js/timetable.js',
    staff: './src/js/staff.js'
  },
  output: {
    path: path.join(__dirname, 'script/'),
    publicPath: '/script',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../images/'
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: './',
    port: 3000,
    host: 'localhost',
    historyApiFallback: true
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
