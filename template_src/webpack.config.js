const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    // pathinfo: true,
    // devtoolLineToLine: true,
    filename: 'main.js',
    // sourceMapFilename: "main.js.map",
    path: path.join(__dirname, './www')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // sass-loader version >= 8
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes: true,
        useShortDoctype: true,
        decodeEntities: true,
        collapseWhitespace: true,
        minifyCSS: true
      }
    }),
    new VueLoaderPlugin(),
  ]
}
