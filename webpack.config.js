const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  }
  )],
  module:{
    rules:[
        {
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
        }
    ]
  }
};
