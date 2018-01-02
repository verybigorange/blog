const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require("express");
const app = express();
const webpack = require('webpack');
const path = require("path");
const chalk = require("chalk");

const devConfig = require("./webpack.dev.config.js");

console.log('> Starting dev server...')

const instance = webpackDevMiddleware(webpack(devConfig),
    {
        publicPath:"" //注意这里的路径要和webpack中的output的路径publicPath一致
    }
)
//用webpack-dev-middleware将webpack与express关联起来
app.use(instance);

instance.waitUntilValid(()=>{
    app.listen(3000,()=>{
        console.log(chalk.green("\n server is listening on 3000... \n"));
    });
})


