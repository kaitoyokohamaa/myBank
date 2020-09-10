var webpack = require("webpack");
var path = require("path");
const includePath = path.resolve(__dirname, "..");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                "react-html-attrs",
                "babel-plugin-styled-components",
                [require("@babel/plugin-proposal-decorators"), { legacy: true }]
              ],
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: includePath,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        include: includePath,
        use: "url-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
