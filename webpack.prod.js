const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const common = require('./webpack.common.js')
const seed = require('./public/manifest.json')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      writeToFileEmit: true,
      seed
    })
  ]
})
