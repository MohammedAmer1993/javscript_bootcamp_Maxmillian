const path = require("path");

module.exports = {
  mode: "production",
  entry: "./app.js",
  output: {
    filename: "outApp.js",
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
