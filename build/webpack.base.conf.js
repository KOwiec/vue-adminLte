'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')
const vueLoaderConfig = require('./vue-loader.conf')
const defaultSettings = require('../src/settings.js')
// page title
const name = defaultSettings.title || 'Vue-AdminLTE'
const pkg = require('../package.json');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        chunkFilename:'js/[id].[chunkhash].js',
        publicPath: process.env.NODE_ENV === 'production'
          ? config.build.assetsPublicPath
          : config.dev.assetsPublicPath
    },
  // provide the app's title in webpack's name field, so that
  // it can be accessed in index.html to inject the correct title.
  name: name,
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'jquery': 'jquery/src/jquery.js',
      '@': resolve('src'),
      'admin-lte':resolve('node_modules/admin-lte'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'),
                  resolve('test'),
                  resolve('node_modules/element-ui/src'),
                  resolve('node_modules/bootstrap-colorpicker/dist/js'),
                  resolve('BACKEND-fake/mirage'),
                  resolve('node_modules/overlayscrollbars-vue/dist')
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/components/SvgIcon')],
        options: {
            symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/components/SvgIcon')],  // folders other than src/components/SvgIcon use url-loader for .svg
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
        //replace default chinese language locale to english
        new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en'),
        // get data from package.json(see: InfoDialog in Sidebar components directory)
        new webpack.DefinePlugin({
            AppName: JSON.stringify(pkg.name),
            AppVersion: JSON.stringify(pkg.version),
            AppAuthor: JSON.stringify(pkg.author),
            AppLicense: JSON.stringify(pkg.license),
        }),
      // make global jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        })
  ]
}
