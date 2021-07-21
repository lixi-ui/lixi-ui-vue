var path = require("path");
var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');


var config = {
  mode:"development",
  entry: [
    './site/index.js'
  ],
  output: {
    path: path.resolve(process.cwd() , './dist'),
    filename: 'index.js',
    environment: {
      arrowFunction: false
    }
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
        use: 'vue-loader',
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

var server = new WebpackDevServer(webpack(config));

server.listen("8014",'0.0.0.0',(err)=>{
  if(!err){
    console.log('http://localhost:8014')
  } else {
    console.log('err', err);
  }
})