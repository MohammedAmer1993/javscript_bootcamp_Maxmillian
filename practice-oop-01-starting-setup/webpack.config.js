const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "/assets/scripts/",
  },
  devServer: {
    static: path.resolve(__dirname),
    port: 8012,
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
  ]
}
