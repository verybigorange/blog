const baseConfig = require('./webpack.base.config.js');
const webpackMerge = require("webpack-merge")
const webpack = require("webpack");
const path = require("path")

const devServer = require("webpack-dev-server");

module.exports = webpackMerge(baseConfig,{
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      }
});