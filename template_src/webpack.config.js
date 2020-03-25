const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function (options) {
  return {
    mode: 'development',
    entry: './www/main.js',
    output: {
      pathinfo: true,
      devtoolLineToLine: true,
      filename: '[hash].[name].js',
      sourceMapFilename: "[hash].[name].js.map",
      path: path.join(__dirname, '../www')
    },
    module: {
      rules: [
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
        {
        test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
          options: {
            loaders: {
              js: {
                loader: 'babel-loader',
                options: {
                  presets: ['env'],
                  plugins: ['transform-object-rest-spread']
                }
              }
            }
          }
      }]
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'www/index.ejs',
        platform: process.argv.length > 5 ? process.argv[5].replace(/[- ]/g, '') : "",
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
      new VueLoaderPlugin()
    ]
  }
}
