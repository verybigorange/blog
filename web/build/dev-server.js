const devConfig = require("./webpack.dev.config");
const webpack_dev_server = require("webpack-dev-server");

const server = new webpack_dev_server();

server.listen(3000,()=>console.log("server is listening on 3000"))