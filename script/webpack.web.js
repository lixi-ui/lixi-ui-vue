var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin, default: loader } = require('vue-loader');

const isProd = process.env.NODE_ENV === 'production'
/*
 * ????????? vue
 */
const isVueProd = process.env.VUE_BUNDLE === 'production' || isProd
const vueBundle = isVueProd ? 'vue.esm-browser.prod.js' : 'vue.esm-browser.js'

var config = {
  mode:"development",
  entry: ['./site/index.js'],
  output: {
    path: path.join(__dirname, "../dist"),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      // vue: `vue/dist/${vueBundle}`,
      'vue': path.resolve(__dirname, '../node_modules/vue/dist/vue.esm-browser.js'),
      '@lixi': path.join(__dirname , '../src'),
      '@site': path.join(__dirname , '../site')
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            "@vue/babel-plugin-jsx"
          ]
        }
      },
      {
        test: /\.(tsx?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                "@vue/babel-plugin-jsx"
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          }
        ]
      },
      {
        test: /\.md$|\.d\.md$/,
        use: [
          path.resolve(__dirname, '../site/md-loader/vueLoader.js'),
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              }
            },
          },
          {
            loader: path.resolve(__dirname, '../site/md-loader/index.js'),
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              }
            }
          }
        ],
      },
      {
        test: /\.vue$/,
        use: [
          // path.resolve(__dirname, '../site/md-loader/vueLoader.js'),
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              }
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30,
              name: path.posix.join("static", 'img/[name].[ext]'),
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/lixi-logo.png'
    }),
    new VueLoaderPlugin()
  ]
}

var server = new WebpackDevServer(webpack(config),{
  port: 8017
})

server.start()