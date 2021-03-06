const webpack = require("webpack");
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool:"source-map",
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ],
        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             name: "commons",
        //             chunks: "initial",
        //             minChunks: 2
        //         }
        //     }
        // } 
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        })

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,

            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                   MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
          
        ]
    }
    
});