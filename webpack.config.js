const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "result"),
        filename: "index_main.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index_main.html"
        }),
        new MiniCSSExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader, 
                    "css-loader"
                ]
            }
        ]
    }

}