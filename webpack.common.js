const path = require('path');
// const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        // another:'./src/another.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'code Spliyting'
        }),
        
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common' // 指定公共 bundle 的名称。
        // }),
        
    ],
  

    output: {
        filename: '[name].bundle.js',
        chunkFilename:'[name].bundle.js',//决定非入口文件的名称
        path: path.resolve(__dirname, 'dist')
    }
    
   
};