const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
      context: __dirname,
      entry: {
          main: path.resolve(__dirname,"src/App.js")
      },
      output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'src/public/js/[name][hash].js'
      },module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {              
                  publicPath: '../'
                }
              },
              "css-loader"]
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {                  
                  publicPath: '../'
                }
              },
              "css-loader","sass-loader"
            ]
          },         
        ]
      },
      plugins : [
        new HtmlWebpackPlugin({
          template:"./index.html",
          filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
          filename: "./src/public/css/[name].[hash].css",
          chunkFilename: "css/[id].[hash].css"
        })
      ]
      
}