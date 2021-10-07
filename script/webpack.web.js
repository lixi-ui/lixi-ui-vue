var path = require("path");
var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin, default: loader } = require('vue-loader');

const isProd = process.env.NODE_ENV === 'production'
/*
 * 是否使用生产环境的 vue
 */
const isVueProd = process.env.VUE_BUNDLE === 'production' || isProd
const vueBundle = isVueProd ? 'vue.esm-browser.prod.js' : 'vue.esm-browser.js'

var config = {
  mode:"development",
  entry: [
    './site/index.js'
  ],
  output: {
    // path: path.resolve(process.cwd() , './dist'),
    path: path.join(__dirname, "dist"),
    filename: 'index.js',
    publicPath: '/',
    environment: {
      arrowFunction: false
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      // vue: `vue/dist/${vueBundle}`,
      'vue': path.resolve(__dirname, '../node_modules/vue/dist/vue.esm-browser.js'),
      '@lixi': path.resolve(process.cwd() , './src'),
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
        loader: 'babel-loader',
        options:{
          presets: [
            [
              "@babel/preset-typescript",
              {
                allExtensions: true,
                isTSX: true
              }
            ]
          ],
          plugins: [
            "@vue/babel-plugin-jsx"
          ]
        }
      },
      {
        test: /\.vue$/,
        use: [
          // path.resolve(__dirname, '../site/md-loader/vueLoader.js'),
          'vue-loader'
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, '../site/md-loader/index.js'),
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
          },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     limit: 10,
          //     name: path.posix.join("static", 'img/[name].[hash:7].[ext]'),
          //     esModule: false
          //   }
          // },
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/lixi-logo.png'
    }),
    new VueLoaderPlugin()
  ]
}

var server = new WebpackDevServer(webpack(config),{
  contentBase: path.resolve(process.cwd() , './public'),
  // historyApiFallback: {
  //   index: 'index.html'
  // }
});

server.listen("8017",'0.0.0.0',(err)=>{
  if(!err){
    console.log('http://localhost:8017')
  } else {
    console.log('err', err);
  }
})