const baseConfig = require('./webpack.base.config.js');
const webpackMerge = require("webpack-merge")
const webpack = require("webpack");


const prodConfig = webpackMerge(baseConfig,{
    
})


module.exports = prodConfig;