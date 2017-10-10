var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    devtool: false,
    entry: "./js/module.eseembler.js",
    output: {
        path: __dirname + "/dist",
        filename: "site.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourceMap: false})
    ]
};