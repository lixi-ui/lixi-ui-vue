var path = require("path");
var webpack = require("webpack");

const { VueLoaderPlugin, default: loader } = require('vue-loader');


var config = {
  mode:"production",
  entry: path.resolve(process.cwd() , './src/style/index.js'),
  output: {
    path: path.resolve(process.cwd(), './lib/style/'),
  },
  module: {
    rules: [
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
      }
    ]
  }
}

webpack(config, function (err) {
  if(err){
    console.log(err)
  } else {
    console.log("build ok")
  }
})
