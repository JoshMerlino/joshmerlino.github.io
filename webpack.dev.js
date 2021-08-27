"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const webpack_1 = require("webpack");
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const webpack_conf_1 = __importDefault(require("./webpack.conf"));
module.exports = webpack_merge_1.default(webpack_conf_1.default, {
    mode: "development",
    output: {
        filename: "app/[name].dev.js"
    },
    plugins: [
        new webpack_1.HotModuleReplacementPlugin,
        new webpack_1.DefinePlugin({ PRODUCTION: JSON.stringify(false) })
    ],
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "/index.html",
            disableDotRule: true
        },
        proxy: {
            "/api": {
                target: "http://localhost/",
                secure: false
            }
        },
        hot: true,
        open: true,
        host: "localhost"
    }
});
//# sourceMappingURL=webpack.dev.js.map