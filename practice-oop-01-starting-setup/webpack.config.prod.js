const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[contenthash]app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "/assets/scripts/",
  },
  devServer: {
    static: path.resolve(__dirname),
    port: 8012,
  },
  devtool: "cheap-source-map",
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
  ]
}
