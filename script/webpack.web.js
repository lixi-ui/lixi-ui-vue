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